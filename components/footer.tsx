import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-accent/30 to-primary/20 backdrop-blur-sm border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tree-TTve7cWDGVymAfWXqysqGjdwdS9rHw.jpeg"
                  alt="Souza & Son's Tree Service"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg text-foreground">Souza & Son&apos;s</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional tree care services for Northeast Florida since 1995. Family-owned and operated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Tree Removal</li>
              <li className="text-sm text-muted-foreground">Tree Trimming & Pruning</li>
              <li className="text-sm text-muted-foreground">Stump Grinding</li>
              <li className="text-sm text-muted-foreground">Crane Tree Removal</li>
              <li className="text-sm text-muted-foreground">Land Clearing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="tel:904-401-1439"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  (904) 401-1439
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@souzatreeservice.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@souzatreeservice.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Jacksonville Beach, FL</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Souza & Son&apos;s Tree Service. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
