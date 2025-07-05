
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ConsultingSection = () => {
  const services = [
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: "Technical Audit",
      description: "Comprehensive analysis of your architecture and improvement recommendations"
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Custom Development",
      description: "Creation of web and mobile applications tailored to your specific needs"
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: "Team Training",
      description: "Training and skill enhancement for your development teams"
    },
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Strategic Consulting",
      description: "Support in your digital transformation and technology choices"
    }
    
  ];

  const associations = [
    {
      name: "Zindi",
      description: "African platform for data science and machine learning",
      role: "Ambassador, active member, and competition participant"
    },
    {
      name: "10,000 Codeurs",
      description: "Large-scale training initiative for digital careers",
      role: "Ambassador and graphic designer"
    },
    {
      name: "OpenTech",
      description: "Tech community focused on development, promoting AI, data science, and cybersecurity",
      role: "Head of the AI/Data Department"
    },
    {
      name: "Young Leading Conference (YoLeC)",
      description: "A recurring event designed by and for youth, centered on digital innovation",
      role: "Theme leader and Secretary General of the 2025 edition"
    }    
  ];

  return (
    <section id="consulting" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Consulting & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Engagement</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services de consulting */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
            Digital Consulting Services
            </h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {service.title}
                        </h4>
                        <p className="text-gray-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Engagement associatif */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
            Community Engagement
            </h3>
            <div className="space-y-6">
              {associations.map((association, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                      {association.name}
                    </h4>
                    <p className="text-gray-300 mb-2">
                      {association.description}
                    </p>
                    <p className="text-sm text-gray-400">
                      <span className="font-medium">Rôle:</span> {association.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
