import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { label: 'About', anchor: 'about', description: 'Professional story and methodology' },
    { label: 'Skills', anchor: 'skills', description: 'Technical capabilities showcase' },
    { label: 'Projects', anchor: 'projects', description: 'Featured work and case studies' },
    { label: 'Experience', anchor: 'experience', description: 'Professional timeline and achievements' },
    { label: 'Services', anchor: 'services', description: 'Offerings and pricing details' },
    { label: 'Contact', anchor: 'contact', description: 'Get in touch for consultation' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Find active section based on scroll position
      const sectionElements = sections?.map(section => 
        document.getElementById(section?.anchor)
      )?.filter(Boolean);

      const currentSection = sectionElements?.find(element => {
        const rect = element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed top-16 left-0 right-0 z-navigation transition-professional ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-professional border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-text-primary hover:text-primary transition-professional"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-headline text-sm">MP</span>
                </div>
                <span className="font-headline text-lg">Matej Pařízek</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {sections?.map((section) => (
                  <button
                    key={section?.anchor}
                    onClick={() => scrollToSection(section?.anchor)}
                    className={`px-3 py-2 text-sm font-accent transition-professional ${
                      activeSection === section?.anchor
                        ? 'text-primary border-b-2 border-primary' :'text-text-secondary hover:text-text-primary hover:border-b-2 hover:border-border'
                    }`}
                    title={section?.description}
                  >
                    {section?.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-professional"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <Icon 
                  name={isMenuOpen ? "X" : "Menu"} 
                  size={24} 
                  className="transition-professional" 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden fixed inset-0 z-mobile-menu transition-professional ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
          }`}
        >
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMenu} />
          <div 
            className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-background shadow-professional transform transition-professional ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-headline text-sm">PP</span>
                </div>
                <span className="font-headline text-lg text-text-primary">Portfolio Pro</span>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-muted transition-professional"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="px-6 py-4 space-y-1">
              {sections?.map((section) => (
                <button
                  key={section?.anchor}
                  onClick={() => scrollToSection(section?.anchor)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-accent transition-professional ${
                    activeSection === section?.anchor
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <div className="flex flex-col">
                    <span>{section?.label}</span>
                    <span className="text-xs opacity-75 mt-1">{section?.description}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SectionNavigator;