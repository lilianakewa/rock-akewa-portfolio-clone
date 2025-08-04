import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
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
          stagger: 0.2,
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

  const skills = [
    {
      category: 'WordPress Development',
      items: ['Custom Themes', 'Plugin Development', 'Gutenberg', 'Elementor', 'WooCommerce', 'WPBakery']
    },
    {
      category: 'Front-End Technologies',
      items: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'SvelteKit', 'Responsive Design']
    },
    {
      category: 'Back-End & APIs',
      items: ['PHP', 'MySQL', 'REST API Integration', 'Custom Post Types', 'Database Optimization']
    },
    {
      category: 'SEO & Digital Marketing',
      items: ['Google Analytics', 'SEMrush', 'CallRail', 'On-page SEO', 'Technical SEO', 'Performance Optimization']
    },
    {
      category: 'Web Hosting & Security',
      items: ['cPanel', 'DirectAdmin', 'Wordfence', 'SSL Configuration', 'Site Migration', 'Backup Solutions']
    },
    {
      category: 'Development Tools',
      items: ['GitHub', 'Bitbucket', 'Azure', 'Adobe XD', 'Figma', 'Version Control']
    }
  ];

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-8 lg:px-16">
        <div ref={contentRef} className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">ROCK AKEWA</h2>
            <h3 className="text-heading text-primary mb-4">Cape Town, South Africa</h3>
            <p className="text-subheading text-muted-foreground">
              I develop and maintain WordPress websites that are both functional, secure, and optimized for performance.
            </p>
          </div>

          {/* Bio */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-body leading-relaxed mb-6">
              Driven by a deep passion for web development and digital solutions, I specialize in creating 
              high-performing WordPress websites that deliver exceptional user experiences. My expertise spans 
              from custom theme development to complex plugin integrations, ensuring effective solutions for 
              every project requirement.
            </p>
            
            <p className="text-body leading-relaxed mb-6">
              With extensive experience in the digital marketing industry, particularly working with dental 
              practices, I understand the unique challenges businesses face online. I've successfully managed 
              and optimized websites for improved performance, security, and search engine visibility.
            </p>

            <p className="text-body leading-relaxed">
              My approach combines technical excellence with strategic thinking, from initial concept through 
              deployment and ongoing maintenance. Whether it's building from scratch, debugging complex issues, 
              or implementing advanced integrations, I deliver solutions that drive real business results.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <h4 className="text-heading text-primary mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-warm rounded-full"></div>
                      <span className="text-body text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Highlights */}
          <div className="bg-secondary rounded-2xl p-8 mb-16">
            <h3 className="text-heading mb-6">Experience Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-2">Digital Marketing Agency</h4>
                <p className="text-body text-muted-foreground mb-4">
                  Managed multiple WordPress websites for dental clients, implementing SEO best practices 
                  and integrating marketing tools like CallRail for campaign tracking.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Enhanced website performance and security</li>
                  <li>• Implemented advanced SEO strategies</li>
                  <li>• Collaborated with marketing teams</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Custom Development</h4>
                <p className="text-body text-muted-foreground mb-4">
                  Led website improvement projects, created custom WordPress solutions, and provided 
                  training to business teams on website management.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Custom theme and plugin development</li>
                  <li>• API integrations and custom features</li>
                  <li>• User acceptance testing and deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2 mr-4"
            >
              <span>Let's Work Together</span>
              <span>🤝</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary inline-flex items-center space-x-2"
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

export default AboutSection;