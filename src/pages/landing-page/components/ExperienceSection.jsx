import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import { useStorage } from '../../../store/useStorage';
import { formatYears } from '../../../utils/date';

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [expandedExperience, setExpandedExperience] = useState(null);
  const sectionRef = useRef(null);

  const { experiences } = useStorage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const experienceElements = document.querySelectorAll('[data-experience-item]');
    experienceElements?.forEach(el => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const yearsOfCommercialExperience = experiences.filter(exp => exp.type.toUpperCase() !== 'education'.toUpperCase());
  const totalYears = yearsOfCommercialExperience.reduce((total, exp) => {
    const start = exp.startDate.getTime();
    const end = exp.endDate ? exp.endDate.getTime() : new Date().getTime();
    const durationInYears = (end - start) / (1000 * 60 * 60 * 24 * 365);
    return total + durationInYears;
  }, 0);

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Professional Experience & 
            <span className="text-primary"> Learning Journey</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            My journey from Software Engineering student to commercial developer at T-Mobile Czech Republic. 
            Each experience has built my foundation in backend development, clean architecture, and professional 
            software engineering practices.
          </p>
        </div>


        {/* Career Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-background rounded-lg p-6 shadow-testimonial">
            <div className="text-2xl font-headline text-primary">{formatYears(totalYears)}</div>
            <div className="text-sm text-text-secondary">Commercial Years Experience</div>
          </div>
          <div className="text-center bg-background rounded-lg p-6 shadow-testimonial">
            <div className="text-2xl font-headline text-primary">2</div>
            <div className="text-sm text-text-secondary">Companies</div>
          </div>
          <div className="text-center bg-background rounded-lg p-6 shadow-testimonial">
            <div className="text-2xl font-headline text-primary">4+</div>
            <div className="text-sm text-text-secondary">Major Projects</div>
          </div>
          <div className="text-center bg-background rounded-lg p-6 shadow-testimonial">
            <div className="text-2xl font-headline text-primary">3+</div>
            <div className="text-sm text-text-secondary">Technologies Mastered</div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences?.map((exp, index) => (
              <div
                key={exp?.id}
                data-id={exp?.id}
                data-experience-item
                className={`relative transition-all duration-700 ${
                  visibleItems?.has(exp?.id) 
                    ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-professional hidden md:block"></div>

                <div className="md:ml-20 bg-background rounded-lg shadow-testimonial hover:shadow-professional transition-professional overflow-hidden">
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-headline text-text-primary">{exp?.position}</h3>
                        <div className="flex items-center space-x-2 text-primary">
                          <Icon name="Building" size={16} />
                          <span className="font-accent">{exp?.company}</span>
                        </div>
                        <p className="text-text-secondary">{exp?.description}</p>
                      </div>
                      
                      <div className="flex-shrink-0 space-y-2 text-right">
                        <div className="flex items-center justify-end space-x-2 text-text-secondary">
                          <Icon name="Calendar" size={16} />
                          <span className="text-sm">{exp?.period}</span>
                        </div>
                        <div className="flex items-center justify-end space-x-2 text-text-secondary">
                          <Icon name="MapPin" size={16} />
                          <span className="text-sm">{exp?.location}</span>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {exp?.type}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp?.technologies?.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpanded(exp?.id)}
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-professional"
                    >
                      <span className="text-sm font-accent">
                        {expandedExperience === exp?.id ? 'Show Less' : 'Show Details'}
                      </span>
                      <Icon 
                        name={expandedExperience === exp?.id ? "ChevronUp" : "ChevronDown"} 
                        size={16} 
                      />
                    </button>

                    {/* Expanded Content */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      expandedExperience === exp?.id ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="space-y-6 border-t border-border pt-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-accent text-text-primary mb-3">Key Contributions</h4>
                          <ul className="space-y-2">
                            {exp?.achievements?.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                                <span className="text-text-secondary text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Notable Projects */}
                        <div>
                          <h4 className="font-accent text-text-primary mb-3">Projects Worked On</h4>
                          <ul className="space-y-2">
                            {exp?.projects?.map((project, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <Icon name="Folder" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-text-secondary text-sm">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Testimonial */}
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Growth Visualization */}
        <div className="mt-16 bg-background rounded-lg p-8 shadow-testimonial">
          <h3 className="text-xl font-headline text-text-primary text-center mb-8">Professional Growth Timeline</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { year: '2022', role: 'Student', level: 'Learning', color: 'bg-yellow-500', description: 'Started Software Engineering at CTU Prague' },
              { year: '2023', role: 'Junior Developer', level: 'Entry Level', color: 'bg-orange-500', description: 'First commercial role at T-Mobile' },
              { year: '2024', role: 'Software Engineer Trainee', level: 'Growing', color: 'bg-blue-500', description: 'Advanced role with full development responsibilities' }
            ]?.map((stage, index) => (
              <div key={stage?.year + stage?.role} className="text-center space-y-4">
                <div className={`w-16 h-16 ${stage?.color} rounded-full mx-auto flex items-center justify-center text-white font-headline text-sm`}>
                  {stage?.year}
                </div>
                <div>
                  <div className="font-accent text-text-primary">{stage?.role}</div>
                  <div className="text-sm text-text-secondary mb-2">{stage?.level}</div>
                  <div className="text-xs text-text-secondary">{stage?.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;