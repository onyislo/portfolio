import { MapPin, Phone, Mail, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-purple-100 leading-relaxed">
              I'm Bradley Odwori Onyango, a passionate full-stack web developer with 4 years of experience based in Kenya. 
              With expertise in modern web technologies, I specialize in creating robust, 
              scalable, and user-friendly web applications that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg text-purple-100 leading-relaxed">
              My journey in web development has led me to master various technologies including 
              React, Angular, Python, JavaScript, and CSS. I take pride in writing clean, 
              maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center text-white">
                <MapPin className="text-purple-300 h-5 w-5 mr-3 flex-shrink-0" />
                <span>Kenya</span>
              </div>
              <div className="flex items-center text-white">
                <Phone className="text-purple-300 h-5 w-5 mr-3 flex-shrink-0" />
                <span>0797079435</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="text-purple-300 h-5 w-5 mr-3 flex-shrink-0" />
                <span>bradleyodwori@outlook.com</span>
              </div>
              <div className="flex items-center text-white">
                <Award className="text-purple-300 h-5 w-5 mr-3 flex-shrink-0" />
                <span>Full Stack Developer</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-800 to-indigo-900 rounded-3xl p-8 shadow-xl border border-purple-500">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6 border-4 border-purple-300">
                  BO
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Bradley Odwori Onyango</h3>
                <p className="text-purple-300 font-semibold mb-6">Full Stack Web Developer</p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-4 shadow-md border border-purple-600">
                    <div className="text-2xl font-bold text-purple-300 mb-1">5+</div>
                    <div className="text-sm text-purple-100">Technologies</div>
                  </div>
                  <div className="bg-purple-800/50 backdrop-blur-sm rounded-lg p-4 shadow-md border border-purple-600">
                    <div className="text-2xl font-bold text-purple-300 mb-1">10+</div>
                    <div className="text-sm text-purple-100">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;