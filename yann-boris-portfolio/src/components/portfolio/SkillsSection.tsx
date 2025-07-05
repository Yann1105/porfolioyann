
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "React.js", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "Angular", level: 55 },
      
        
      ]
    },
    {
      title: "Backend",
      color: "from-cyan-500 to-cyan-700",
      skills: [
        { name: "API REST", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "Python/Django", level: 80 },
        { name: "PHP", level: 30 },
        { name: "Java", level: 25 },
       
      
      ]
    },
    {
      title: "Data Bases ",
      color: "from-indigo-500 to-indigo-700",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 40 }
      ]
    },
    {
      title: "Outils & Design",
      color: "from-violet-500 to-violet-700",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Figma", level: 80 },
        { name: "Adobe Photoshop", level: 85 },
        { name: "Docker", level: 75 },
        
      ]
    },
    {
      title: "CMS",
      color: "from-violet-500 to-violet-700",
      skills: [
        { name: "WordPress", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className={`text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
