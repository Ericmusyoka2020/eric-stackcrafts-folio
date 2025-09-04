import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Bike, Code, Lightbulb, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6 mb-12">
              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:0756225185" className="text-muted-foreground hover:text-primary transition-smooth">
                        0756225185
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:ericmusyoka17@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                        ericmusyoka17@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex space-x-4">
              <Button size="lg" className="gradient-primary hover:opacity-90 transition-smooth text-white border-0">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
                <Phone className="mr-2 h-5 w-5" />
                Call Me
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <form action="https://formspree.io/f/mrblnvgp" method="POST" className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your full name" 
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Project inquiry, collaboration, etc." 
                      required
                      className="border-primary/20 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell me about your project or how we can work together..." 
                      rows={5}
                      required
                      className="border-primary/20 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary hover:opacity-90 transition-smooth text-white border-0"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">Hobbies & Interests</h3>
              <div className="space-y-4">
                <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Bike className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold text-sm">Riding Bikes</h4>
                        <p className="text-muted-foreground text-xs">Exploring the world on two wheels</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold text-sm">Exploring New Technologies</h4>
                        <p className="text-muted-foreground text-xs">Always learning and staying current</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Code className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold text-sm">Building Side Projects</h4>
                        <p className="text-muted-foreground text-xs">Creating innovative solutions in my free time</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;