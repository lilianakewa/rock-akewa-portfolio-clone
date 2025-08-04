import Navigation from '../components/Navigation';
import WorkWithMeButton from '../components/WorkWithMeButton';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <main className="relative">
      <Navigation />
      <WorkWithMeButton />
      
      {/* Hero Section for About Page */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-hero mb-6">About Me</h1>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey as a WordPress developer and my passion for creating exceptional web experiences.
          </p>
        </div>
      </section>
      
      <AboutSection />
    </main>
  );
};

export default About;