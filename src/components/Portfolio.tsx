import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ZoomIn } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// Import portfolio images
import portfolio1 from "@/assets/images/portfolio-1.jpg";
import portfolio2 from "@/assets/images/portfolio-2.jpg";
import portfolio3 from "@/assets/images/portfolio-3.jpg";
import portfolio4 from "@/assets/images/portfolio-4.jpg";
import portfolio5 from "@/assets/images/portfolio-5.jpg";
import portfolio6 from "@/assets/images/portfolio-6.jpg";
import portfolio7 from "@/assets/images/portfolio-7.jpg";
import portfolio8 from "@/assets/images/portfolio-8.jpg";
import portfolio9 from "@/assets/images/portfolio-9.jpg";
import portfolio10 from "@/assets/images/portfolio-10.jpg";
import portfolio11 from "@/assets/images/portfolio-11.jpg";
import portfolio12 from "@/assets/images/portfolio-12.jpg";

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useScrollAnimation(0.2);

  const projects = [
    {
      id: 1,
      title: "Modern Urban Residential Complex",
      category: "Residential",
      image: portfolio1,
      description: "Modern urban residential complex with sleek mid-rise buildings, landscaped surroundings, and premium amenities like a swimming pool."
    },
    {
      id: 2,
      title: "Contemporary Residential Courtyard Complex",
      category: "Residential",
      image: portfolio2,
      description: "Advanced 3D modeling and coordination for complex construction project."
    },
    {
      id: 3,
      title: "Modern Residential Complex with Central Amenities",
      category: "Residential",
      image: portfolio3,
      description: "Contemporary mid-rise residential buildings arranged around a landscaped courtyard with a central pool and sports field."
    },
    {
      id: 4,
      title: "Riverside Cultural Center",
      category: "Public",
      image: portfolio4,
      description: "Expansive modern cultural center set along a scenic river, surrounded by landscaped gardens."
    },
    {
      id: 5,
      title: " Urban Plaza with Dining Area",
      category: "Public",
      image: portfolio5,
      description: "Modern plaza with a central tree, outdoor seating, and dining spaces adjacent to a restaurant."
    },
    {
      id: 6,
      title: "Modern Eco-Friendly Housing Complex",
      category: "Sustainable",
      image: portfolio6,
      description: "Innovative modular housing with green roofs and sustainable architectural features."
    },
    {
      id: 7,
      title: "Futuristic Multi-Level Residential Complex",
      category: "Residential",
      image: portfolio7,
      description: "Expansive residential complex with interconnected buildings, green rooftops, and elevated walkways amid landscaped gardens."
    },
    {
      id: 8,
      title: "Modern Living Room with Sunken Seating Area",
      category: "Interior",
      image: portfolio8,
      description: "Stylish living room with a sunken sectional sofa, contemporary decor, and a central coffee table on a striped rug."
    },
    {
      id: 9,
      title: "Modern Collaborative Office Space",
      category: "Commercial",
      image: portfolio9,
      description: "Contemporary office featuring open workstations, large windows for natural light, and minimalist decor."
    },
    {
      id: 10,
      title: "Elegant Twin Bedroom Suite",
      category: "Interior",
      image: portfolio10,
      description: "Stylish twin bedroom featuring matching beds, modern decor, and a sophisticated ceiling design."
    },
    {
      id: 11,
      title: "Modern Compact Kitchen",
      category: "Interior",
      image: portfolio11,
      description: "Sleek kitchen with integrated appliances, marble countertops, and efficient storage solutions."
    },
    {
      id: 12,
      title: "Cozy Bedroom with Study Area",
      category: "Interior",
      image: portfolio12,
      description: "Well-organized bedroom with pastel decor, a single bed, study desk by the window, and a large wardrobe."
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Interior", "Sustainable", "Public"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-float">
            My <span className="text-primary drop-shadow-glow animate-pulse-slow">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my architectural projects and design expertise
          </p>

          {/* Category Filter */}
          <div className={`flex flex-wrap justify-center gap-3 transition-all duration-800 delay-300 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {categories.map((category) => (
              <Badge
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`cursor-pointer px-4 py-2 transition-all duration-300 hover:scale-105 ${
                  activeCategory === category 
                    ? "bg-primary text-primary-foreground shadow-glow" 
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 0.1}s` : '0s'
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedImage(project.image)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ZoomIn className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] animate-scale-in">
              <img
                src={selectedImage}
                alt="Portfolio item"
                className="w-full h-full object-contain rounded-lg shadow-elegant"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;