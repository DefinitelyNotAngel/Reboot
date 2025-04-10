"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { clearCacheAndReload } from "@/utils/cache-utils"

export default function CacheClearer() {
  const [isClearing, setIsClearing] = useState(false)

  // Clear cache on initial load
  useEffect(() => {
    const clearInitialCache = async () => {
      try {
        // Only clear cache, don't reload to avoid infinite loop
        const caches = await window.caches?.keys()
        if (caches && caches.length > 0) {
          await Promise.all(caches.map((cacheName) => window.caches.delete(cacheName)))
        }
      } catch (error) {
        console.error("Error clearing initial cache:", error)
      }
    }

    clearInitialCache()
  }, [])

  const handleClearCache = async () => {
    setIsClearing(true)
    try {
      await clearCacheAndReload()
    } finally {
      // This will run if the page doesn't reload
      setIsClearing(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        size="sm"
        variant="outline"
        onClick={handleClearCache}
        disabled={isClearing}
        className="bg-black/70 backdrop-blur-sm border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:text-white"
      >
        <RefreshCw className={`h-4 w-4 mr-2 ${isClearing ? "animate-spin" : ""}`} />
        {isClearing ? "Clearing..." : "Clear Cache"}
      </Button>
    </div>
  )
}
