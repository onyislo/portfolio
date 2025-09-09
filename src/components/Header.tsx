import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
      // Apply the class to main content elements to prevent interaction
      document.querySelectorAll('section:not(#mobile-menu)').forEach(section => {
        section.classList.add('content-disabled');
      });
    } else {
      document.body.classList.remove('overflow-hidden');
      // Remove the class from main content elements
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('content-disabled');
      });
    }
    
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.querySelectorAll('section').forEach(section => {
        section.classList.remove('content-disabled');
      });
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false); // Close menu first
    
    // Small timeout to allow menu transition before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu button - on the left */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isMenuOpen 
                  ? 'bg-black text-white' 
                  : (isScrolled ? 'text-gray-700' : 'text-white')
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Logo - centered on desktop, right-aligned on mobile */}
          <div className="flex-1 flex md:justify-start justify-end">
            <div className="flex items-center">
              <Code className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
              <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Bradley
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="ml-10 flex items-baseline space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 capitalize ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

      </nav>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          style={{ pointerEvents: 'auto' }}
        ></div>
      )}
      
      {/* Mobile Navigation - Side Drawer */}
      <div 
        id="mobile-menu"
        className={`fixed top-0 left-0 h-screen w-72 bg-black shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ pointerEvents: 'auto' }}
      >
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Code className="h-6 w-6 text-blue-400" />
              <span className="ml-2 text-lg font-bold text-white">
                Bradley
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="space-y-2">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 text-lg font-medium text-white hover:text-blue-300 hover:bg-gray-800 rounded-md transition-colors duration-200 capitalize border-l-2 border-transparent hover:border-blue-400"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;