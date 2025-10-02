import { Heart, Leaf, TreeDeciduous } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            About Souza & Son&apos;s Tree Service
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A family tradition of excellence in tree care
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <TreeDeciduous className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                For over 25 years, Souza & Son&apos;s Tree Service has been serving the Jacksonville area with
                professional tree care solutions. What started as a small family business has grown into one of the most
                trusted names in tree services throughout Northeast Florida.
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Heart className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Family Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a family-owned business, we treat every property as if it were our own. Our commitment to quality,
                safety, and customer satisfaction has been passed down through three generations of tree care
                professionals.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <Leaf className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We&apos;re dedicated to providing the highest quality tree care services while maintaining the health
                and beauty of your landscape. Our team of certified arborists and trained professionals use the latest
                equipment and techniques to ensure safe, efficient service.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Licensed and fully insured</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Certified arborists on staff</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">State-of-the-art equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">24/7 emergency services available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
