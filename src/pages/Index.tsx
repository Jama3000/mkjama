
import { Linkedin, Mail, ExternalLink, Code, Zap, Cog, Users, Award, Calendar, MapPin, Phone } from "lucide-react";

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
              <a href="#education" className="hover:text-green-400 transition-colors">Education</a>
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
            <h2 className="text-2xl md:text-3xl text-green-400 mb-4 font-semibold">
              Technical Sales Support Engineer & Startup Founder
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Results-driven engineer building solutions at the intersection of 
              <span className="text-green-400"> renewable energy</span>, 
              <span className="text-blue-400"> innovation</span>, and 
              <span className="text-purple-400"> entrepreneurship</span>.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6 text-slate-400">
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>South Africa</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>jama.molebatsi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Professional Summary</h2>
          <div className="text-lg text-slate-300 leading-relaxed">
            <p className="mb-4">
              Results-driven Technical Sales Support Engineer with a strong foundation in mechatronics engineering 
              and a proven track record of delivering innovative solutions in high-growth environments. 
              Founder of <span className="text-green-400 font-semibold">Airjam Solutions Pty (Ltd)</span>, 
              a renewable energy and manufacturing startup.
            </p>
            <p>
              Skilled in PV system design, troubleshooting, and client relationship management, with expertise 
              in embedded systems, control systems, and communication protocols. Passionate about entrepreneurship, 
              education, and continuous improvement in sustainable engineering solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Code className="text-green-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Technical Expertise</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• PV System Design & Commissioning</li>
                <li>• Circuit Design & Control Systems</li>
                <li>• Embedded Systems Programming</li>
                <li>• MATLAB, Simulink, Verilog</li>
                <li>• AutoCAD, Fusion360</li>
                <li>• Communication Protocols (Modbus, Zigbee, I2C, SPI)</li>
              </ul>
            </div>

            {/* Programming & Software */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Cog className="text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Programming & Tools</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Python, C++, Java</li>
                <li>• MATLAB & Simulink</li>
                <li>• Verilog HDL</li>
                <li>• AutoCAD & Fusion360</li>
                <li>• Engineering Problem-Solving</li>
                <li>• Software Tools & Programming</li>
              </ul>
            </div>

            {/* Business & Leadership */}
            <div className="bg-slate-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-center mb-6">
                <Users className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Business & Leadership</h3>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li>• Technical Sales & Support</li>
                <li>• Client Relationship Management</li>
                <li>• Team Leadership & Collaboration</li>
                <li>• Problem-Solving</li>
                <li>• Entrepreneurship</li>
                <li>• Public Speaking & Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section id="experience" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Professional Experience</h2>
          <div className="space-y-8">
            {[
              {
                title: "Technical Sales Engineer",
                company: "IBC Solar",
                period: "Sept 2023 – Present",
                location: "South Africa",
                responsibilities: [
                  "Provide expert technical sales support for solar energy solutions",
                  "Design and commission PV systems using advanced simulation tools",
                  "Conduct comprehensive cost analysis and financial modeling",
                  "Deliver client training and technical support services",
                  "Perform product testing and quality assurance",
                  "Build and maintain strong client relationships"
                ],
                color: "green"
              },
              {
                title: "Founder",
                company: "Airjam Solutions Pty (Ltd)",
                period: "July 2024 – Present",
                location: "South Africa",
                responsibilities: [
                  "Leading technology startup focused on renewable energy solutions",
                  "Developing innovative engineering solutions for manufacturing",
                  "Building scalable business models for sustainable technology",
                  "Managing product development and market strategy"
                ],
                color: "blue"
              },
              {
                title: "Facilitator & Board Member",
                company: "University of Limpopo Digital Incubation Hub",
                period: "March 2024 – Present",
                location: "South Africa",
                responsibilities: [
                  "Facilitate upskilling programs for startup incubates",
                  "Organize industry events and networking sessions",
                  "Provide strategic guidance as board member",
                  "Mentor entrepreneurs in mining and energy sectors"
                ],
                color: "purple"
              },
              {
                title: "Electrical Engineering Intern",
                company: "Letsatsi Solar Plant",
                period: "Jan 2022",
                location: "South Africa",
                responsibilities: [
                  "Maintained and optimized solar panel networks",
                  "Diagnosed and resolved plant breakdowns",
                  "Troubleshot high-voltage systems (132/33kV)",
                  "Performed Siemens inverter diagnostics and maintenance"
                ],
                color: "yellow"
              },
              {
                title: "Electronics/Industrial Engineering Intern",
                company: "SA Truck Bodies",
                period: "2019",
                location: "South Africa",
                responsibilities: [
                  "Rotated across multiple engineering departments",
                  "Developed and upgraded automation sensors",
                  "Designed custom truck trailers using CAD software",
                  "Programmed FANUC robot arms for production line"
                ],
                color: "red"
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-700/30 p-6 rounded-lg border border-slate-600">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-green-400 font-medium">{item.company}</p>
                    <p className="text-slate-400 text-sm">{item.location}</p>
                  </div>
                  <span className="text-slate-400 text-sm">{item.period}</span>
                </div>
                <ul className="text-slate-300 space-y-1">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-sm">• {resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Education</h2>
          <div className="space-y-6">
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="text-blue-400 mr-3" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-white">B.Sc. Mechatronics Engineering</h3>
                  <p className="text-blue-400">University of Cape Town</p>
                  <p className="text-slate-400 text-sm">2018 – Present</p>
                </div>
              </div>
              <p className="text-slate-300">Majors: Embedded Systems, Control & Instrumentation, Mechatronics Design</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <div className="flex items-center mb-4">
                <Award className="text-yellow-400 mr-3" size={20} />
                <div>
                  <h3 className="text-xl font-semibold text-white">National Senior Certificate (NSC)</h3>
                  <p className="text-yellow-400">Grey College Secondary</p>
                  <p className="text-slate-400 text-sm">2017</p>
                </div>
              </div>
              <p className="text-slate-300">5 Distinctions | Full Colours (Academics) | Half Colours (Soccer, Chess, Debating)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Key Projects & Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="text-yellow-400" size={24} />,
                title: "Solar Design Optimization",
                company: "IBC Solar",
                description: "Designed and commissioned commercial PV systems using advanced simulation tools and comprehensive financial analysis models."
              },
              {
                icon: <Cog className="text-blue-400" size={24} />,
                title: "Factory Automation Upgrade",
                company: "SA Truck Bodies",
                description: "Engineered and deployed semi-automated sensors and FANUC robotic arms for enhanced trailer production efficiency."
              },
              {
                icon: <Zap className="text-red-400" size={24} />,
                title: "Real-Time Solar Diagnostics",
                company: "Letsatsi Solar Plant",
                description: "Maintained high-voltage systems (132/33kV), performed advanced inverter diagnostics, and resolved critical system breakdowns."
              },
              {
                icon: <Code className="text-green-400" size={24} />,
                title: "Smart Energy Modules",
                company: "Airjam Solutions",
                description: "Developed modular energy units for off-grid communities focused on energy efficiency, affordability, and user-friendly interfaces."
              },
              {
                icon: <Users className="text-purple-400" size={24} />,
                title: "Entrepreneurship Training",
                company: "Digital Incubation Hub",
                description: "Developed and delivered comprehensive training workshops for aspiring entrepreneurs in mining and energy sectors."
              },
              {
                icon: <Award className="text-orange-400" size={24} />,
                title: "Product Development",
                company: "Multiple Projects",
                description: "Led end-to-end product development initiatives from concept to market, focusing on sustainable engineering solutions."
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

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-green-400">Let's Connect</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Ready to collaborate on innovative engineering solutions or discuss partnership opportunities? 
            Let's connect and build the future of sustainable technology together.
          </p>
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
        <p>&copy; 2024 Kananelo Molebatsi Jama. Building the future of sustainable energy and innovation.</p>
      </footer>
    </div>
  );
};

export default Index;
