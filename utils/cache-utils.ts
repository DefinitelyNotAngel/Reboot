// Import the service worker function
import { clearCacheViaServiceWorker } from "./register-sw"

// Update the clearCache function to also clear via service worker
export const clearCache = async (): Promise<void> => {
  try {
    // Clear localStorage
    localStorage.clear()

    // Clear sessionStorage
    sessionStorage.clear()

    // Clear application cache if available
    if ("caches" in window) {
      const cacheNames = await caches.keys()
      await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)))
    }

    // Clear cache via service worker
    clearCacheViaServiceWorker()

    console.log("Cache cleared successfully")
    return Promise.resolve()
  } catch (error) {
    console.error("Error clearing cache:", error)
    return Promise.reject(error)
  }
}

export const clearCacheAndReload = async (): Promise<void> => {
  try {
    await clearCache()
    window.location.reload()
  } catch (error) {
    console.error("Error clearing cache and reloading:", error)
  }
}
