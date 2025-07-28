import { Button } from "@/components/ui/button";
import { Linkedin, Facebook, Globe } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/muhammad-mahmoud-159803176/",
      color: "hover:text-blue-600"
    },
    {
      name: "Behance",
      icon: Globe,
      url: "https://www.behance.net/mohamedaboelhamd",
      color: "hover:text-blue-500"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/mohamed.a.aboelhamd",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3 animate-fade-in-right">
      {socialLinks.map((link, index) => (
        <Button
          key={link.name}
          size="icon"
          variant="outline"
          className={`w-12 h-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 ${link.color}`}
          style={{ animationDelay: `${index * 0.2}s` }}
          asChild
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  );
};

export default SocialLinks;