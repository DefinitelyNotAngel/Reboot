"use client"
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Clock,
  Settings,
  PenToolIcon as Tool,
  Zap,
  Github,
  Twitter,
  Instagram,
  Facebook,
  RefreshCw,
  Shield,
  Award,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
// Import the register service worker function at the top
import { registerServiceWorker } from "@/utils/register-sw"

export default function Home() {
  useEffect(() => {
    registerServiceWorker()
  }, [])
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-black to-purple-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,40,180,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>

        <div className="container mx-auto px-4">
          <div className="relative z-30 text-center px-4 py-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 flex justify-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-3 shadow-lg shadow-purple-900/30">
                <RefreshCw className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-2"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                Reboot
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-3xl font-light text-purple-100 mb-6"
            >
              by Angel
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto mb-10 font-light"
            >
              Exceptional PC repair, cleaning, and custom building services
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-900/20 text-base"
              >
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:text-white text-base"
              >
                Our Services
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-purple-500 opacity-70"
                style={{
                  animation: `pulse 1.5s infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <style jsx global>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.3); opacity: 1; }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-black border-t border-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-purple-700 mr-4"></div>
              <span className="text-purple-400 uppercase tracking-wider text-sm font-medium">Premium Services</span>
              <div className="h-px w-8 bg-purple-700 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              We offer comprehensive PC services with meticulous attention to detail, ensuring your technology performs
              at its absolute best
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "PC Repair",
                description:
                  "Expert repair services for all PC issues, from complex hardware failures to software optimization.",
                icon: <Tool className="h-10 w-10 text-purple-400" />,
              },
              {
                title: "PC Cleaning",
                description:
                  "Professional cleaning services using premium tools and techniques to remove dust, improve cooling, and extend your computer's lifespan.",
                icon: <Zap className="h-10 w-10 text-purple-400" />,
              },
              {
                title: "Custom PC Building",
                description:
                  "Bespoke PC builds designed to your exact specifications, whether for gaming, creative work, or professional applications.",
                icon: <Settings className="h-10 w-10 text-purple-400" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-purple-800/50 text-white h-full shadow-xl shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="mb-4 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 p-4 rounded-lg inline-block">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-purple-100">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-purple-200 text-base">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="text-purple-300 p-0 hover:text-purple-100">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PC Showcase Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-purple-700 mr-4"></div>
              <span className="text-purple-400 uppercase tracking-wider text-sm font-medium">Portfolio</span>
              <div className="h-px w-8 bg-purple-700 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Explore our collection of meticulously crafted custom builds and precision repair projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Card className="bg-black border-purple-800/50 overflow-hidden shadow-xl shadow-purple-900/10 group">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Custom PC build ${item}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-purple-100">
                      {
                        [
                          "Luxury Gaming Build",
                          "Professional Workstation",
                          "Advanced Cooling System",
                          "Custom RGB Setup",
                          "Compact Performance Build",
                          "Precision Repair Project",
                        ][index % 6]
                      }
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-purple-200">
                      {
                        [
                          "High-performance gaming rig with custom water cooling and premium components",
                          "Professional workstation optimized for video editing and 3D rendering workflows",
                          "Advanced cooling solution designed for maximum overclocking potential",
                          "Sophisticated RGB lighting system with synchronized effects and remote control",
                          "Compact yet powerful Mini ITX build with no performance compromises",
                          "Complex motherboard repair and component replacement with precision tools",
                        ][index % 6]
                      }
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-black border-t border-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-purple-700 mr-4"></div>
              <span className="text-purple-400 uppercase tracking-wider text-sm font-medium">Our Promise</span>
              <div className="h-px w-8 bg-purple-700 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose Reboot</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              We're committed to providing exceptional service and unparalleled expertise for all your PC needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Expert Technicians",
                description:
                  "Our team consists of certified professionals with extensive experience in PC repair and custom building.",
                icon: <Award className="h-6 w-6 text-purple-950" />,
              },
              {
                title: "Premium Service",
                description:
                  "We understand the importance of your technology. Most repairs are completed within 24-48 hours with regular updates.",
                icon: <Clock className="h-6 w-6 text-purple-950" />,
              },
              {
                title: "Quality Components",
                description:
                  "We only use premium, brand-name components for all our builds and repairs, ensuring longevity and performance.",
                icon: <Star className="h-6 w-6 text-purple-950" />,
              },
              {
                title: "Comprehensive Warranty",
                description:
                  "All our services come with an extensive warranty to ensure your complete satisfaction and peace of mind.",
                icon: <Shield className="h-6 w-6 text-purple-950" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="mt-1 bg-gradient-to-br from-purple-400 to-indigo-400 p-4 rounded-lg shadow-lg shadow-purple-900/20">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-100 mb-3">{feature.title}</h3>
                  <p className="text-purple-200 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-black border-t border-purple-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center mb-4">
              <div className="h-px w-8 bg-purple-700 mr-4"></div>
              <span className="text-purple-400 uppercase tracking-wider text-sm font-medium">Stay Connected</span>
              <div className="h-px w-8 bg-purple-700 ml-4"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect With Us</h2>
            <p className="text-lg text-purple-200 max-w-2xl mx-auto">
              Follow us on social media for exclusive tech insights, updates, and special offers
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-10">
            {[
              { icon: <Facebook className="h-8 w-8" />, name: "Facebook", link: "#" },
              { icon: <Twitter className="h-8 w-8" />, name: "Twitter", link: "#" },
              { icon: <Instagram className="h-8 w-8" />, name: "Instagram", link: "#" },
              { icon: <Github className="h-8 w-8" />, name: "GitHub", link: "#" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-3 text-purple-300 hover:text-purple-100 transition-colors"
              >
                <div className="bg-purple-900/30 p-5 rounded-full border border-purple-700 shadow-lg shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1">
                  {social.icon}
                </div>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl bg-gradient-to-br from-purple-950 to-black border border-purple-800/50 rounded-2xl p-10 md:p-14 shadow-2xl shadow-purple-900/20"
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <RefreshCw className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Elevate Your PC Experience</h2>
            <p className="text-lg text-purple-200 mb-10 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and quote on your PC repair, cleaning, or custom build
              project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg shadow-purple-900/20 text-base"
              >
                Get Started Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-300 hover:bg-purple-900/20 hover:text-white text-base"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-16 px-4 border-t border-purple-900/50">
        <div className="container mx-auto">
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center">
              <RefreshCw className="w-6 h-6 text-purple-400 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                Reboot
              </span>
              <span className="text-purple-300 ml-2 text-lg">by Angel</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <p className="mb-6 text-center md:text-left">Premium PC services for all your technology needs.</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Services</h4>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    PC Repair
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    PC Cleaning
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Custom PC Building
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Hardware Upgrades
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Company</h4>
              <ul className="space-y-2 text-center md:text-left">
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-purple-300 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Contact Us</h4>
              <address className="not-italic text-center md:text-left">
                <p>123 Tech Street</p>
                <p>Silicon Valley, CA 94043</p>
                <p className="mt-2">Email: info@rebootbyangel.com</p>
                <p>Phone: (555) 123-4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-purple-800/50 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Reboot by Angel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
