import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "loan-site",
      title: "Loan Site - Quick & Secure Loan Solutions",
      description: "A comprehensive loan application platform with secure payment integration and user-friendly interface.",
      url: "https://loanglobe-stk-pay.vercel.app",
      tech: ["React", "Node.js", "Payment Integration"]
    },
    {
      id: "clinic-booking",
      title: "Clinic Booking Site - Book Your Appointment",
      description: "Modern healthcare appointment booking system with real-time availability and patient management.",
      url: "https://stackcraft.netlify.app",
      tech: ["React", "UI/UX Design", "Booking System"]
    },
    {
      id: "music-downloader",
      title: "Music Downloader - Your Favorite Music Downloader",
      description: "Intuitive music download application with search functionality and high-quality audio output.",
      url: "https://aquamarine-treacle-b17bb8.netlify.app",
      tech: ["JavaScript", "API Integration", "Audio Processing"]
    },
    {
      id: "gps-tracking",
      title: "GPS Tracking - Speed & Distance Tracker",
      description: "Real-time GPS tracking application for monitoring speed, distance, and location data.",
      url: "https://globetrak.netlify.app",
      tech: ["GPS API", "React", "Real-time Data"]
    },
    {
      id: "video-downloader",
      title: "Video Downloader - Download Videos Fast",
      description: "High-performance video downloading tool with support for multiple formats and platforms.",
      url: "https://streamsaver1.netlify.app",
      tech: ["JavaScript", "Video Processing", "File Management"]
    },
    {
      id: "web-solutions",
      title: "Web Development Solutions - Design Services",
      description: "Professional web development and graphic design portfolio showcasing creative solutions.",
      url: "https://ericstackcrafts.netlify.app",
      tech: ["Full Stack", "Web Design", "Portfolio"]
    }
  ];

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
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-smooth group h-full">
              <CardHeader>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
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
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
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
              <div className="p-6 pt-0 mt-auto">
                <Link to={`/project/${project.id}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-primary/20 hover:bg-primary/10"
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;