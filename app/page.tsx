import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import PalmPricing from "@/components/palm-pricing"
import ServiceArea from "@/components/service-area"
import Gallery from "@/components/gallery"
import PricingPlans from "@/components/pricing-plans"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="animated-gradient min-h-screen">
      <div className="flowing-lines" />
      <div className="floating-shapes" aria-hidden="true">
        <span className="shape shape--primary" />
        <span className="shape shape--secondary" />
        <span className="shape shape--accent" />
      </div>
      <Hero />
      <About />
      <Services />
      <PalmPricing />
      <ServiceArea />
      <Gallery />
      <PricingPlans />
      <Contact />
    </main>
  )
}
