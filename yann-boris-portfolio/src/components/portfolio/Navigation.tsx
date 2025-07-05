
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { label: "Home", id: "hero" },
              { label: "About me", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projets", id: "projects" },
              { label: "Consulting", id: "consulting" },
              { label: "Training", id: "training" },
              { label: "Gallery", id: "gallery" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { label: "Home", id: "hero" },
                { label: "About me", id: "about" },
                { label: "Skills", id: "skills" },
                { label: "Projets", id: "projects" },
                { label: "Consulting", id: "consulting" },
                { label: "Training", id: "training" },
                // { label: "Volunteering", id: "volunter" },
                { label: "Gallery", id: "gallery" },
                { label: "Contact", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
