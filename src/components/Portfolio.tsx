import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Excel Analytics App',
    description:
      'Full-stack MERN application allowing users to upload Excel files and visualize data with interactive charts. Features real-time data processing and dynamic chart generation.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Chart.js'],
    category: 'Web Development',
  },
  {
    title: 'Blogging Web App',
    description:
      'Full-featured content publishing platform with JWT authentication, admin dashboard, and responsive UI. Includes user management, post creation, and comment system.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'TailwindCSS'],
    category: 'Web Development',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent projects and internship work
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card p-6 rounded-2xl hover:shadow-glow transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
