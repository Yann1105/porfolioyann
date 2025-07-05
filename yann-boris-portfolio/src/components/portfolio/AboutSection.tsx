
import { Code, Database, Palette, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  const passions = [
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: "Artificial intelligence",
      description: "Passionate about AI and machine learning to create intelligent solutions"
    },
    {
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      title: "Internet of Things (IoT)",
      description: "Passionné par les systèmes IoT connectés et innovants"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: "Data Science",
      description: "Data analysis and visualization for relevant insights"
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Training and Mentoring",
      description: "Knowledge transfer and developer supports"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
            Full Stack Developer passionate about IoT and innovation.
            </h3>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
              With two years of experience in web and mobile development, I design comprehensive digital solutions that combine technical performance and an exceptional user experience.
              </p>
              <p>
              As a digital consultant, I support companies in their digital transformation by offering technical audits, customized development, and training.
              </p>
              <p>
              An active member of the African tech community (Zindi, 10,000 Codeurs, ompenTech, and Yolec),
I am committed to democratizing access to technology and training the
new generation of developers.
              </p>
            </div>
          </div>

          {/* Passions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {passions.map((passion, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {passion.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {passion.title}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {passion.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
