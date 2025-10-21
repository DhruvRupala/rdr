import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary text-lg md:text-xl font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                Dhruv Rupala
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground/80">
                Computer Engineering Student
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about leveraging technology to build innovative solutions. 
              Specialized in Web Development, Database Management, AI, and Cybersecurity.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="gradient-primary shadow-glow">
                <a href="#portfolio">
                  View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DhruvRupala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dhruv-rupala-96191a253/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dhruvrupala1213@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:shadow-glow transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 gradient-primary rounded-full"></div>
                <img
                  src={profileImage}
                  alt="Dhruv Rupala"
                  className="relative w-full h-full object-cover rounded-full p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
