import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: "loan-site",
      title: "Loan Site - Quick & Secure Loan Solutions",
      description: "A comprehensive loan application platform with secure payment integration and user-friendly interface.",
      url: "https://loanglobe-stk-pay.vercel.app",
      tech: ["React", "Node.js", "Payment Integration"],
      color: "tech-blue"
    },
    {
      id: "clinic-booking",
      title: "Clinic Booking Site - Book Your Appointment",
      description: "Modern healthcare appointment booking system with real-time availability and patient management.",
      url: "https://stackcraft.netlify.app",
      tech: ["React", "UI/UX Design", "Booking System"],
      color: "tech-green"
    },
    {
      id: "music-downloader",
      title: "Music Downloader - Your Favorite Music Downloader",
      description: "Intuitive music download application with search functionality and high-quality audio output.",
      url: "https://aquamarine-treacle-b17bb8.netlify.app",
      tech: ["JavaScript", "API Integration", "Audio Processing"],
      color: "tech-purple"
    },
    {
      id: "gps-tracking",
      title: "GPS Tracking - Speed & Distance Tracker",
      description: "Real-time GPS tracking application for monitoring speed, distance, and location data.",
      url: "https://globetrak.netlify.app",
      tech: ["GPS API", "React", "Real-time Data"],
      color: "tech-orange"
    },
    {
      id: "video-downloader",
      title: "Video Downloader - Download Videos Fast",
      description: "High-performance video downloading tool with support for multiple formats and platforms.",
      url: "https://streamsaver1.netlify.app",
      tech: ["JavaScript", "Video Processing", "File Management"],
      color: "tech-blue"
    },
    {
      id: "web-solutions",
      title: "Web Development Solutions - Design Services",
      description: "Professional web development and graphic design portfolio showcasing creative solutions.",
      url: "https://ericstackcrafts.netlify.app",
      tech: ["Full Stack", "Web Design", "Portfolio"],
      color: "tech-purple"
    },
    {
      id: "bricon-civil",
      title: "Bricon - Build Vision Civil Engineering Services",
      description: "Professional civil engineering services platform connecting clients with expert engineers for construction projects.",
      url: "https://bricon-build-vision.vercel.app",
      tech: ["React", "Civil Engineering", "Service Platform"],
      color: "tech-orange"
    },
    {
      id: "cycle-stream",
      title: "CycleStream - Advanced Cycling Companion",
      description: "Advanced cycling app for tracking speed, kilometres, time with real-time movement sharing and live chat features.",
      url: "https://cyclestream.vercel.app",
      tech: ["React", "GPS Tracking", "Real-time Chat", "Live Sharing"],
      color: "tech-green"
    }
  ];

  const colorMap: Record<string, string> = {
    "tech-blue": "border-tech-blue/30 hover:border-tech-blue/60 hover:shadow-[0_0_20px_hsl(217_91%_60%/0.15)]",
    "tech-purple": "border-tech-purple/30 hover:border-tech-purple/60 hover:shadow-[0_0_20px_hsl(262_83%_58%/0.15)]",
    "tech-green": "border-tech-green/30 hover:border-tech-green/60 hover:shadow-[0_0_20px_hsl(142_76%_36%/0.15)]",
    "tech-orange": "border-tech-orange/30 hover:border-tech-orange/60 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.15)]",
  };

  const badgeColorMap: Record<string, string> = {
    "tech-blue": "bg-tech-blue/10 text-tech-blue",
    "tech-purple": "bg-tech-purple/10 text-tech-purple",
    "tech-green": "bg-tech-green/10 text-tech-green",
    "tech-orange": "bg-tech-orange/10 text-tech-orange",
  };

  const titleColorMap: Record<string, string> = {
    "tech-blue": "group-hover:text-tech-blue",
    "tech-purple": "group-hover:text-tech-purple",
    "tech-green": "group-hover:text-tech-green",
    "tech-orange": "group-hover:text-tech-orange",
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work and technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className={`transition-smooth group h-full ${colorMap[project.color]}`}>
              <CardHeader>
                <CardTitle className={`text-lg leading-tight transition-smooth ${titleColorMap[project.color]}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className={`px-2 py-1 text-xs rounded-md ${badgeColorMap[project.color]}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground break-all">
                      <span className="font-medium">URL: </span>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {project.url}
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;