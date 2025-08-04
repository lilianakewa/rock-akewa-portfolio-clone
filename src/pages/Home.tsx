import Navigation from '../components/Navigation';
import WorkWithMeButton from '../components/WorkWithMeButton';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import ProcessSection from '../components/ProcessSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <main className="relative">
      <Navigation />
      <WorkWithMeButton />
      
      <HeroSection />
      <PortfolioSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
};

export default Home;