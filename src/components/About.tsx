import { Card, CardContent } from "@/components/ui/card";import { Badge } from "@/components/ui/badge";import { Building, Users, Award, Globe } from "lucide-react";import { useScrollAnimation, useCountAnimation } from "@/hooks/use-scroll-animation";const About = () => {  const [headerRef, headerVisible] = useScrollAnimation(0.3);  const [summaryRef, summaryVisible] = useScrollAnimation(0.3);  const [skillsRef, skillsVisible] = useScrollAnimation(0.2);  const [statsRef, statsVisible] = useScrollAnimation(0.3);  const stats = [    { icon: Building, value: 5, suffix: "+", label: "Years Experience" },    { icon: Users, value: 500, suffix: "+", label: "Projects Completed" },    { icon: Award, value: 10, suffix: "+", label: "Awards & Certifications" },    { icon: Globe, value: 3, suffix: "", label: "Countries Worked" }  ];  const skills = [    { name: "AutoCAD", level: 95 },    { name: "ArchiCAD", level: 90 },    { name: "3Ds Max", level: 85 },    { name: "SketchUp", level: 90 },    { name: "Lumion", level: 88 },    { name: "V-ray", level: 85 },    { name: "Photoshop", level: 80 },    { name: "Illustrator", level: 75 },    { name: "Unreal Engine", level: 70 },    { name: "BIM 360", level: 85 },    { name: "Revit", level: 90 },    { name: "Project Coordination", level: 95 },    { name: "Team Management", level: 90 },    { name: "Technical Documentation", level: 88 }  ];  return (    <section id="about" className="py-20 bg-background">      <div className="container mx-auto px-6">        {/* Section Header */}        <div           ref={headerRef}          className={`text-center mb-16 transition-all duration-1000 ${            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'          }`}        >          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-float">            About <span className="text-primary drop-shadow-glow animate-pulse-slow">Me</span>          </h2>          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">            A forward-thinking professional passionate about architectural excellence          </p>        </div>        <div className="grid lg:grid-cols-2 gap-12 items-center">          {/* Professional Summary */}          <div             ref={summaryRef}            className={`transition-all duration-1000 delay-300 ${              summaryVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'            }`}          >            <h3 className="text-2xl font-bold text-foreground mb-6">Professional Summary</h3>            <p className="text-muted-foreground mb-6 leading-relaxed">              As a forward-thinking professional passionate about architectural excellence, I specialize in delivering               outsourced design and execution drawing services to companies across Europe and the Gulf region.               Leading the Alexandria Design team, in partnership with Miscellaneous, we collaborate with international               firms to provide high-quality design, execution drawings, shop-drawings, BIM, and interior design projects.            </p>            <p className="text-muted-foreground mb-8 leading-relaxed">              Our expertise ensures that every project aligns with the highest industry standards. I hold memberships               with the RIAI (Royal Institute of the Architects of Ireland) and the Egypt Engineering Syndicate. My               academic credentials include a Bachelor's degree in Architectural Engineering from Alexandria University,               a Master's degree from Altunbas University, and I am currently pursuing a Diploma in Professional               Architecture at University College Dublin (UCD).            </p>            {/* Skills */}            <div               ref={skillsRef}              className={`transition-all duration-1000 delay-500 ${                skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'              }`}            >              <h4 className="text-lg font-semibold text-foreground mb-4">Skills & Expertise</h4>              <div className="space-y-4">                {skills.map((skill, index) => {
                  const animatedSkillLevel = useCountAnimation(skill.level, 2000, skillsVisible);
                  
                  return (
                    <div 
                      key={index} 
                      className={`transition-all duration-700 ${
                        skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                      }`}
                      style={{ 
                        transitionDelay: skillsVisible ? `${index * 0.1 + 0.5}s` : '0s'
                      }}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{animatedSkillLevel}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-300 ease-out"
                          style={{ 
                            width: `${animatedSkillLevel}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                })}              </div>            </div>          </div>          {/* Stats Cards */}          <div             ref={statsRef}            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${              statsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'            }`}          >            {stats.map((stat, index) => {              const animatedValue = useCountAnimation(stat.value, 2000, statsVisible);                            return (                <Card                   key={index}                   className={`text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm ${
                    statsVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: statsVisible ? `${index * 0.1 + 0.1}s` : '0s'
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-primary rounded-full text-white">
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {animatedValue}{stat.suffix}
                    </h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;