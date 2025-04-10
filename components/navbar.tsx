"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-purple-900/10" : "bg-transparent"
      } border-b border-purple-900/30 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <RefreshCw className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
              Reboot
            </span>
            <span className="text-purple-300 ml-1 text-sm">by Angel</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-purple-200 hover:text-purple-100 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="#" className="text-purple-200 hover:text-purple-100 transition-colors text-sm font-medium">
              Services
            </Link>
            <Link href="#" className="text-purple-200 hover:text-purple-100 transition-colors text-sm font-medium">
              Portfolio
            </Link>
            <Link href="#" className="text-purple-200 hover:text-purple-100 transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="#" className="text-purple-200 hover:text-purple-100 transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-900/20">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-purple-200 hover:text-purple-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-900/30">
          <div className="container mx-auto px-4 py-6 space-y-6">
            <Link
              href="#"
              className="block text-purple-200 hover:text-purple-100 transition-colors py-2 text-center"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-purple-200 hover:text-purple-100 transition-colors py-2 text-center"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#"
              className="block text-purple-200 hover:text-purple-100 transition-colors py-2 text-center"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="block text-purple-200 hover:text-purple-100 transition-colors py-2 text-center"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#"
              className="block text-purple-200 hover:text-purple-100 transition-colors py-2 text-center"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md shadow-purple-900/20 mt-2"
              onClick={toggleMenu}
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
