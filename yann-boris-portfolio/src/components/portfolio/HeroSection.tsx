
import { useState, useEffect } from "react";
import { Download, Briefcase, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "I design innovative solutions",
    "I develop with passion",
    "I train the talents of tomorrow",
    "I turn ideas into digital reality",
    "I build high-performance applications",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-4xl font-bold text-white">
          YBO
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            OUEDRAOGO Yann Boris
          </span>
        </h1>

        <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
        Full Stack Developer | Digital Consultant Trainer | Entrepreneur
        </h2>

        {/* Animated text */}
        <div className="h-16 mb-12">
          <p className="text-lg sm:text-xl text-purple-300 animate-fade-in">
            {texts[currentText]}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a
          href="/documents/Cv_Yann.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3"
          >
            <Download className="mr-2" size={20} />
            Download CV
          </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("projects")}
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3"
          >
            <Briefcase className="mr-2" size={20} />
            See my projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3"
          >
            <Mail className="mr-2" size={20} />
            Contact me
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Yann1105/"
            className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ouedraogo-yann-boris-b15638273/"
            className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
