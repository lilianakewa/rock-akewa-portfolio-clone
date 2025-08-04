import Navigation from '../components/Navigation';
import WorkWithMeButton from '../components/WorkWithMeButton';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <main className="relative">
      <Navigation />
      <WorkWithMeButton />
      
      {/* Hero Section for Contact Page */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-8 lg:px-16 text-center">
          <h1 className="text-hero mb-6">Get In Touch</h1>
          <p className="text-subheading opacity-90 max-w-2xl mx-auto">
            Ready to start your next WordPress project? Let's discuss how I can help bring your vision to life.
          </p>
        </div>
      </section>
      
      <ContactSection />
    </main>
  );
};

export default Contact;