
import { CheckCircle, Users, Award, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Training = () => {
  const services = [
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: "Online Volunteer assignment Volunteer Online Machine Learning Training Support",
      description: "For Advice on Neural Network will be on Sunday 19.00 GMT+3 <br>\\n\
        Docker will be on 16th April Wednesday, at 19.00 GMT+3 <br>\\n\
        Decision tree will be on 19 th April Saturday at 19.00 GMT+3."
    },
    {
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      title: "Social media promotion of the PMREAO Platform",
      description: "Volunteer online with ECA to contribute to the Sustainable Development Goals by volunteering 5 hours per week for 8 weeks starting 06/25/2024."
    }
    
  ];

  const associations = [
    {
      name: "Tenkodogo, Burkina Faso, with Enable",
      description: "Equitable access to digital technologies for illiterate and literate women For 2 days",
      role: "Trainer"
    },
    {
      name: "Garango, Burkina Faso, with Enable",
      description: "Equitable access to digital technologies for illiterate and literate women. For 2 days",
      role: "Trainer"
    },
    {
        name: "Koupèla, Burkina Faso, with Enable",
        description: "ONLINE SECURITY AWARENESS. For 1 day.",
        role: "Trainer"
      }
  ];

  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
          Volunteering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Training</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Services de consulting */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">
            United Nations Volunteering
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
              Training
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
