import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Internship - Web Development',
    issuer: 'Zidio Development',
    date: 'May-July 2025',
    description: 'Comprehensive web development course covering HTML, CSS, JavaScript, and React, Node.js, Express.js, Database: MongoDB or MySQL',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
    link: 'https://drive.google.com/file/d/1JrIKAPegcnZeKutdH-6NXmn8A8SknjWQ/view?usp=sharing',
  },
  {
    title: 'Understanding Incubation and Entrepreneurship',
    issuer: 'NPTEL',
    date: 'Jan-Apr 2025',
    description: 'Advanced Python programming for data analysis and visualization',
    skills: ['Startup Incubation Processes','Understanding Business Accelerators','Networking and Mentorship','Funding and Investment Fundamentals'],
    link: 'https://drive.google.com/file/d/1Gou6NAEpAAKjazZZVLam0E1BX56aDjJ4/view?usp=sharing',
  },
  {
    title: 'Cybersecurity Fundamentals',
    issuer: 'IBM-SkillsBuild',
    date: '2025',
    description: 'Introduction to cybersecurity concepts and best practices',
    skills: ['Network Security', 'Cryptography', 'Risk Management'],
    link: 'https://drive.google.com/file/d/18fyvgSSJkQJ_Uys7nEJ6xVcFHF8wmjiv/view?usp=sharing',
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-background/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
              Certificates
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Professional certifications and achievements that validate my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert, index) => (
            <Card 
              key={index} 
              className="glass-card hover-scale group overflow-hidden border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="bg-primary/10 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                <CardTitle className="text-lg sm:text-xl mt-3 sm:mt-4 group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="font-medium text-primary/80 text-sm sm:text-base">
                  {cert.issuer}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {cert.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn text-xs sm:text-sm h-8 sm:h-9"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <span className="text-xs sm:text-sm">View Certificate</span>
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
