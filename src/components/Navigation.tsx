import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/projects', label: 'Projects', icon: '💼' },
    { href: '/about', label: 'About Me', icon: '👨‍💻' },
    { href: '/contact', label: 'Contact', icon: '📧' },
  ];

  return (
    <nav className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'opacity-95' : 'opacity-100'
    }`}>
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-4 shadow-lg">
        <div className="flex flex-col space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`group relative flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                location.pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
              title={item.label}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
        
        {/* Language toggle - keeping it simple like Brice's */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            EN
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
