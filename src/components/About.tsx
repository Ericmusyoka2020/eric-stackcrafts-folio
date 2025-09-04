import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Target } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dedicated software developer with a passion for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-6 w-6 text-primary" />
              Career Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Dedicated and detail-oriented software developer with a strong foundation in software engineering 
              and modern technologies. Experienced in designing and implementing scalable applications using 
              Java, Python, React, Node.js, and MySQL. My passion lies in crafting innovative solutions that 
              improve user experience and business efficiency. I aim to join a forward-thinking organization 
              where I can contribute to impactful projects and continue enhancing my technical and creative skills.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <GraduationCap className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Degree in Software Engineering</h4>
                    <p className="text-muted-foreground">Nairobi University</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/40 transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Code className="h-8 w-8 text-primary mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Diploma in Software Engineering</h4>
                    <p className="text-muted-foreground">Kise College</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;