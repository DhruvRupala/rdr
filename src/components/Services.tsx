import { Code, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'Building modern, responsive web applications using cutting-edge technologies like React, Node.js, and MongoDB. From concept to deployment, I create scalable solutions.',
  },
  {
    icon: Shield,
    title: 'Exploring Cybersecurity',
    description:
      'Passionate about learning and implementing cybersecurity best practices. Exploring network security, vulnerability assessment, and ethical hacking techniques.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What I offer to transform your vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 rounded-2xl hover:shadow-glow transition-all duration-300 group animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
