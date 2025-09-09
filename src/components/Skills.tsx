
import { Code, Database, Palette, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "Angular", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "CSS", level: 90 }
      ],
      color: "blue"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      skills: [
        { name: "Python", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "APIs", level: 90 },
        { name: "Databases", level: 75 }
      ],
      color: "green"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Design & UI/UX",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 }
      ],
      color: "purple"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 80 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 75 }
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string, type: 'bg' | 'text' | 'border' = 'bg') => {
    const colors = {
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', border: 'border-blue-500' },
      green: { bg: 'bg-green-500', text: 'text-green-600', border: 'border-green-500' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', border: 'border-purple-500' },
      orange: { bg: 'bg-orange-500', text: 'text-orange-600', border: 'border-orange-500' }
    };
    return colors[color as keyof typeof colors][type];
  };

  return (
    <section id="skills" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 mx-auto mb-6"></div>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            I specialize in modern web technologies and frameworks to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-purple-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-purple-600">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(category.color, 'bg')} text-white rounded-xl mb-6`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-purple-100">{skill.name}</span>
                      <span className={`text-sm font-semibold text-purple-300`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-purple-950 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getColorClasses(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-purple-800/50 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-purple-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              <span className="text-white font-medium">Frontend</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-white font-medium">Backend</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
              <span className="text-white font-medium">Design</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              <span className="text-white font-medium">Tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;