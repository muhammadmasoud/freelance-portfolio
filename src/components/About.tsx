import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Building, value: "5+", label: "Years Experience" },
    { icon: Users, value: "50+", label: "Projects Completed" },
    { icon: Award, value: "10+", label: "Awards & Certifications" },
    { icon: Globe, value: "3", label: "Countries Worked" }
  ];

  const skills = [
    "AutoCAD", "ArchiCAD", "3Ds Max", "SketchUp", "Lumion", "V-ray",
    "Photoshop", "Illustrator", "Unreal Engine", "BIM 360", "Revit",
    "Project Coordination", "Team Management", "Technical Documentation"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-float">
            About <span className="text-primary drop-shadow-glow animate-pulse-slow">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A forward-thinking professional passionate about architectural excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Summary</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              As a forward-thinking professional passionate about architectural excellence, I specialize in delivering 
              outsourced design and execution drawing services to companies across Europe and the Gulf region. 
              Leading the Alexandria Design team, in partnership with Miscellaneous, we collaborate with international 
              firms to provide high-quality design, execution drawings, shop-drawings, BIM, and interior design projects.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our expertise ensures that every project aligns with the highest industry standards. I hold memberships 
              with the RIAI (Royal Institute of the Architects of Ireland) and the Egypt Engineering Syndicate. My 
              academic credentials include a Bachelor's degree in Architectural Engineering from Alexandria University, 
              a Master's degree from Altunbas University, and I am currently pursuing a Diploma in Professional 
              Architecture at University College Dublin (UCD).
            </p>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="animate-scale-in hover:bg-primary hover:text-primary-foreground transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-primary rounded-full text-white">
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;