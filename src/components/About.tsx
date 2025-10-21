import { GraduationCap, Code, Database, Shield, Cpu } from 'lucide-react';

const skills = [
  {
    category: 'Programming Languages',
    icon: Code,
    items: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Cpu,
    items: ['React.js', 'Node.js', 'Express.js', 'NumPy', 'Matplotlib', 'Django'],
  },
  {
    category: 'Developer Tools',
    icon: Shield,
    items: ['Git & GitHub', 'Linux', 'Nmap', 'Wireshark', 'Postman', 'AI Concepts'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL'],
  },
];

export const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            About <span className="gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6 animate-fade-in">
            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">Education</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    B.Tech in Computer Science Engineering
                  </p>
                  <p className="text-sm sm:text-base text-foreground/80 font-medium">
                    Pandit Deendayal Energy University (PDEU)
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Class of 2026</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90">
                Driven Computer Engineering undergraduate at PDEU. Passionate about leveraging 
                technology to build innovative solutions, with a keen interest in Web Development, 
                Database Management, AI, and Cybersecurity. Actively seeking opportunities to apply 
                problem-solving skills to real-world challenges and contribute to impactful projects.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 animate-scale-in">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <skill.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 sm:px-3 bg-secondary rounded-full text-xs sm:text-sm text-foreground/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
