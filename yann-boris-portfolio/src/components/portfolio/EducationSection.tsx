
import { GraduationCap, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const EducationSection = () => {
  const education = [
    {
      type: "diploma",
      icon: <GraduationCap className="w-6 h-6 text-purple-400" />,
      title: "Scientific Baccalaureate",
      institution: "Lycée WendPouiré de Saaba(Ouagadougou)",
      year: "2019-2020",
      description: "Serie D"
    },
    {
      type: "diploma",
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: "Licence Informatique",
      institution: "Burkina Institute of Technology (BIT)",
      year: "2022-2025",
      description: "Formation complète en programmation et systèmes d'information"
    },
    {
      type: "diploma",
      icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
      title: "Mathematics, physics, chemistry and computer science option Mathematical",
      institution: "Notbert ZONGO University of Koudougou  (UNZ)",
      year: "2020-2022",
      description: "Complete training in mathematics, physics, chemistry and computer science"
    }
  ];

  const certifications = [
    {
      type: "certification",
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "IBM Full Stack Software Developer  ",
      institution: "Cousera",
      year: "2025",
      description: "Professional certification in full stack development with React and Node.js"
    },
    {
      type: "certification",
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Machine Learning Bootcamp",
      institution: "Frontier Tech Leaders (FTL) ",
      year: "2024-2025",
      description: "Machine Learning Bootcamp under the Frontier Tech Leaders (FTL) Programme. Training in machine learning and artificial intelligence techniques for real-world applications."
    },
    {
      type: "certification",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      title: "IBM IT Project Manager",
      institution: "Cousera",
      year: "2024-2025",
      description: "Certification in IT project management with IBM, covering agile methodologies and project lifecycle"
    },
    {
      type: "certification",
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: "Digital Marketing ",
      institution: "Blemana",
      year: "2023",
      description: "Certification in digital marketing strategies, SEO, SEM and social media management"
    },
    {
      type: "certification",
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: "Entrepreneurship and Business Management",
      institution: "HP Life",
      year: "2024-2025",
      description: "Certification in entrepreneurship and business management, covering business planning, marketing, finance and operations management"}
  ];

  const allItems = [...education, ...certifications];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Formation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allItems.map((item, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {item.institution} • {item.year}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-300 text-sm">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
