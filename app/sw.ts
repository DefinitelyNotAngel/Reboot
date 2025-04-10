// This is a service worker file that helps with cache management

// Cache version - change this when you want to invalidate the cache
const CACHE_VERSION = "v1"
const CACHE_NAME = `reboot-by-angel-${CACHE_VERSION}`

// Install event - cache essential assets
self.addEventListener("install", (event: any) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/",
        "/favicon.ico",
        // Add other important assets here
      ])
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event: any) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith("reboot-by-angel-") && name !== CACHE_NAME)
          .map((name) => caches.delete(name)),
      )
    }),
  )
})

// Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) {
        return response
      }

      // Clone the request because it's a one-time use
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then((response) => {
        // Check if valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response because it's a one-time use
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Message event - handle cache clearing requests
self.addEventListener("message", (event: any) => {
  if (event.data && event.data.action === "clearCache") {
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.filter((name) => name.startsWith("reboot-by-angel-")).map((name) => caches.delete(name)),
        )
      })
      .then(() => {
        // Respond to the client that sent the message
        if (event.source) {
          event.source.postMessage({ action: "cacheCleared" })
        }
      })
  }
})

export {}
