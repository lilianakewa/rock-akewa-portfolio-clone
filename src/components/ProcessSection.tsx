import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      number: "01",
      title: "First, we need an",
      subtitle: "idea..."
    },
    {
      number: "02", 
      title: "Then an analysis and a",
      subtitle: "direction..."
    },
    {
      number: "03",
      title: "Planning takes place",
      subtitle: "for the architecture."
    },
    {
      number: "04",
      title: "Finally, I code and",
      subtitle: "I deploy your website!"
    }
  ];

  useEffect(() => {
    const steps = sectionRef.current?.querySelectorAll('.process-step');
    
    if (steps) {
      gsap.fromTo(steps,
        { y: 100, opacity: 0 },
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

  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">My Development Process</h2>
            <p className="text-subheading text-muted-foreground">
              From concept to deployment, here's how I bring your WordPress project to life.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="process-step flex items-center space-x-8">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-space-grotesk font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-heading mb-2">{step.title}</h3>
                  <h4 className="text-subheading text-primary">{step.subtitle}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 p-8 bg-card rounded-2xl border border-border">
            <h3 className="text-heading mb-4">Ready to get started?</h3>
            <p className="text-body text-muted-foreground mb-6">
              Let's discuss your project requirements and timeline.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <span>🚀</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;