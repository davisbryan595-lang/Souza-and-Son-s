import { TreePalm, DollarSign, Ruler } from "lucide-react"

const palmSpecies = [
  { name: "Coconut Palm", height: "20-30 ft", price: "$1,100 - $1,650" },
  { name: "Royal Palm", height: "30-40 ft", price: "$1,650 - $2,200" },
  { name: "Date Palm", height: "25-35 ft", price: "$1,375 - $1,925" },
  { name: "Canary Island Date Palm", height: "30-50 ft", price: "$1,650 - $2,750" },
  { name: "Queen Palm", height: "25-35 ft", price: "$1,375 - $1,925" },
  { name: "Foxtail Palm", height: "20-30 ft", price: "$1,100 - $1,650" },
  { name: "Bismarck Palm", height: "30-40 ft", price: "$1,650 - $2,200" },
  { name: "Sabal Palm", height: "20-40 ft", price: "$1,100 - $2,200" },
]

export default function PalmPricing() {
  return (
    <section id="palm-pricing" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <TreePalm className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Transparent Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Palm Tree Removal Pricing
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Professional palm tree removal services with clear, upfront pricing
          </p>
        </div>

        {/* Pricing Note */}
        <div className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border-2 border-primary/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">$55 Per Foot</h3>
              <p className="text-muted-foreground leading-relaxed">
                All palm tree removals are priced at <strong>$55 per foot</strong> of height. Prices below are estimates
                based on typical heights for each species. Final pricing is determined by actual tree height
                measurement.
              </p>
            </div>
          </div>
        </div>

        {/* Palm Species Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {palmSpecies.map((palm, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-border"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{palm.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Ruler className="w-4 h-4" />
                    <span>Typical height: {palm.height}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{palm.price}</div>
                  <div className="text-xs text-muted-foreground mt-1">estimated</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-foreground mb-4">What&apos;s Included</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">Complete palm tree removal</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">Debris hauling and cleanup</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">Safe, professional service</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">Licensed and insured crew</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
