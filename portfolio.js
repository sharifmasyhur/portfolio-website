import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Database, Shield, Cloud } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.pageYOffset;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      const sections = ['about', 'experience', 'education', 'projects', 'volunteering', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const experiences = [
    {
      title: "Student Member",
      company: "Google Developer Student Clubs",
      date: "Nov 2022 - Jun 2024",
      location: "Remote",
      description: "Community of Google Cloud Innovator, Android Studio user, enrolled in Cloud Engineer/IAM learning path."
    },
    {
      title: "Media Assistant",
      company: "Asyraaf UI", 
      date: "Aug 2022 - Apr 2024",
      description: "Assisted in media content creation according to organizational needs. Previously served as a member volunteering for open events."
    },
    {
      title: "Internal Staff",
      company: "MPM FTUI",
      date: "Feb 2023 - Jan 2024", 
      description: "Responsible for archived documentation, coordinating asset use and maintenance, and managing meeting attendance."
    }
  ];

  const skills = [
    {
      icon: <Database className="w-8 h-8 mb-4 text-blue-600" />,
      title: "Network Infrastructure",
      description: "Design, implementation, and management of complex network systems"
    },
    {
      icon: <Shield className="w-8 h-8 mb-4 text-purple-600" />,
      title: "System Security", 
      description: "Ensuring reliability and security through cutting-edge technologies"
    },
    {
      icon: <Code className="w-8 h-8 mb-4 text-green-600" />,
      title: "Virtualization",
      description: "Experience in designing and implementing virtualized environments"
    },
    {
      icon: <Cloud className="w-8 h-8 mb-4 text-orange-600" />,
      title: "Cloud Technologies",
      description: "Google Cloud Platform expertise and continuous learning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-ping"></div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white bg-opacity-20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-lg z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sharif Masyhur
            </div>
            <ul className="hidden md:flex space-x-8">
              {['about', 'experience', 'education', 'projects', 'volunteering', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-all duration-300 hover:text-blue-600 transform hover:scale-105 px-3 py-2 rounded-lg ${
                      activeSection === section 
                        ? 'text-blue-600 font-bold bg-blue-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {section === 'volunteering' ? 'community' : section}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white text-center relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 animate-pulse">
                Sharif Masyhur
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-2 text-blue-200 font-light">(Saf)</p>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-blue-100 leading-relaxed">
            Technology Enthusiast & Network Specialist driven by cutting-edge technological advancements 
            and passionate about network infrastructure, system security, and continuous learning.
          </p>

          {/* Hero Navigation Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <Database className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">About</span>
            </button>
            
            <button
              onClick={() => scrollToSection('experience')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <Shield className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Experience</span>
            </button>
            
            <button
              onClick={() => scrollToSection('education')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Education</span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Projects</span>
            </button>
            
            <button
              onClick={() => scrollToSection('volunteering')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <Cloud className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Community</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="group flex items-center justify-center px-6 py-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 border border-white border-opacity-30"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Contact</span>
            </button>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold text-lg hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
          >
            Explore My Journey
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              About Me
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  I'm driven by a desire to learn about cutting-edge technological advancements and expand my knowledge of science. 
                  I'm committed to staying informed about the latest developments in technology and utilizing this information to achieve significant results.
                </p>
                <p>
                  I have a strong interest in developing and managing network infrastructure, ensuring system security and reliability 
                  through cutting-edge technologies. With experience in designing networks, virtualization, and troubleshooting, 
                  I continue to deepen my understanding of complex network configuration and management.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl text-center hover:from-blue-100 hover:to-purple-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
                  >
                    <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2">{skill.title}</h3>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              Experience
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="group relative pl-8 pb-8 border-l-4 border-blue-200 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="absolute left-0 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-2 group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                        <h4 className="text-lg text-blue-600 font-semibold">{exp.company}</h4>
                        {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                      </div>
                      <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">{exp.date}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              Education
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <div className="space-y-8">
              <div className="group bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-wrap justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">University of Indonesia</h3>
                    <h4 className="text-xl text-blue-600 font-semibold">Current Student</h4>
                  </div>
                  <span className="text-gray-500 font-medium bg-blue-100 px-4 py-2 rounded-full">2022 - Present</span>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p className="font-semibold text-gray-700">Key Activities:</p>
                  <div className="space-y-3 ml-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Enrolled in Progate x FTUI Bootcamp learning JavaScript development</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Member of Majelis Permusyawaratan Mahasiswa FTUI as internal staff</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span>Participated in Karirlab for career and professional development</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">SMAN 86 Jakarta</h3>
                    <h4 className="text-xl text-purple-600 font-semibold">High School</h4>
                  </div>
                  <span className="text-gray-500 font-medium bg-purple-100 px-4 py-2 rounded-full">Graduated</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Active participant in taekwondo for one year and involved in physics and science projects management, 
                  developing both physical discipline and scientific analytical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              Featured Project
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <div className="group relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 border-green-200 hover:border-green-300 cursor-pointer"
                 onClick={() => window.open('https://terrataste.netlify.app', '_blank')}>
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-6 h-6 text-green-600 animate-bounce" />
              </div>
              
              <div className="flex flex-wrap justify-between items-start mb-6">
                <div>
                  <h3 className="text-4xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">TerraTaste</h3>
                  <h4 className="text-xl text-green-600 font-semibold">Tech Innovation Project • Live Application</h4>
                  <p className="text-sm text-green-700 font-medium mt-1">🌐 Click anywhere to visit live site</p>
                </div>
                <span className="text-gray-500 font-medium bg-green-100 px-4 py-2 rounded-full">Sep 2024 - Dec 2024</span>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div className="bg-white p-6 rounded-xl border-l-4 border-green-400">
                  <p className="font-semibold text-gray-700 mb-3 text-lg">Vision:</p>
                  <p className="text-lg">TerraTaste envisions being a catalyst for positive change in the food industry through technology. 
                  We aim to shape a future where innovation and creativity know no bounds, and where individuals are 
                  empowered to make environmentally conscious decisions about their food.</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400">
                  <p className="font-semibold text-gray-700 mb-3 text-lg">Mission:</p>
                  <p className="text-lg">To be recognized as a global leader in tech innovation, known for our commitment to excellence, 
                  collaboration, and social responsibility. We aspire to encourage the shift toward a plant-based diet 
                  by promoting environmentally friendly food choices that benefit both individuals and the planet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteering Section */}
      <section id="volunteering" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">
              Volunteering & Community
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Design and Publication Media</h3>
                <h4 className="text-purple-600 font-semibold mb-4 text-lg">Asyraaf UI</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Actively participated in the creation of publications and event information, 
                  contributing to community engagement and organizational communication.
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">GDSC #JuaraGCP Participant</h3>
                <h4 className="text-blue-600 font-semibold mb-4 text-lg">Google Developer Student Clubs</h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Participated in the eighth season held at Bukalapak headquarters in Jakarta, 
                  collaborating with fellow participants to solve designated labs and enhance practical cloud computing skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Ready to collaborate on exciting tech projects or discuss the latest in network infrastructure and cloud technologies?
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="mailto:your.email@example.com"
                className="group flex items-center px-8 py-4 bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Email Me
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                className="group flex items-center px-8 py-4 bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a 
                href="https://github.com/yourusername"
                className="group flex items-center px-8 py-4 bg-white bg-opacity-20 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-white text-opacity-70 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-lg">&copy; 2025 Sharif Masyhur (Saf). Built with React & Passion for Technology.</p>
        </div>
      </footer>
    </div>
  );
}