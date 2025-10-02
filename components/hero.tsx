"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Users } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-lg animate-fade-in">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Professional Tree Care Since 1995</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Expert Tree Services for <span className="text-primary">Jacksonville</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Professional tree removal, trimming, and land clearing services. Family-owned, trusted by the community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="tel:904-401-1439">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Call (904) 401-1439
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg text-foreground mb-2">Fully Insured</h3>
              <p className="text-sm text-muted-foreground">Licensed and insured for your protection</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg text-foreground mb-2">Family Owned</h3>
              <p className="text-sm text-muted-foreground">Three generations of tree care expertise</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Award className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-bold text-lg text-foreground mb-2">Expert Team</h3>
              <p className="text-sm text-muted-foreground">Certified arborists and trained professionals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  )
}
