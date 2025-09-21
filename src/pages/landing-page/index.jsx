import React, { useEffect } from 'react';
import SectionNavigator from '../../components/ui/SectionNavigator';
import ScrollProgressIndicator from '../../components/ui/ScrollProgressIndicator';
import ContactFloatingAction from '../../components/ui/ContactFloatingAction';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';
import PreviewBanner from './components/PreviewBanner';

const LandingPage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Matej Parizek - Software Engineer';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription?.setAttribute('content', 
        'Software Engeneer focused on Java & Kotlin with industry experience. I build reliable backend systems, REST APIs, and scalable microservices. I’m passionate about clean code, performance, and delivering value through every project.'
      );
    }

    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
                { /* Preview Banner */ }
      <PreviewBanner />
      {/* Navigation */}
      <SectionNavigator />
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Testimonials Section */}
        { /*<TestimonialsSection /> */}
        
        {/* Services Section */}
        { /*<ServicesSection /> */}
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <FooterSection />
      
      {/* Floating Contact Action */}
      <ContactFloatingAction />
    </div>
  );
};

export default LandingPage;