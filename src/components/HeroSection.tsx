import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import rockPhoto from '../assets/rock-akewa-photo.png';

const HeroSection = () => {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const profileRef = useRef(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Profile image animation
    tl.from(profileRef.current, {
      duration: 1.2,
      scale: 0.8,
      opacity: 0,
      ease: "back.out(1.7)"
    });

    // Number animations
    numberRefs.current.forEach((ref, index) => {
      if (ref) {
        tl.from(ref, {
          duration: 0.8,
          y: 50,
          opacity: 0,
          ease: "power3.out"
        }, index * 0.1);
      }
    });

    // Text reveal animations
    tl.from(nameRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.5")
    .from(titleRef.current, {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power3.out"
    }, "-=0.7");

  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50"></div>
      
      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div ref={profileRef} className="relative">
              <div className="profile-image w-80 h-80 lg:w-96 lg:h-96">
                <img
                  src={rockPhoto}
                  alt="Rock Akewa"
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </div>
              {/* Floating decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-warm rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-light rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-8">
            {/* Numbered steps like Brice's design */}
            <div className="space-y-6">
              <div 
                ref={el => numberRefs.current[0] = el}
                className="flex items-center space-x-4"
              >
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-space-grotesk font-bold">
                  01
                </div>
              </div>

              <div className="text-reveal">
                <h1 ref={nameRef} className="text-reveal-inner text-hero">
                  Hello, I'm <span className="text-primary">Rock!</span>
                </h1>
              </div>

              <div 
                ref={el => numberRefs.current[1] = el}
                className="flex items-center space-x-4 mt-8"
              >
                <div className="bg-accent-warm text-white w-12 h-12 rounded-full flex items-center justify-center font-space-grotesk font-bold">
                  02
                </div>
              </div>

              <div className="text-reveal">
                <h2 ref={titleRef} className="text-reveal-inner text-display flex items-center space-x-4">
                  I <span className="text-primary">develop</span> 
                  <span className="text-2xl">💻</span>
                  and <span className="text-accent-warm">maintain</span>
                  <span className="text-2xl">⚡</span>
                </h2>
              </div>

              <div 
                ref={el => numberRefs.current[2] = el}
                className="flex items-center space-x-4 mt-8"
              >
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-space-grotesk font-bold">
                  03
                </div>
              </div>

              <div className="text-reveal">
                <h3 className="text-reveal-inner text-display">
                  WordPress websites.
                </h3>
              </div>

              <p className="text-subheading text-muted-foreground mt-6 max-w-lg">
                I also specialize in custom theme development, SEO optimization, and website performance...
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-12">
              <a
                href="#portfolio"
                className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-hover hover:shadow-lg hover:-translate-y-1"
              >
                <span>View My Work</span>
                <span className="text-lg">↓</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;