import { Linkedin, Mail, ExternalLink, Code, Zap, Cog, Users, Award, Calendar, Cpu, CircuitBoard, Microchip } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-green-500/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-green-400">KMJ</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-green-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Kananelo Molebatsi Jama
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              A renewable energy engineer & tech founder building solutions at the intersection of 
              <span className="text-green-400"> sustainability</span>, 
              <span className="text-blue-400"> innovation</span>, and 
              <span className="text-purple-400"> impact</span>.
            </p>
            <div className="flex justify-center space-x-6 mt-6 text-sm">
              <span className="flex items-center space-x-2 text-cyan-400">
                <Cpu size={16} />
                <span>Embedded Systems</span>
              </span>
              <span className="flex items-center space-x-2 text-orange-400">
                <CircuitBoard size={16} />
                <span>IoT Systems</span>
              </span>
              <span className="flex items-center space-x-2 text-pink-400">
                <Microchip size={16} />
                <span>Artificial Intelligence</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">About Me</h2>
          <div className="text-lg text-slate-300 leading-relaxed space-y-4">
            <p>
              I'm a Mechatronics Engineer, startup founder, and digital innovation facilitator dedicated to solving 
              real-world challenges in energy, automation, and manufacturing.
            </p>
            <p>
              As the founder of <span className="text-green-400 font-semibold">Airjam Solutions</span>, I lead the development of sustainable 
              engineering solutions that improve efficiency and help communities transition to renewable energy. At the 
              University of Limpopo's Digital Incubation Hub, I serve as a board member and facilitator, mentoring 
              entrepreneurs in the mining and energy sectors.
            </p>
            <p>
              With technical roots in PV system design, embedded systems, and control systems, and a sharp focus on 
              innovation and business strategy, I work to bridge engineering with entrepreneurship to build scalable, 
              impactful tech.
            </p>
            <p>
              I'm passionate about <span className="text-cyan-400 font-semibold">Embedded Systems</span> that power smart devices, 
              <span className="text-orange-400 font-semibold"> IoT systems</span> that connect our world, and 
              <span className="text-pink-400 font-semibold"> Artificial Intelligence</span> that drives intelligent automation. 
              These technologies form the backbone of modern innovation, and I'm excited to explore their potential in creating 
              sustainable solutions for tomorrow's challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Code className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Technical Skills</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between items-center">
                  <span>PV System Design</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-5/6 bg-green-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Embedded Systems & Automation</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-5/6 bg-green-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Programming (Python, C++, Java)</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-4/5 bg-blue-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm text-slate-400 mt-4">
                  MATLAB, Simulink, AutoCAD, Fusion360<br />
                  Modbus, Zigbee, I2C, SPI, FTP, SSH protocols
                </div>
              </div>
            </div>

            {/* Passion Areas */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Cpu className="text-cyan-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Passion Areas</h3>
              </div>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-center space-x-3">
                  <Cpu className="text-cyan-400" size={16} />
                  <span>Embedded Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircuitBoard className="text-orange-400" size={16} />
                  <span>IoT Systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Microchip className="text-pink-400" size={16} />
                  <span>Artificial Intelligence</span>
                </div>
                <div className="text-sm text-slate-400 mt-4">
                  Microcontrollers, Sensors, Wireless Communication<br />
                  Machine Learning, Computer Vision, Neural Networks
                </div>
              </div>
            </div>

            {/* Business Skills */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Users className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Business & Soft Skills</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                <div className="flex justify-between items-center">
                  <span>Technical Sales & Client Training</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-5/6 bg-blue-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Product Development</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-4/5 bg-blue-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Team Leadership & Mentorship</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div className="w-5/6 bg-purple-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm text-slate-400 mt-4">
                  Innovation Strategy<br />
                  Public Speaking & Industry Facilitation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Professional Timeline</h2>
          <div className="space-y-8">
            {[
              {
                title: "Founder – Airjam Solutions",
                period: "2024 – Present",
                description: "Leading a renewable energy startup focused on smart systems and sustainable manufacturing.",
                color: "green"
              },
              {
                title: "Tech Sales Engineer – IBC Solar",
                period: "2023 – Present",
                description: "Supporting solar system design, cost analysis, client training, and international product support.",
                color: "blue"
              },
              {
                title: "Facilitator & Board Member – University of Limpopo Digital Incubation Hub",
                period: "2024 – Present",
                description: "Mentoring energy & mining entrepreneurs, and driving innovation programs.",
                color: "purple"
              },
              {
                title: "Electrical Engineering Intern – Letsatsi Solar Plant",
                period: "2022",
                description: "Troubleshooting and maintaining grid-scale PV systems and Siemens inverters.",
                color: "yellow"
              },
              {
                title: "Electronics/Industrial Intern – SA Truck Bodies",
                period: "2019",
                description: "Deployed automation tech, upgraded systems, and improved production throughput.",
                color: "red"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-4 h-4 rounded-full bg-${item.color}-400 mt-2 flex-shrink-0`}></div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <span className="text-slate-400 text-sm">{item.period}</span>
                  </div>
                  <p className="text-slate-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="text-yellow-400" size={24} />,
                title: "Solar Design Optimization",
                company: "IBC Solar",
                description: "Designed and commissioned commercial PV systems using advanced simulation tools and financial analysis models."
              },
              {
                icon: <Cog className="text-blue-400" size={24} />,
                title: "Factory Automation Upgrade",
                company: "SA Truck Bodies",
                description: "Engineered and deployed semi-automated sensors and robotic arms for trailer production."
              },
              {
                icon: <Zap className="text-red-400" size={24} />,
                title: "Real-Time Solar Diagnostics",
                company: "Letsatsi Solar Plant",
                description: "Maintained high-voltage systems (132/33kV), performed inverter diagnostics, and resolved breakdowns."
              },
              {
                icon: <Code className="text-green-400" size={24} />,
                title: "Smart Energy Modules",
                company: "Airjam Solutions",
                description: "Built modular energy units for off-grid communities focused on energy efficiency and affordability."
              },
              {
                icon: <Users className="text-purple-400" size={24} />,
                title: "Incubation Training Programs",
                company: "Digital Hub",
                description: "Developed and delivered training workshops for aspiring entrepreneurs in mining & energy."
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-green-500/40 transition-all hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <div className="ml-3">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-green-400">{project.company}</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Education</h2>
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="text-blue-400 mr-3" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-white">B.Sc. Mechatronics Engineering</h3>
                  <span className="text-blue-400">University of Cape Town</span>
                </div>
              </div>
              <p className="text-slate-300">Majors: Embedded Systems, Control & Instrumentation, Mechatronics Design</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-400 mr-3" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-white">National Senior Certificate (NSC)</h3>
                  <span className="text-yellow-400">Grey College Secondary</span>
                </div>
              </div>
              <p className="text-slate-300">5 distinctions | Full Colours (Academics) | Half Colours (Soccer, Chess, Debating)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-green-400">Let's Connect</h2>
          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:jama.molebatsi@gmail.com" 
              className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-green-500/40 transition-all hover:transform hover:scale-105"
            >
              <Mail className="text-green-400" size={20} />
              <span>Email</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500/40 transition-all hover:transform hover:scale-105"
            >
              <Linkedin className="text-blue-400" size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="#" 
              className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-purple-500/40 transition-all hover:transform hover:scale-105"
            >
              <ExternalLink className="text-purple-400" size={20} />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 text-center text-slate-400">
        <p>&copy; 2024 Kananelo Molebatsi Jama. Building the future of sustainable energy.</p>
      </footer>
    </div>
  );
};

export default Index;
