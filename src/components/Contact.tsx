import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:dhruvrupala1213@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    dhruvrupala1213@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">Contact via email</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/dhruv-rupala-96191a253/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/DhruvRupala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-4 rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="h-5 w-5 text-primary" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div className="glass-card p-6 rounded-2xl space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>
              <Button type="submit" className="w-full gradient-primary shadow-glow">
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
