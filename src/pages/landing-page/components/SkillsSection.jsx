import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: 'Backend Development',
      icon: 'Server',
      skills: [
        { 
          name: 'Java & Spring Boot', 
          proficiency: 85, 
          years: 1.5, 
          projects: 4,
          description: 'Building enterprise applications using Spring Boot framework with clean architecture following MVC and layered architecture patterns.'
        },
        { 
          name: 'API Design & REST', 
          proficiency: 80, 
          years: 1.5, 
          projects: 4,
          description: 'Designing and redesigning RESTful APIs to improve clarity, performance, and usability for internal and external consumers.'
        },
        { 
          name: 'SQL & Databases', 
          proficiency: 78, 
          years: 1.5, 
          projects: 4,
          description: 'Database design, query optimization, and working with relational database systems including Liquibase/Flyway for migrations.'
        },
        { 
          name: 'Unit Testing', 
          proficiency: 75, 
          years: 1, 
          projects: 3,
          description: 'Writing comprehensive unit tests to ensure high code quality and reliability in backend applications.'
        }
      ]
    },
    {
      category: 'Frontend Development',
      icon: 'Monitor',
      skills: [
        { 
          name: 'TypeScript/JavaScript', 
          proficiency: 80, 
          years: 1.5, 
          projects: 4,
          description: 'Modern JavaScript and TypeScript development with focus on type safety and clean code practices.'
        },
        { 
          name: 'Vue.js (Nuxt)', 
          proficiency: 75, 
          years: 1, 
          projects: 3,
          description: 'Building responsive web applications using Vue.js framework and Nuxt.js for enhanced functionality and performance.'
        },
        { 
          name: 'HTML/CSS', 
          proficiency: 70, 
          years: 2, 
          projects: 4,
          description: 'Creating structured and styled web interfaces with modern CSS techniques and responsive design principles.'
        },
        { 
          name: 'Component Architecture', 
          proficiency: 72, 
          years: 1, 
          projects: 3,
          description: 'Designing and implementing reusable component-based architectures for scalable frontend applications.'
        }
      ]
    },
    {
      category: 'Tools & Technologies',
      icon: 'Settings',
      skills: [
        { 
          name: 'Git & Version Control', 
          proficiency: 88, 
          years: 2, 
          projects: 4,
          description: 'Advanced Git workflows, branch management, code collaboration and version control best practices in team environments.'
        },
        { 
          name: 'Gradle/Maven', 
          proficiency: 70, 
          years: 1, 
          projects: 3,
          description: 'Build automation and dependency management using Gradle and Maven build systems for Java projects.'
        },
        { 
          name: 'Liquibase/Flyway', 
          proficiency: 65, 
          years: 0.5, 
          projects: 2,
          description: 'Database migration and version control using Liquibase and Flyway tools for maintaining database schemas.'
        },
        { 
          name: 'Technical Documentation', 
          proficiency: 80, 
          years: 1.5, 
          projects: 4,
          description: 'Creating comprehensive technical documentation including basic UML diagrams to illustrate architecture and module interactions.'
        }
      ]
    },
    {
      category: 'Programming Languages',
      icon: 'Code',
      skills: [
        { 
          name: 'Java', 
          proficiency: 85, 
          years: 1.5, 
          projects: 4,
          description: 'Object-oriented programming with Java, focusing on enterprise development and best practices using core OOP principles.'
        },
        { 
          name: 'Kotlin', 
          proficiency: 70, 
          years: 0.5, 
          projects: 1,
          description: 'Modern JVM language development with Kotlin, including Android app development using Jetpack Compose for university projects.'
        },
        { 
          name: 'C/C++', 
          proficiency: 65, 
          years: 1, 
          projects: 1,
          description: 'System-level programming and algorithm implementation using C/C++ languages for university coursework.'
        },
        { 
          name: 'Scala', 
          proficiency: 55, 
          years: 0.5, 
          projects: 1,
          description: 'Functional programming concepts and basic Scala development for academic projects and coursework.'
        }
      ]
    }
  ];

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
                    className="relative bg-background rounded-lg p-6 shadow-testimonial hover:shadow-professional transition-professional cursor-pointer group"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="space-y-4">
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
                          ? 'opacity-100 max-h-20' :'opacity-0 max-h-0 overflow-hidden'
                      }`}>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {skill?.description}
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
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-portfolio-accent/5 transition-opacity duration-300 ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'opacity-100' : 'opacity-0'
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