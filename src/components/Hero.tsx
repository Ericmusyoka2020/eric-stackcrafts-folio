import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-tech-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-tech-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Eric Musyoka</span>
            <br />
            <span className="text-foreground">Thyaka</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Software Developer & Engineer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative solutions with Java, Python, React, and Node.js. 
            Passionate about creating applications that improve user experience and business efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth text-white border-0 px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 px-8 py-6">
              <Github className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 text-muted-foreground">
            <a href="tel:0756225185" className="flex items-center hover:text-primary transition-smooth">
              <Phone className="h-4 w-4 mr-2" />
              0756225185
            </a>
            <a href="mailto:ericmusyoka17@gmail.com" className="flex items-center hover:text-primary transition-smooth">
              <Mail className="h-4 w-4 mr-2" />
              ericmusyoka17@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;