import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'wordpress-custom', label: 'WordPress Custom' },
    { id: 'wordpress-employer', label: 'Employer Projects' },
    { id: 'maintenance', label: 'Maintenance & Debug' },
    { id: 'hardcoded', label: 'Hardcoded WordPress' },
    { id: 'html-svelte', label: 'HTML/SvelteKit' },
  ];

  const projects = [
    // WordPress built from scratch
    {
      id: 1,
      title: 'NPI Consulting',
      url: 'https://www.npiconsulting.co.za',
      category: 'wordpress-custom',
      description: 'Corporate consulting website with custom WordPress theme',
      tech: ['WordPress', 'Custom Theme', 'SEO'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Leap-Biz',
      url: 'https://www.leap-biz.com',
      category: 'wordpress-custom',
      description: 'Business development platform with advanced functionality',
      tech: ['WordPress', 'WooCommerce', 'Custom Features'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'The AI Shop',
      url: 'https://www.theaishop.ai',
      category: 'wordpress-custom',
      description: 'AI-focused e-commerce platform',
      tech: ['WordPress', 'AI Integration', 'E-commerce'],
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop'
    },
    
    // Websites developed at employer
    {
      id: 4,
      title: 'Sky Creek Dental',
      url: 'https://www.skycreekdental.com',
      category: 'wordpress-employer',
      description: 'Dental practice website with appointment booking',
      tech: ['WordPress', 'CallRail', 'SEO'],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cimarron Family Dentistry',
      url: 'https://cimarronfamilydentistry.com/',
      category: 'wordpress-employer',
      description: 'Family dentistry practice with patient portal',
      tech: ['WordPress', 'Patient Management', 'SEO'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
    },
    
    // Maintenance projects
    {
      id: 6,
      title: 'DFW Smile Design',
      url: 'https://www.dfwsmiledesign.com',
      category: 'maintenance',
      description: 'Website maintenance and performance optimization',
      tech: ['WordPress', 'Performance', 'Security'],
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&h=400&fit=crop'
    },
    {
      id: 7,
      title: 'Cedar Creek Smiles',
      url: 'https://cedarcreeksmiles.com',
      category: 'maintenance',
      description: 'Ongoing maintenance and security updates',
      tech: ['WordPress', 'Wordfence', 'Updates'],
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop'
    },
    
    // Hardcoded WordPress
    {
      id: 8,
      title: 'South Tulsa Smiles',
      url: 'https://www.southtulsasmiles.com',
      category: 'hardcoded',
      description: 'Custom hardcoded WordPress implementation',
      tech: ['WordPress', 'Custom PHP', 'Frontend'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop'
    },
    
    // HTML/SvelteKit projects
    {
      id: 9,
      title: 'Lugoff Smiles',
      url: 'https://www.lugoffsmiles.com',
      category: 'html-svelte',
      description: 'Modern SvelteKit dental practice website',
      tech: ['SvelteKit', 'JavaScript', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
    },
    {
      id: 10,
      title: 'Monroe Dental',
      url: 'https://www.monroedental.net',
      category: 'html-svelte',
      description: 'HTML5 dental website with modern features',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.portfolio-card');
    
    if (cards) {
      gsap.fromTo(cards, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, [filteredProjects]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-portfolio-bg">
      <div className="container mx-auto px-8 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display mb-6">
            My best projects <span className="text-2xl">⭐</span>
          </h2>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            A showcase of WordPress websites, maintenance projects, and modern web applications I've developed.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-foreground hover:bg-secondary'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="masonry-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card group">
              
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-lg font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                  >
                    <span>View Live</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-heading mb-3">{project.title}</h3>
                <p className="text-body text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline text-primary font-medium"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-subheading text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
            <span>💬</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;