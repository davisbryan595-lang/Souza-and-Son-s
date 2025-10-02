import { MapPin, CheckCircle } from "lucide-react"

const serviceAreas = [
  "Jacksonville Beach",
  "Fernandina Beach",
  "Mandarin",
  "Atlantic Beach",
  "Neptune Beach",
  "Ponte Vedra Beach",
  "Orange Park",
  "St. Augustine",
  "Yulee",
  "Callahan",
  "Middleburg",
  "Green Cove Springs",
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Serving Northeast Florida</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Areas We Serve</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Proudly serving Jacksonville and surrounding communities with professional tree care services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Our Service Coverage</h3>
            <div className="grid grid-cols-2 gap-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-muted-foreground leading-relaxed">
                Don&apos;t see your area listed?{" "}
                <a href="#contact" className="text-primary font-semibold hover:underline">
                  Contact us
                </a>{" "}
                to check if we service your location. We&apos;re always expanding our coverage area!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-4">Why Choose Local?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Fast Response Times</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Being local means we can respond quickly to your tree care needs and emergencies
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Local Expertise</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      We understand the unique tree species and conditions in Northeast Florida
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Community Focused</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      We&apos;re your neighbors, committed to serving our community with integrity
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-3">Emergency Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Storm damage? Fallen tree? We offer 24/7 emergency tree removal services throughout our service area.
              </p>
              <a href="tel:904-401-1439">
                <span className="text-primary font-bold text-lg">Call (904) 401-1439</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
