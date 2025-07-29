import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { toast } = useToast();
  const [headerRef, headerVisible] = useScrollAnimation(0.3);
  const [formRef, formVisible] = useScrollAnimation(0.3);
  const [infoRef, infoVisible] = useScrollAnimation(0.3);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:Mohamedaboelhamd765@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success toast
    toast({
      title: "Email client opened!",
      description: "Your message has been prepared in your email client.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleScheduleConsultation = () => {
    // Redirect to a scheduling page or external service
    window.open("https://calendly.com/your-scheduling-link", "_blank");
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Mohamedaboelhamd765@gmail.com",
      href: "mailto:Mohamedaboelhamd765@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+20) 100-840-5382",
      href: "tel:+201008405382"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Alexandria, Egypt",
      href: "https://www.google.com/maps/place/Alexandria,+Egypt"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-float">
            Get In <span className="text-primary drop-shadow-glow animate-pulse-slow">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your architectural vision to life? Let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card 
            ref={formRef}
            className={`border-border/50 bg-card/80 backdrop-blur-sm shadow-elegant transition-all duration-1000 delay-300 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-primary text-white shadow-glow hover:shadow-elegant transition-all duration-300"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div 
            ref={infoRef}
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new projects and opportunities. Whether you need 
                architectural design, BIM coordination, or technical consultation, I'm here to help 
                bring your vision to reality.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index}
                  className={`p-4 hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50 bg-card/50 backdrop-blur-sm ${
                    infoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ 
                    transitionDelay: infoVisible ? `${index * 0.2 + 0.7}s` : '0s'
                  }}
                >
                  <CardContent className="p-0">
                    <a 
                      href={item.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-full text-white group-hover:shadow-glow transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA */}
            <Card className="p-6 bg-gradient-primary text-white border-0 shadow-glow">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Start Your Project?</h4>
                <p className="mb-4 opacity-90">
                  Let's create something extraordinary together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;