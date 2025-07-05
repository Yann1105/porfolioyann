
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ConsultingSection } from "@/components/portfolio/ConsultingSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Navigation } from "@/components/portfolio/Navigation";
import { Footer } from "@/components/portfolio/Footer";
import { Training } from "@/components/portfolio/Training";
import { Gallery } from "@/components/portfolio/Gallery";
import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ConsultingSection />
        <EducationSection />
        <Training />
        <Gallery />
        <ContactSection />
      
      </main>
      <Footer />
    </div>
  );
};

export default Index;
