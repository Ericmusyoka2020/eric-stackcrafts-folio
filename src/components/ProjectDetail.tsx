import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      id: "loan-site",
      title: "Loan Site - Quick & Secure Loan Solutions",
      description: "A comprehensive loan application platform with secure payment integration and user-friendly interface. This project features modern design principles, secure payment processing, and an intuitive user experience for loan applications.",
      url: "https://loanglobe-stk-pay.vercel.app",
      tech: ["React", "Node.js", "Payment Integration"],
      features: [
        "Secure payment integration",
        "User-friendly loan application process",
        "Real-time application tracking",
        "Responsive design"
      ]
    },
    {
      id: "clinic-booking",
      title: "Clinic Booking Site - Book Your Appointment",
      description: "Modern healthcare appointment booking system with real-time availability and patient management. Streamlines the booking process for both patients and healthcare providers.",
      url: "https://stackcraft.netlify.app",
      tech: ["React", "UI/UX Design", "Booking System"],
      features: [
        "Real-time appointment availability",
        "Patient management system",
        "Automated booking confirmations",
        "Mobile-responsive interface"
      ]
    },
    {
      id: "music-downloader",
      title: "Music Downloader - Your Favorite Music Downloader",
      description: "Intuitive music download application with search functionality and high-quality audio output. Supports multiple audio formats and provides seamless downloading experience.",
      url: "https://aquamarine-treacle-b17bb8.netlify.app",
      tech: ["JavaScript", "API Integration", "Audio Processing"],
      features: [
        "Advanced search functionality",
        "High-quality audio downloads",
        "Multiple format support",
        "Fast download speeds"
      ]
    },
    {
      id: "gps-tracking",
      title: "GPS Tracking - Speed & Distance Tracker",
      description: "Real-time GPS tracking application for monitoring speed, distance, and location data. Perfect for fitness enthusiasts and transportation monitoring.",
      url: "https://globetrak.netlify.app",
      tech: ["GPS API", "React", "Real-time Data"],
      features: [
        "Real-time GPS tracking",
        "Speed monitoring",
        "Distance calculation",
        "Location history"
      ]
    },
    {
      id: "video-downloader",
      title: "Video Downloader - Download Videos Fast",
      description: "High-performance video downloading tool with support for multiple formats and platforms. Optimized for speed and quality.",
      url: "https://streamsaver1.netlify.app",
      tech: ["JavaScript", "Video Processing", "File Management"],
      features: [
        "Multiple platform support",
        "Various video formats",
        "High-speed downloads",
        "Quality selection options"
      ]
    },
    {
      id: "web-solutions",
      title: "Web Development Solutions - Design Services",
      description: "Professional web development and graphic design portfolio showcasing creative solutions. Demonstrates expertise in full-stack development and modern design practices.",
      url: "https://ericstackcrafts.netlify.app",
      tech: ["Full Stack", "Web Design", "Portfolio"],
      features: [
        "Modern web design",
        "Full-stack development",
        "Creative solutions",
        "Professional portfolio"
      ]
    }
  ];

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-gradient mb-4">
              {project.title}
            </CardTitle>
            <CardDescription className="text-lg">
              {project.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-2 bg-primary/10 text-primary rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Button 
                size="lg"
                className="w-full md:w-auto"
                onClick={() => window.open(project.url, '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Live Project
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProjectDetail;