import { TreeDeciduous, Scissors, Drill, Cake as Crane, Leaf, Mountain } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: TreeDeciduous,
    title: "Tree Removal",
    description:
      "Safe and efficient removal of trees of any size, including hazardous and storm-damaged trees. We handle everything from small ornamental trees to large oaks.",
    image: "/tree-removal-service.jpg",
  },
  {
    icon: Scissors,
    title: "Tree Trimming & Pruning",
    description:
      "Professional trimming and pruning services to maintain tree health, improve appearance, and prevent potential hazards. Our certified arborists ensure proper techniques.",
    image: "/tree-trimming-pruning.jpg",
  },
  {
    icon: Drill,
    title: "Stump Grinding",
    description:
      "Complete stump removal and grinding services to reclaim your yard space. We grind stumps below ground level and can remove all debris.",
    image: "/stump-grinding-removal.jpg",
  },
  {
    icon: Crane,
    title: "Crane Tree Removal",
    description:
      "Specialized crane services for difficult-to-reach trees or trees near structures. Our crane operators are highly trained for safe, precise removals.",
    image: "/crane-tree-removal.jpg",
  },
  {
    icon: Leaf,
    title: "Underbrush Clearing",
    description:
      "Comprehensive underbrush and vegetation clearing to improve property appearance, reduce fire hazards, and prepare land for development.",
    image: "/underbrush-clearing-vegetation.jpg",
  },
  {
    icon: Mountain,
    title: "Land Clearing",
    description:
      "Full-service land clearing for residential and commercial properties. We handle lot clearing, site preparation, and debris removal for new construction.",
    image: "/land-clearing-bulldozer.jpg",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Tree Care Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Comprehensive tree care solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                  <a href="#contact">
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/80 hover:bg-primary/10 font-semibold p-0"
                    >
                      Get a Quote →
                    </Button>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
