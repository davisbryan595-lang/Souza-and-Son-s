"use client"

import { useState } from "react"

const galleryImages = [
  {
    src: "/tree-removal-crane-operation.jpg",
    alt: "Large tree removal with crane",
    category: "Removal",
  },
  {
    src: "/tree-trimming-professional-arborist.jpg",
    alt: "Professional tree trimming",
    category: "Trimming",
  },
  {
    src: "/stump-grinding-machine.jpg",
    alt: "Stump grinding service",
    category: "Stump Grinding",
  },
  {
    src: "/land-clearing-bulldozer.jpg",
    alt: "Land clearing project",
    category: "Land Clearing",
  },
  {
    src: "/tree-service-equipment-trucks.jpg",
    alt: "Professional tree service equipment",
    category: "Equipment",
  },
  {
    src: "/palm-tree-removal.jpg",
    alt: "Palm tree removal",
    category: "Palm Trees",
  },
  {
    src: "/tree-removal-before-after.jpg",
    alt: "Before and after tree removal",
    category: "Results",
  },
  {
    src: "/tree-trimming-residential-property.jpg",
    alt: "Residential tree trimming",
    category: "Residential",
  },
  {
    src: "/commercial-tree-service.jpg",
    alt: "Commercial tree service",
    category: "Commercial",
  },
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Array.from(new Set(galleryImages.map((img) => img.category)))]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section id="gallery" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Work Gallery</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            See the quality and professionalism of our tree care services
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-white/70 text-muted-foreground hover:bg-white hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
