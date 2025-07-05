
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";


export const ProjectsSection = () => {
  const projects = [
    {
      title: "APEDR web application",
      description: "Web platform dedicated to promoting rural development and local entrepreneurship. Intuitive interface, project management, membership, and news. Integration of interactive forms for applications, donations, and partnerships.",
      image: "/images/apedr.jpg",
      technologies: ["WordPress", "Mysql"],
      status: "Deploy",
      demoUrl: "https://www.apedr.org/"
    },
    {
      title: "Application web Silma sas",
      description: "Web platform to present the services of the company Silma SAS. With an interactive admin dashboard.",
      image: "/images/silma.jpg",
      technologies: ["React", "node.js", "MongoDB", "Tailwind"],
      status: "Not Deploy",
      demoUrl: "#"
    },
    {
      title: "Application web Bimades",
      description: "Web platform to present the services of the company Bimades. With an interactive admin dashboard.",
      image: "/images/bimades.jpg",
      technologies: ["React js", "node.js", "PostgreSQL", "Tailwind"],
      status: "Not Deploy",
      demoUrl: "#"
    },
    {
      title: "Burkinabe Football Federation (FBF) web application",
      description: "Web application for the Burkinabe Football Federation.",
      image: "/images/fbf.jpg",
      technologies: ["WordPress", "Mysql"],
      status: "Deploy",
      demoUrl: "https://fbf.name/"
    },
    {
      title: "Mobile portfolio application",
      description: "A Mobile Portfolio Application is a user-friendly mobile app designed to showcase an individual's or business's work, skills, and achievements in a professional, accessible format.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Firebase", "Dart"],
      status: "Not Deploy",
      demoUrl: "#"
    },
    {
      title: "Web application for electronic archiving management for Logo Service",
      description: "A web application designed for the efficient management of electronic archiving for Logo Service. It enables the structured storage, retrieval, and tracking of digital documents with advanced search capabilities, secure access control, and user-friendly interfaces tailored to organizational needs.",
      image: "/images/logo.jpg",
      technologies: ["Flutter", "Firebase", "Dart"],
      status: "Not Deploy",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Mes <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Discover a selection of my creations, combining technical innovation and modern design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
  <Card
    key={index}
    className="bg-slate-900/50 border-slate-700 overflow-hidden hover:bg-slate-900/70 transition-all duration-300 group"
  >
    <div className="relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
    </div>

    <CardHeader>
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
    </CardHeader>

    <CardContent>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <Badge
            key={techIndex}
            variant="secondary"
            className="bg-purple-500/20 text-purple-300 border-purple-500/30"
          >
            {tech}
          </Badge>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          size="sm"
          variant="outline"
          className="border-gray-600 text-gray-900 hover:bg-gray-600/20"
        >
          <Rocket size={16} className="mr-2" />
          {project.status}
        </Button>

        {project.demoUrl && project.demoUrl !== "#" && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-md transition-colors duration-300"
          >
            <ExternalLink size={16} className="mr-2" />
            Demo
          </a>
        )}
      </div>
    </CardContent>
  </Card>
))}

        </div>
      </div>
    </section>
  );
};
