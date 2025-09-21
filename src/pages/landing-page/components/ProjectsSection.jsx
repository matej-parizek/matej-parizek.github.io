import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

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

  const duretion=(start, end = Date.now()) => {
      const startDate = new Date(start);
      const endDate = new Date(end);
      const diffInMs = endDate - startDate;
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffInDays / 365);
      const months = Math.floor((diffInDays % 365) / 30);
      let durationStr = '';
      if (years > 0) {
        durationStr += `${years} year${years > 1 ? 's' : ''} `;
      }
      if (months > 0) {
        durationStr += `${months} month${months > 1 ? 's' : ''}`;
      }
      return durationStr.trim() || 'Less than a month';  
    }

  const projects = [
    {
      id: 1,
      title: 'MB-TOOL WebEDI',
      category: ['commercial', 'web-app'],
      description: 'Web-based logistics platform that automates delivery note generation, delivery forecasting, ASN creation, and EDI conversions for streamlined supply chain management.',
      image: 'https://pgs-log.com/wp-content/uploads/2024/02/Pic-900-x-380-px.jpg',
      technologies: ['Java', 'Spring Boot', 'TypeScript', 'Vue.js', 'SQL', 'REST API'],
      metrics: {
        complexity: 'High',
        duration: '6 months',
        impact: 'Major'
      },
      timeline: '6 months',
      client: 'T-Mobile Czech Republic',
      testimonial: `"The WebEDI platform significantly improved our delivery management workflow and automation capabilities, demonstrating Matej's strong development skills."`,
      clientRole: 'Project Manager',
      liveUrl: 'https://webedi.mbtool.cz/ui',
      githubUrl: '#',
      caseStudy: `Developed a comprehensive web-based logistics platform to automate complex EDI processes and delivery management at T-Mobile Czech Republic.\n\nKey features implemented:\n• Automated delivery note generation with customizable templates\n• Delivery forecasting using historical data analysis\n• ASN (Advanced Shipping Notice) creation and management\n• EDI conversion tools for seamless partner integration\n• Real-time tracking and monitoring dashboard\n\nTechnical implementation:\n• Spring Boot backend with RESTful API architecture\n• Vue.js frontend with TypeScript for type safety\n• Database design for logistics data management\n• Integration with external EDI systems\n• Clean architecture following MVC and layered patterns\n\nBusiness impact:\n• Streamlined delivery management processes\n• Improved automation capabilities for logistics operations\n• Enhanced visibility into supply chain management\n• Demonstrated ability to work with enterprise-level applications`
    },
    {
      id: 2,
      title: 'Anketa CTU',
      category: ['university'],
      description: 'Improvement of web-based course evaluation platform for CTU Prague enabling students, faculty, and staff to submit anonymous feedback, view results and statistics.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      technologies: ['Java', 'Spring Boot', 'JavaScript', 'HTML/CSS', 'PostgreSQL', 'Web Development'],
      metrics: {
        users: '1000+',
        features: '8+',
        performance: 'Optimized'
      },
      timeline: '4 months',
      client: 'Czech Technical University Prague',
      testimonial: `"The improved platform made course evaluations more accessible and provided better insights for academic improvements."`,
      clientRole: 'Academic Coordinator',
      liveUrl: '#',
      githubUrl: '#',
      caseStudy: `Enhanced an existing course evaluation platform for Czech Technical University in Prague to improve user experience and functionality.\n\nFeatures developed:\n• Anonymous feedback submission system\n• Survey management and configuration tools\n• Statistical analysis and reporting dashboard\n• Multi-role access (students, faculty, academic staff)\n• Public insights and results visualization\n• Instructor feedback and response capabilities\n\nTechnical improvements:\n• Refactored backend architecture using Spring Boot\n• Improved database schema design and optimization\n• Enhanced security with secure login mechanisms\n• Responsive frontend design improvements\n• Performance optimization for handling large user bases\n\nImpact achieved:\n• Increased student participation in course evaluations\n• Better insights for faculty and administration\n• Improved course quality through systematic feedback analysis\n• Streamlined evaluation process management for academic staff`
    },
    {
      id: 3,
      title: 'ASCII Art Generator',
      category: ['university'],
      description: 'Console-based ASCII art generator developed as part of Object-Oriented Programming course, showcasing core OOP principles like encapsulation, inheritance, and polymorphism.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
      technologies: ['Java', 'OOP Design Patterns', 'Console I/O', 'File Processing', 'Clean Architecture'],
      metrics: {
        patterns: '5+',
        formats: 'Multiple',
        architecture: 'OOP'
      },
      timeline: '2 months',
      client: 'CTU Prague - University Project',
      testimonial: `"Excellent demonstration of object-oriented programming principles with clean, maintainable code structure and proper design pattern usage."`,
      clientRole: 'OOP Course Instructor',
      liveUrl: '#',
      githubUrl: '#',
      caseStudy: `Developed a comprehensive ASCII art generation tool as part of Object-Oriented Programming coursework at CTU Prague, demonstrating mastery of OOP principles.\n\nCore OOP implementation:\n• Encapsulation: Private data members with well-defined public interfaces\n• Inheritance: Base classes for different art generation methods and strategies\n• Polymorphism: Multiple art generation strategies with common interface\n• Design patterns: Factory and Strategy patterns for extensible architecture\n• Clean code practices and comprehensive documentation\n\nFeatures implemented:\n• Multiple ASCII art generation algorithms and techniques\n• Support for various input formats and image sources\n• Configurable output parameters and styling options\n• File input/output capabilities with error handling\n• Command-line interface with user-friendly options and help\n• Comprehensive error handling and input validation\n\nTechnical achievements:\n• Modular architecture enabling easy extension and maintenance\n• Efficient memory usage for large image processing operations\n• Robust error handling and user input validation systems\n• Clean separation of concerns and single responsibility principle\n• Demonstrated understanding of fundamental OOP concepts`
    },
    {
      id: 4,
      title: 'Android Mobile App',
      category: ['mobile', 'university'],
      description: 'Semester project Android application built using Kotlin and Jetpack Compose, focusing on modern UI components and clean architecture practices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material Design', 'MVVM'],
      metrics: {
        screens: '6+',
        components: '15+',
        architecture: 'MVVM'
      },
      timeline: '3 months',
      client: 'CTU Prague - University Project',
      testimonial: `"Great implementation of modern Android development practices with excellent UI/UX design and proper architectural patterns."`,
      clientRole: 'Mobile Development Instructor',
      liveUrl: '#',
      githubUrl: '#',
      caseStudy: `Built a modern Android application using Kotlin and Jetpack Compose as a semester project, demonstrating proficiency in contemporary mobile development practices.\n\nModern Android development approach:\n• Kotlin programming with full type safety and null safety features\n• Jetpack Compose for declarative UI development and modern design\n• Material Design 3 components and comprehensive theming system\n• MVVM architecture pattern implementation for clean separation\n• Dependency injection and modular design principles\n\nKey features implemented:\n• Multiple interactive screens with smooth navigation\n• Advanced state management using Compose state handling\n• Custom UI components and smooth animations\n• Local data storage and efficient data management\n• Responsive design optimized for different screen sizes\n• Modern Material Design implementation with consistent theming\n\nTechnical highlights:\n• Jetpack Compose UI toolkit mastery and best practices\n• Kotlin language features and modern development approaches\n• Android lifecycle management and proper resource handling\n• Performance optimization specifically for mobile devices\n• Comprehensive testing implementation for UI and business logic\n• Clean architecture principles applied to mobile development`
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects?.filter(project => project?.category.some(it => it  === activeFilter));

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
            A showcase of my development work including commercial projects at T-Mobile Czech Republic, 
            university assignments at CTU Prague, and academic projects demonstrating various technologies 
            and problem-solving approaches in software development.
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
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects?.map((project) => (
            <div key={project?.id} className="bg-card rounded-lg shadow-testimonial hover:shadow-professional transition-professional overflow-hidden group">
              <div className="relative overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-professional"
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

              <div className="p-6 space-y-4">
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

                {/* Client Testimonial */}
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  <p className="text-sm text-text-secondary italic">
                    {project?.testimonial}
                  </p>
                  <div className="text-xs text-text-secondary">
                    — {project?.clientRole}, {project?.client}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm text-text-secondary">
                    <Icon name="Clock" size={14} className="inline mr-1" />
                    {project?.timeline}
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
          ))}
        </div>

        {/* Case Study Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
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
                    <p className="text-text-secondary mb-4">{selectedProject?.description}</p>
                    
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
                    <p className="text-text-secondary">{selectedProject?.timeline}</p>
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
                
                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-accent text-text-primary mb-2">Client Testimonial</h4>
                  <p className="text-text-secondary italic mb-2">{selectedProject?.testimonial}</p>
                  <p className="text-sm text-text-secondary">
                    — {selectedProject?.clientRole}, {selectedProject?.client}
                  </p>
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