import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Bike, Code, Lightbulb } from "lucide-react";

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
            <h3 className="text-2xl font-bold mb-8">Hobbies & Interests</h3>
            <div className="space-y-4">
              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Bike className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Riding Bikes</h4>
                      <p className="text-muted-foreground text-sm">Exploring the world on two wheels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Exploring New Technologies</h4>
                      <p className="text-muted-foreground text-sm">Always learning and staying current</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Code className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Building Side Projects</h4>
                      <p className="text-muted-foreground text-sm">Creating innovative solutions in my free time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;