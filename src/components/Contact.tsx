// import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';
// import { useState } from 'react';

// export const Contact = () => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast({
//       title: 'Message Sent!',
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });
//     setFormData({ name: '', email: '', subject: '', message: '' });
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
//       <div className="container mx-auto max-w-6xl">
//         <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
//             Get In <span className="text-primary">Touch</span>
//           </h2>
//           <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-4"></div>
//           <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
//             Have a project in mind? Let's work together to bring your ideas to life
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
//           <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
//             <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
//               <div className="flex items-center space-x-3 sm:space-x-4">
//                 <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
//                   <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
//                 </div>
//                 <div className="min-w-0">
//                   <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
//                   <a
//                     href="mailto:dhruvrupala1213@gmail.com"
//                     className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
//                   >
//                     dhruvrupala1213@gmail.com
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
//               <div className="flex items-center space-x-3 sm:space-x-4">
//                 <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
//                   <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
//                   <p className="text-xs sm:text-sm text-muted-foreground">8401722679</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
//               <a
//                 href="https://www.linkedin.com/in/dhruv-rupala-96191a253/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
//               >
//                 <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
//                 <span className="text-sm sm:text-base">LinkedIn</span>
//               </a>
//               <a
//                 href="https://github.com/DhruvRupala"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-1 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
//               >
//                 <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
//                 <span className="text-sm sm:text-base">GitHub</span>
//               </a>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-scale-in">
//             <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4">
//               <div>
//                 <Input
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
//                 />
//               </div>
//               <div>
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
//                 />
//               </div>
//               <div>
//                 <Input
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
//                 />
//               </div>
//               <div>
//                 <Textarea
//                   name="message"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={5}
//                   className="bg-background/50 resize-none text-sm sm:text-base"
//                 />
//               </div>
//               <Button type="submit" className="w-full gradient-primary shadow-glow h-10 sm:h-11 text-sm sm:text-base">
//                 Send Message <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };










import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_h6hpncb',
        'template_xb1jobv',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        't9p9jgOW_Uw3KBxcr'
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in">
            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                  <a
                    href="mailto:dhruvrupala1213@gmail.com"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    dhruvrupala1213@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">8401722679</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="https://www.linkedin.com/in/dhruv-rupala-96191a253/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-sm sm:text-base">LinkedIn</span>
              </a>
              <a
                href="https://github.com/DhruvRupala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:shadow-glow transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                <span className="text-sm sm:text-base">GitHub</span>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-scale-in">
            <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
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
                  className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background/50 text-sm sm:text-base h-10 sm:h-11"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background/50 resize-none text-sm sm:text-base"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary shadow-glow h-10 sm:h-11 text-sm sm:text-base">
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
