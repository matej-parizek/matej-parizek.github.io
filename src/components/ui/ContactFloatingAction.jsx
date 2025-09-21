import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const ContactFloatingAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const contactSection = document.getElementById('contact');
      
      // Show button after scrolling past hero section
      setIsVisible(scrollTop > window.innerHeight * 0.5);
      
      // Hide button when contact section is visible
      if (contactSection) {
        const rect = contactSection?.getBoundingClientRect();
        const isInViewport = rect?.top <= window.innerHeight && rect?.bottom >= 0;
        setIsContactSectionVisible(isInViewport);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const headerOffset = 80;
      const elementPosition = contactSection?.getBoundingClientRect()?.top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  if (!isVisible || isContactSectionVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-floating-action">
      <div className="flex flex-col space-y-3">
        {/* Call Button */}
        <button
          onClick={handleCallClick}
          className="w-12 h-12 bg-portfolio-accent hover:bg-portfolio-accent/90 text-portfolio-accent-foreground rounded-full shadow-professional hover:shadow-lg transition-professional flex items-center justify-center group"
          title="Call now"
        >
          <Icon name="Phone" size={20} className="group-hover:scale-110 transition-professional" />
        </button>

        {/* Contact Button */}
        <button
          onClick={scrollToContact}
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-professional hover:shadow-lg transition-professional flex items-center justify-center group"
          title="Get in touch"
        >
          <Icon name="MessageCircle" size={24} className="group-hover:scale-110 transition-professional" />
        </button>
      </div>

      {/* Pulse animation for attention */}
      <div className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping" />
    </div>
  );
};

export default ContactFloatingAction;