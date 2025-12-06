import React, { useState, useEffect, useRef } from 'react';

import Icon from '../../../components/AppIcon';
import { useStorage } from '../../../store/useStorage';
import { formatYears } from '../../../utils/date';

const AboutSection = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Java & Spring Boot', level: 85, years: 1.7 },
    { name: 'TypeScript/JavaScript', level: 65, years: 1.5 },
    { name: 'Vue.js (Nuxt)', level: 65, years: 1 },
    { name: 'SQL & Databases', level: 70, years: 1.5 },
    { name: 'API Design & REST', level: 85, years: 1.5 },
    { name: 'Git & Version Control', level: 90, years: 2 },
    { name: 'Kotlin', level: 70, years: 0.5 },
    { name: 'C/C++', level: 75, years: 1 }
  ];

  const {about, experiences} = useStorage();
  const {selfDescription,education, commercialExperience, technicalFocus, skillsSubHeader } = about

  const yearsOfCommercialExperience = experiences.filter(exp => exp.type.toUpperCase() !== 'education'.toUpperCase());
  const totalYears = yearsOfCommercialExperience.reduce((total, exp) => {
    const start = exp.startDate.getTime();
    const end = exp.endDate ? exp.endDate.getTime() : new Date().getTime();
    const durationInYears = (end - start) / (1000 * 60 * 60 * 24 * 365);
    return total + durationInYears;
  }, 0);

  const date = new Date();
  date.getMilliseconds();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content - Story */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
                About
                <span className="text-primary"> Me </span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {selfDescription}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="GraduationCap" size={16} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-accent text-text-primary mb-2">Education & Learning</h3>
                  <p className="text-text-secondary">
                    {education}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-portfolio-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Building" size={16} className="text-portfolio-accent" />
                </div>
                <div>
                  <h3 className="font-accent text-text-primary mb-2">Commercial Experience</h3>
                  <p className="text-text-secondary">
                    {commercialExperience}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Code" size={16} className="text-success" />
                </div>
                <div>
                  <h3 className="font-accent text-text-primary mb-2">Technical Focus</h3>
                  <p className="text-text-secondary">
                   {technicalFocus}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline text-text-primary">Technical Skills</h3>
              <p className="text-text-secondary">
                {skillsSubHeader}
              </p>
            </div>

            <div className="space-y-6">
              {skills?.map((skill, index) => (
                <div key={skill?.name} className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-accent text-text-primary">{skill?.name}</span>
                    <span className="text-sm text-text-secondary">{skill?.years}y exp</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-portfolio-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: skillsVisible ? `${skill?.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                    <span className="absolute right-0 -top-6 text-xs text-text-secondary">
                      {skill?.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Achievement Highlights */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border justify-items-center">
            <div>
              <div className="text-2xl font-headline text-primary">4+</div>
              <div className="text-sm text-text-secondary">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-headline text-primary">{formatYears(totalYears)}</div>
              <div className="text-sm text-text-secondary">Commercial Years Experience</div>
            </div>
          </div>

        
          {/* Learning Goals */}
          <div className="bg-muted rounded-lg p-6 space-y-4">
            <h4 className="font-accent text-text-primary">Currently Learning</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={16} className="text-primary" />
                <span className="text-sm text-text-secondary">Advanced Spring Boot Patterns</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={16} className="text-portfolio-accent" />
                <span className="text-sm text-text-secondary">System Architecture & Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Target" size={16} className="text-success" />
                <span className="text-sm text-text-secondary">DevOps & CI/CD Practices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;