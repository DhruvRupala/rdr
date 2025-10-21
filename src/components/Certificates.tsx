import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    description: 'Comprehensive web development course covering HTML, CSS, JavaScript, and React',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    link: '#',
  },
  {
    title: 'Python for Data Science',
    issuer: 'Coursera',
    date: '2023',
    description: 'Advanced Python programming for data analysis and visualization',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    link: '#',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'Cisco Networking Academy',
    date: '2023',
    description: 'Introduction to cybersecurity concepts and best practices',
    skills: ['Network Security', 'Cryptography', 'Risk Management'],
    link: '#',
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">
              Certificates
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-card hover-scale group overflow-hidden border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="font-medium text-primary/80">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
