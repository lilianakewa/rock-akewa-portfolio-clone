import Navigation from '../components/Navigation';
import WorkWithMeButton from '../components/WorkWithMeButton';
import PortfolioSection from '../components/PortfolioSection';

const Projects = () => {
  return (
    <main className="relative">
      <Navigation />
      <WorkWithMeButton />
      
      {/* Hero Section for Projects Page */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-hero mb-6">My Portfolio</h1>
          <p className="text-subheading text-muted-foreground max-w-2xl mx-auto">
            Explore my WordPress development projects, maintenance work, and custom web solutions.
          </p>
        </div>
      </section>
      
      <PortfolioSection />
    </main>
  );
};

export default Projects;