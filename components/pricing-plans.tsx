import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  {
    name: "Basic Trim",
    price: "$150",
    description: "Perfect for routine maintenance",
    features: ["Single tree trimming", "Up to 20 feet tall", "Basic pruning", "Debris removal", "Safety inspection"],
    popular: false,
  },
  {
    name: "Property Package",
    price: "$450",
    description: "Most popular for homeowners",
    features: [
      "Up to 3 trees trimmed",
      "Any height",
      "Professional pruning",
      "Complete debris removal",
      "Stump grinding (1 stump)",
      "Property assessment",
    ],
    popular: true,
  },
  {
    name: "Full Service",
    price: "Custom",
    description: "Comprehensive tree care",
    features: [
      "Unlimited trees",
      "Tree removal included",
      "Multiple stump grinding",
      "Land clearing",
      "Emergency services",
      "Ongoing maintenance plan",
    ],
    popular: false,
  },
]

export default function PricingPlans() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Transparent Pricing Plans
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Choose the package that fits your needs, or contact us for a custom quote
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "border-2 border-primary scale-105 md:scale-110" : "border border-border hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                {plan.price !== "Custom" && <p className="text-sm text-muted-foreground">starting at</p>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-white"
                      : "bg-white hover:bg-accent text-accent hover:text-white border-2 border-accent"
                  } font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            All prices are estimates. Final pricing depends on tree size, location, and complexity.{" "}
            <a href="#contact" className="text-primary font-semibold hover:underline">
              Contact us
            </a>{" "}
            for a free, accurate quote.
          </p>
        </div>
      </div>
    </section>
  )
}
