import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useStorage } from '../../../store/useStorage';
import { calculateDuration, formatDuration } from '../../../utils/date';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'university', label: 'University Projects' },
    { id: 'commercial', label: 'Commercial Work' }
  ];

  const { projects } = useStorage();

  const filteredProjects = activeFilter === 'all' 
    ? projects.items 
    : projects.items?.filter(project => project?.category.some(it => it  === activeFilter));

  const openCaseStudy = (project) => {
    setSelectedProject(project);
  };

  const closeCaseStudy = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-headline text-text-primary">
            Projects & 
            <span className="text-primary"> Portfolio</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            ${projects.about}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters?.map((filter) => (
            <button
              key={filter?.id}
              onClick={() => setActiveFilter(filter?.id)}
              className={`px-6 py-2 rounded-full font-accent transition-professional ${
                activeFilter === filter?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {filter?.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch auto-rows-fr">
          {filteredProjects?.map((project) => (
            <div key={project?.id}
              className="bg-card rounded-lg shadow-testimonial hover:shadow-professional transition-professional overflow-hidden group flex flex-col h-full">
              <div className="relative overflow-hidden ">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-professional"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-professional" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-professional">
                  <div className="flex space-x-2">
                    <Button
                      variant="secondary"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="left"
                      onClick={() => window.open(project?.liveUrl, '_blank')}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="Github"
                      iconPosition="left"
                      onClick={() => window.open(project?.githubUrl, '_blank')}
                    >
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 flex flex-col flex-1">
                <div className="space-y-2">
                  <h3 className="text-xl font-headline text-text-primary group-hover:text-primary transition-professional">
                    {project?.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project?.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                  {Object.entries(project?.metrics)?.map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-headline text-primary">{value}</div>
                      <div className="text-xs text-text-secondary capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="h-full relative mt-auto justify-end flex items-end">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-text-secondary inline-flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {formatDuration(calculateDuration(project?.startTime, project?.endTime))}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="FileText"
                      iconPosition="left"
                      onClick={() => openCaseStudy(project)}
                    >
                      View Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background rounded-lg shadow-professional max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-center">
                <h3 className="text-xl font-headline text-text-primary">
                  {selectedProject?.title} - Case Study
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="X"
                  onClick={closeCaseStudy}
                />
              </div>
              
              <div className="p-6 space-y-6">
                <Image
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-accent text-text-primary mb-2">Project Overview</h4>
                    <p className="text-text-secondary leading-relaxed line-clamp-3">{selectedProject?.description}</p>
                    
                    <h4 className="font-accent text-text-primary mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedProject?.technologies?.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-accent text-text-primary mb-2">Key Metrics</h4>
                    <div className="space-y-2 mb-4">
                      {Object.entries(selectedProject?.metrics)?.map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-text-secondary capitalize">{key}:</span>
                          <span className="text-primary font-accent">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-accent text-text-primary mb-2">Timeline</h4>
                    <p className="text-text-secondary">{ formatDuration(calculateDuration(selectedProject?.startTime,selectedProject?.endTime)) }</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-accent text-text-primary mb-4">Detailed Case Study</h4>
                  <div className="prose prose-slate max-w-none">
                    {selectedProject?.caseStudy?.split('\n')?.map((paragraph, index) => (
                      <p key={index} className="text-text-secondary leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;