import React, { useState, useEffect, useRef } from 'react';

import Icon from '../../../components/AppIcon';

const AboutSection = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'Java & Spring Boot', level: 85, years: 1.5 },
    { name: 'TypeScript/JavaScript', level: 80, years: 1.5 },
    { name: 'Vue.js (Nuxt)', level: 75, years: 1 },
    { name: 'SQL & Databases', level: 80, years: 1.5 },
    { name: 'API Design & REST', level: 85, years: 1.5 },
    { name: 'Git & Version Control', level: 90, years: 2 },
    { name: 'Kotlin', level: 70, years: 0.5 },
    { name: 'C/C++', level: 65, years: 1 }
  ];

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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Story */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
                About Matej
                <span className="text-primary"> Parizek</span>
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Software Engineering student at Czech Technical University Prague, currently working 
                as a Software Engineer Trainee at T-Mobile Czech Republic. I specialize in backend 
                development with Java, Spring Boot, and API design, while also having experience 
                with frontend technologies like Vue.js and TypeScript.
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
                    Currently pursuing Bachelor's Degree in Software Engineering at Czech Technical 
                    University Prague (2022-present). Previously studied Cybernetics and Robotics 
                    (2021-2022), providing me with a strong technical foundation and problem-solving skills.
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
                    Software Engineer Trainee at T-Mobile Czech Republic since March 2024, focusing on 
                    customer requirements analysis, API design, backend and frontend development using 
                    Java, Spring Boot, TypeScript, and Vue.js with emphasis on clean architecture and scalability.
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
                    Passionate about writing clean, maintainable code following best practices like 
                    MVC and layered architecture. Experience with unit testing, technical documentation 
                    including UML diagrams, and system improvements to enhance performance and developer experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div>
                <div className="text-2xl font-headline text-primary">4+</div>
                <div className="text-sm text-text-secondary">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-headline text-primary">1.5+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-headline text-text-primary">Technical Skills</h3>
              <p className="text-text-secondary">
                Current proficiency levels based on commercial experience at T-Mobile and academic projects at CTU Prague.
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
      </div>
    </section>
  );
};

export default AboutSection;