import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-primary/10">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Eric Musyoka Thyaka</h3>
            <p className="text-muted-foreground text-sm">
              Software Developer specializing in creating innovative solutions with modern web technologies.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-smooth">About</a></li>
              <li><a href="#skills" className="hover:text-primary transition-smooth">Skills</a></li>
              <li><a href="#projects" className="hover:text-primary transition-smooth">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary transition-smooth">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:ericmusyoka17@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-4 w-4 mr-2" />
                ericmusyoka17@gmail.com
              </a>
              <a href="tel:0756225185" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                <Phone className="h-4 w-4 mr-2" />
                0756225185
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Eric Musyoka Thyaka. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/ericmusyoka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/ericmusyoka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
