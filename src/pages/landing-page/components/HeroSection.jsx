import React, { useState, useEffect, useMemo  } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useStorage } from '../../../store/useStorage';
import { formatYears } from '../../../utils/date';
import { totalYearsExpirience } from '../../../utils/selected';


const HeroSection = () => {
  const { projects, hero, experiences } = useStorage();
  const [projectCount, setProjectCount] = useState(0);
  const [index, setIndex] = useState(0);
  const yearsOfCommercialExperience = experiences.filter(exp => exp.type.toUpperCase() !== 'education'.toUpperCase());
  const totalYears = totalYearsExpirience(yearsOfCommercialExperience);
  const [yearsExperience, setYearsExperience] = useState(0);
  
  const { header, subheader, currentCompany } = hero;


  const sequence = useMemo(() => {
    if (!header) return [];
    return header.reduce((acc, part) => {
      for (const ch of part.text.split("")) acc.push({ ch, cls: part.className });
      return acc;
    }, []);
  }, [header]);

  const lastestProject = useMemo(() => {
    if (!projects || !projects.items || projects.items.length === 0) return 'No projects yet';
    return projects.items.reduce((latest, project) => {
      return new Date(project.startTime) > new Date(latest.startTime) ? project : latest;
    }, projects.items[0]);
  }, [projects.items]);



  useEffect(() => {
    // Counters
    const animateCounter = (setter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const t = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(t);
        } else setter(Math.floor(start));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(setProjectCount, projects.items.length);
      animateCounter(setYearsExperience, Math.round(totalYears * 10) / 10);
    }, 500);

    return () => clearTimeout(timer);
  }, [projects.items.length]);

  useEffect(() => {
    if (index < sequence.length) {
      const t = setTimeout(() => setIndex(i => i + 1), 200);
      return () => clearTimeout(t);
    }
  }, [index, sequence.length]);

  const handleScheduleConsultation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
  const url = '/assets/matej-parizek-resume.pdf';
  window.open(url, "_blank");
};

  

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-accent">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline text-text-primary leading-tight">
                {sequence.slice(0, index).map((s, i) => (
                  <span key={i} className={s.cls}>{s.ch}</span>
                ))}
                {/* blikající blokový kurzor */}
                <span className="ml-1 inline-block h-[1em] w-[0.6ch] bg-cursor animate-blink translate-y-[8px]" />
              </h1>

              <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                {subheader}
              </p>
            </div>

            {/* Achievement Metrics */}
            <div className="grid grid-cols-2 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-headline text-primary">{projectCount}+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline text-primary">{yearsExperience}+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                onClick={handleScheduleConsultation}
                iconName="Calendar"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                Let's Connect
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleDownloadResume}
                iconName="Download"
                iconPosition="left"
                className="flex-1 sm:flex-none"
              >
                View Resume
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="GraduationCap" size={16} />
                <span className="text-sm">CTU Prague Student</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Building" size={16} />
                <span className="text-sm">T-Mobile Experience</span>
              </div>
              <div className="flex items-center space-x-2 text-text-secondary">
                <Icon name="Code" size={16} />
                <span className="text-sm">Java & Spring Boot</span>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-portfolio-accent rounded-2xl transform rotate-6"></div>
                <div className="relative bg-background rounded-2xl overflow-hidden shadow-professional">
                  <Image
                    src="/assets/images/matej-parizek-hero.png"
                    alt="Matej Parizek - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            <div className="absolute top-4 -left-4 bg-background rounded-lg shadow-professional p-4 z-20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" size={20} className="text-success" />
                </div>
                <div>
                  <div className="text-sm font-accent text-text-primary">Latest Project</div>
                  <div className="text-xs text-text-secondary">{lastestProject.title}</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 -right-4 bg-background rounded-lg shadow-professional p-4 z-20 hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm font-accent text-text-primary">Currently at</div>
                  <div className="text-xs text-text-secondary">{currentCompany}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;