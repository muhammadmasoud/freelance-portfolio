import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Hero = () => {
  const [textRef, textVisible] = useScrollAnimation(0.5);
  const [imageRef, imageVisible] = useScrollAnimation(0.5);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="text-colabsolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-accent/10 rounded-full animate-pulse-slow delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div 
            ref={textRef}
            className={`text-center md:text-left transition-all duration-1200 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Muhammad Ali
              <span className="block text-accent">Aboelhamd Ali</span>

            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-4 font-light">
              Master in Architecture | BIM Coordinator
            </p>
            <p className="text-lg text-white/70 mb-8">
              Technical Architect | Team Leader
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-glow"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <a
                href="/src/assets/cvFile/Portfolio.pdf"
                download
                className="border-white/30 text-black hover:bg-white/10 backdrop-blur-sm inline-flex items-center justify-center px-4 py-2 text-lg font-medium rounded-md"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div 
            ref={imageRef}
            className={`flex justify-center transition-all duration-1200 delay-300 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-30 animate-pulse-slow"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-elegant animate-float">
                <img
                  src="/profilePicture/b8984965-6d23-40ac-93d7-57885063bb8b.png"
                  alt="Muhammad Ali Aboelhamd Ali MAHMOUD"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;