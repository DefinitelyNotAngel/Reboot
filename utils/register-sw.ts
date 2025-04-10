export const registerServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("ServiceWorker registration successful with scope: ", registration.scope)
        })
        .catch((error) => {
          console.log("ServiceWorker registration failed: ", error)
        })
    })
  }
}

export const clearCacheViaServiceWorker = () => {
  if ("serviceWorker" in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      action: "clearCache",
    })
  }
}
