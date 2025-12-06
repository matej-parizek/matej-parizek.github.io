import about from "./about";

const projects = {
about: ` A showcase of my development work including commercial projects at T-Mobile Czech Republic, 
            university assignments at CTU Prague, and academic projects demonstrating various technologies 
            and problem-solving approaches in software development.`,
items: [
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
      client: 'T-Mobile Czech Republic',
      testimonial: `"The WebEDI platform significantly improved our delivery management workflow and automation capabilities, demonstrating Matej's strong development skills."`,
      clientRole: 'Project Manager',
      liveUrl: 'https://webedi.mbtool.cz/ui',
      githubUrl: '#',
      caseStudy: `Developed a comprehensive web-based logistics platform to automate complex EDI processes and delivery management at T-Mobile Czech Republic.\n\nKey features implemented:\n• Automated delivery note generation with customizable templates\n• Delivery forecasting using historical data analysis\n• ASN (Advanced Shipping Notice) creation and management\n• EDI conversion tools for seamless partner integration\n• Real-time tracking and monitoring dashboard\n\nTechnical implementation:\n• Spring Boot backend with RESTful API architecture\n• Vue.js frontend with TypeScript for type safety\n• Database design for logistics data management\n• Integration with external EDI systems\n• Clean architecture following MVC and layered patterns\n\nBusiness impact:\n• Streamlined delivery management processes\n• Improved automation capabilities for logistics operations\n• Enhanced visibility into supply chain management\n• Demonstrated ability to work with enterprise-level applications`,
      startTime: '2024-03-01',
      endTime: undefined
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
      caseStudy: `Enhanced an existing course evaluation platform for Czech Technical University in Prague to improve user experience and functionality.\n\nFeatures developed:\n• Anonymous feedback submission system\n• Survey management and configuration tools\n• Statistical analysis and reporting dashboard\n• Multi-role access (students, faculty, academic staff)\n• Public insights and results visualization\n• Instructor feedback and response capabilities\n\nTechnical improvements:\n• Refactored backend architecture using Spring Boot\n• Improved database schema design and optimization\n• Enhanced security with secure login mechanisms\n• Responsive frontend design improvements\n• Performance optimization for handling large user bases\n\nImpact achieved:\n• Increased student participation in course evaluations\n• Better insights for faculty and administration\n• Improved course quality through systematic feedback analysis\n• Streamlined evaluation process management for academic staff`,
      startTime: '2024-02-01',
      endTime: '2024-12-31'
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
      caseStudy: `Developed a comprehensive ASCII art generation tool as part of Object-Oriented Programming coursework at CTU Prague, demonstrating mastery of OOP principles.\n\nCore OOP implementation:\n• Encapsulation: Private data members with well-defined public interfaces\n• Inheritance: Base classes for different art generation methods and strategies\n• Polymorphism: Multiple art generation strategies with common interface\n• Design patterns: Factory and Strategy patterns for extensible architecture\n• Clean code practices and comprehensive documentation\n\nFeatures implemented:\n• Multiple ASCII art generation algorithms and techniques\n• Support for various input formats and image sources\n• Configurable output parameters and styling options\n• File input/output capabilities with error handling\n• Command-line interface with user-friendly options and help\n• Comprehensive error handling and input validation\n\nTechnical achievements:\n• Modular architecture enabling easy extension and maintenance\n• Efficient memory usage for large image processing operations\n• Robust error handling and user input validation systems\n• Clean separation of concerns and single responsibility principle\n• Demonstrated understanding of fundamental OOP concepts`,
      startTime: '2024-03-01',
      endTime: undefined
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
      caseStudy: `Built a modern Android application using Kotlin and Jetpack Compose as a semester project, demonstrating proficiency in contemporary mobile development practices.\n\nModern Android development approach:\n• Kotlin programming with full type safety and null safety features\n• Jetpack Compose for declarative UI development and modern design\n• Material Design 3 components and comprehensive theming system\n• MVVM architecture pattern implementation for clean separation\n• Dependency injection and modular design principles\n\nKey features implemented:\n• Multiple interactive screens with smooth navigation\n• Advanced state management using Compose state handling\n• Custom UI components and smooth animations\n• Local data storage and efficient data management\n• Responsive design optimized for different screen sizes\n• Modern Material Design implementation with consistent theming\n\nTechnical highlights:\n• Jetpack Compose UI toolkit mastery and best practices\n• Kotlin language features and modern development approaches\n• Android lifecycle management and proper resource handling\n• Performance optimization specifically for mobile devices\n• Comprehensive testing implementation for UI and business logic\n• Clean architecture principles applied to mobile development`,
      startTime: '2024-03-01',
      endTime: undefined
    },
    {
      id: 5,
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
      caseStudy: `Built a modern Android application using Kotlin and Jetpack Compose as a semester project, demonstrating proficiency in contemporary mobile development practices.\n\nModern Android development approach:\n• Kotlin programming with full type safety and null safety features\n• Jetpack Compose for declarative UI development and modern design\n• Material Design 3 components and comprehensive theming system\n• MVVM architecture pattern implementation for clean separation\n• Dependency injection and modular design principles\n\nKey features implemented:\n• Multiple interactive screens with smooth navigation\n• Advanced state management using Compose state handling\n• Custom UI components and smooth animations\n• Local data storage and efficient data management\n• Responsive design optimized for different screen sizes\n• Modern Material Design implementation with consistent theming\n\nTechnical highlights:\n• Jetpack Compose UI toolkit mastery and best practices\n• Kotlin language features and modern development approaches\n• Android lifecycle management and proper resource handling\n• Performance optimization specifically for mobile devices\n• Comprehensive testing implementation for UI and business logic\n• Clean architecture principles applied to mobile development`,
      startTime: '2024-03-01',
      endTime: undefined
    }
]}
export default projects;