import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, Linkedin, Instagram, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    
    if (content) {
      gsap.fromTo(content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'rock@leap-biz.com',
      href: 'mailto:rock@leap-biz.com',
      description: 'Send me an email'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+27 73 754 7805',
      href: 'tel:+27737547805',
      description: 'Give me a call'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/rock-akewa/',
      description: 'Professional network'
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/rock-akewa/',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/rock-akewa',
      label: 'GitHub'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:rock@leap-biz.com',
      label: 'Email'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 lg:px-16">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-display mb-6">Let's Work Together</h2>
            <p className="text-subheading opacity-90 max-w-2xl mx-auto">
              Ready to bring your WordPress project to life? Whether you need a new website, 
              maintenance, or custom development, I'm here to help.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : '_self'}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <p className="text-sm opacity-75 mb-2">{contact.description}</p>
                  <p className="font-medium">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Availability */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-12">
            <h3 className="text-heading mb-4">Current Availability</h3>
            <p className="text-body opacity-90 mb-6">
              I'm currently accepting new WordPress projects and maintenance contracts. 
              Response time is typically within 24 hours for new inquiries.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Available for new projects</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <div className="border-t border-white/20 pt-12">
            <h3 className="text-heading mb-4">Download My Resume</h3>
            <p className="text-body opacity-90 mb-6">
              Get a detailed overview of my experience, skills, and recent projects.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Download Resume</span>
              <span>📄</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;