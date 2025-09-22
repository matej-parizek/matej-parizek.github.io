import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FooterSection = () => {
  const currentYear = new Date()?.getFullYear();

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/in/matej-parizek' },
    { name: 'GitHub', icon: 'Github', url: 'https://github.com/matej-parizek' },
    { name: 'Email', icon: 'Mail', url: 'mailto:mat.parizek@seznam.cz' }
  ];

  const resumeLink = '/assets/matej-parizek-resume.pdf';
  const quickLinks = [
    { label: 'About', anchor: 'about' },
    { label: 'Skills', anchor: 'skills' },
    { label: 'Projects', anchor: 'projects' },
    { label: 'Experience', anchor: 'experience' },
    //{ label: 'Services', anchor: 'services' },
    { label: 'Contact', anchor: 'contact' }
  ];

  const services = [
    'Web Application Development',
    'Mobile App Development',
    'API & Backend Development',
    'Technical Consulting',
    'Code Review & Optimization',
    'Team Training & Mentoring'
  ];

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
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-headline text-sm">MP</span>
              </div>
              <span className="font-headline text-xl">Matěj Pařízek</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Software Engeneer focused on Java & Kotlin with industry experience. I build reliable backend systems, REST APIs, and scalable microservices. 
              I’m passionate about clean code, performance, and delivering value through every project.

            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-professional group"
                  title={social?.name}
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-gray-300 group-hover:text-white transition-professional" 
                  />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="Mail" size={16} />
                <span className="text-sm">mat.parizek@seznam.cz</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="Phone" size={16} />
                <span className="text-sm">+420 775 995 600</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="MapPin" size={16} />
                <span className="text-sm">Prague, CZ</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-headline text-lg">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks?.map((link) => (
                <button
                  key={link?.anchor}
                  onClick={() => scrollToSection(link?.anchor)}
                  className="block text-gray-300 hover:text-primary transition-professional text-left"
                >
                  {link?.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-headline text-lg">Services</h3>
            <div className="space-y-3">
              {services?.map((service) => (
                <div key={service} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & CTA */}
          <div className="space-y-6">
            {/*<h3 className="font-headline text-lg">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Get insights on web development trends, project updates, and exclusive tips.
            </p>
            
            <div className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-l-none"
                  iconName="Send"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400">
                No spam, unsubscribe anytime. Privacy policy applies.
              </p>
            </div>
              */}
            {/* Quick Actions */}
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => scrollToSection('contact')}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white/20 text-white hover:bg-white hover:text-text-primary"
              >
                Start a Project
              </Button>
              <Button
                variant="ghost"
                size="sm"
                fullWidth

                onClick={() => window.open(resumeLink, '_blank')}
                iconName="Download"
                iconPosition="left"
                className="text-gray-300 hover:text-white"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300 text-sm">
                © {currentYear} Portfolio Pro. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-400">
                <button className="hover:text-gray-300 transition-professional">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-gray-300 transition-professional">
                  Terms of Service
                </button>
                <span>•</span>
                <button className="hover:text-gray-300 transition-professional">
                  Cookie Policy
                </button>
              </div>
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-professional group"
            >
              <span className="text-sm">Back to top</span>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-professional">
                <Icon name="ArrowUp" size={16} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Floating Achievement Badge */}
      <div className="fixed bottom-6 left-6 z-floating-action hidden lg:block">
        <div className="bg-success text-white px-4 py-2 rounded-full shadow-professional text-sm font-accent">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;