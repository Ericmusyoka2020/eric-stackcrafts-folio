import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "Python", "HTML", "CSS", "Node.js", "MySQL", "React"]
    },
    {
      title: "Development Skills",
      icon: Globe,
      skills: ["Problem Solving", "Agile Development", "Git & Version Control"]
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["UI/UX Design", "Web Design", "Graphic Design"]
    },
    {
      title: "Languages",
      icon: Database,
      skills: ["English", "Kiswahili"]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-smooth group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <category.icon className="mr-3 h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary/20 transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;