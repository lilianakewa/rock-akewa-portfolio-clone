import { ArrowRight } from 'lucide-react';

const WorkWithMeButton = () => {
  return (
    <div className="fixed top-8 right-8 z-50">
      <a
        href="/contact"
        className="group bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-hover hover:shadow-lg hover:-translate-y-1 flex items-center space-x-2"
      >
        <span>Work with me</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default WorkWithMeButton;