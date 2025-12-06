import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { useStorage } from '../../../store/useStorage';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const {skills : skillCategories} = useStorage();

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Technical Skills & 
            <span className="text-primary"> Expertise</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            A comprehensive overview of my technical skills developed through academic studies at CTU Prague 
            and commercial experience at T-Mobile Czech Republic. Focus on backend development with Java and 
            Spring Boot, clean code practices, and modern software engineering methodologies.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories?.map((category, categoryIndex) => (
            <div key={category?.category} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-headline text-text-primary">{category?.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category?.skills?.map((skill, skillIndex) => (
                  <div
                    key={skill?.name}
                    className={`relative overflow-hidden bg-background rounded-lg p-6 shadow-testimonial hover:shadow-professional
                       transition-professional cursor-pointer group
                       ${hoveredSkill === `${categoryIndex}-${skillIndex}`
                        ? 'ring-2 ring-opacity-20 max-h-[300px]'
                        : 'ring-1 ring-border max-h-[180px]'
                        }`}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="space-y-4 relative z-10">
                      <div className="flex justify-between items-start">
                        <h4 className="font-accent text-text-primary group-hover:text-primary transition-professional">
                          {skill?.name}
                        </h4>
                        <span className="text-xs text-text-secondary bg-muted px-2 py-1 rounded">
                          {skill?.proficiency}%
                        </span>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="space-y-2">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-portfolio-accent h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill?.proficiency}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-text-secondary">
                          <span>{skill?.years}y exp</span>
                          <span>{skill?.projects} projects</span>
                        </div>
                      </div>

                      {/* Hover Details */}
                      <div className={`transition-all duration-300 ${
                        hoveredSkill === `${categoryIndex}-${skillIndex}` 
                          ? 'opacity-100 max-h-32 translate-y-0 pointer-events-auto' :'opacity-0 max-h-0 translate-y-3 pointer-events-none'
                      }`}>
                        <p className="text-sm text-text-secondary leading-relaxed">
                              {skill?.description /*`${categoryIndex} ${skillIndex}`*/}
                        </p>
                      </div>

                      {/* Experience Indicators */}
                      <div className="flex items-center space-x-4 pt-2 border-t border-border">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={12} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary">{skill?.years}y</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Briefcase" size={12} className="text-text-secondary" />
                          <span className="text-xs text-text-secondary">{skill?.projects} projects</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`relative inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-portfolio-accent/5 transition-opacity duration-300 ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'opacity-100' : 'max-h-0 opacity-0'
                    }`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Visualization */}
        <div className="mt-16 bg-background rounded-lg p-8 shadow-testimonial">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-xl font-headline text-text-primary">Current Tech Stack</h3>
            <p className="text-text-secondary">
              Primary technologies I use based on my experience at T-Mobile Czech Republic and academic projects at CTU Prague
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Java', icon: 'Coffee', color: 'text-orange-600' },
              { name: 'Spring Boot', icon: 'Server', color: 'text-green-500' },
              { name: 'TypeScript', icon: 'Code', color: 'text-blue-500' },
              { name: 'Vue.js', icon: 'Monitor', color: 'text-green-400' },
              { name: 'SQL', icon: 'Database', color: 'text-blue-700' },
              { name: 'Git', icon: 'GitBranch', color: 'text-orange-500' }
            ]?.map((tech) => (
              <div key={tech?.name} className="text-center space-y-2 group cursor-pointer">
                <div className="w-12 h-12 mx-auto bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-professional">
                  <Icon name={tech?.icon} size={24} className={`${tech?.color} group-hover:scale-110 transition-professional`} />
                </div>
                <span className="text-sm text-text-secondary group-hover:text-text-primary transition-professional">
                  {tech?.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;