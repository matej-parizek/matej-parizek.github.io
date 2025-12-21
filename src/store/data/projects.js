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
      technologies: ['Java', 'Spring Boot', 'TypeScript', 'Vue.js', 'SQL', 'REST API', 'Liquibase', 'Docker'],
      metrics: {
        complexity: 'High',
        development: 'Agile (Scrum)',
        impact: 'Major'
      },
      client: 'T-Mobile Czech Republic',
      testimonial: `"The WebEDI platform significantly improved our delivery management workflow and automation capabilities, demonstrating Matej's strong development skills."`,
      clientRole: 'Project Manager',
      liveUrl: 'https://webedi.mbtool.cz/ui',
      githubUrl: '#',
      caseStudy: `Developed a comprehensive web-based logistics platform to automate complex EDI processes and delivery management at T-Mobile Czech Republic.\n\nKey features implemented:\n• Automated delivery note generation with customizable templates\n• Delivery forecasting using historical data analysis\n• ASN (Advanced Shipping Notice) creation and management\n• EDI conversion tools for seamless partner integration\n• Real-time tracking and monitoring dashboard\n\nTechnical implementation:\n• Spring Boot backend with RESTful API architecture\n• Vue.js frontend with TypeScript for type safety\n• Database design for logistics data management\n• Integration with external EDI systems\n• Clean architecture following MVC and layered patterns\n\nBusiness impact:\n• Streamlined delivery management processes\n• Improved automation capabilities for logistics operations\n• Enhanced visibility into supply chain management\n• Demonstrated ability to work with enterprise-level applications`,
      startTime: '2024-03-01',
      endTime: '2025-10-15',
      rights: 'T-Mobile Czech Republic'
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
        db: 'Oracle',
        focus: 'Improvements'
      },
      client: 'Czech Technical University Prague',
      testimonial: `"The improved platform made course evaluations more accessible and provided better insights for academic improvements."`,
      clientRole: 'Academic Coordinator',
      liveUrl: 'https://anketa.is.cvut.cz/html/anketa-nova/',
      githubUrl: '#',
      caseStudy: `Enhanced an existing course evaluation platform for Czech Technical University in Prague to improve user experience and functionality.\n\nFeatures developed:\n• Anonymous feedback submission system\n• Survey management and configuration tools\n• Statistical analysis and reporting dashboard\n• Multi-role access (students, faculty, academic staff)\n• Public insights and results visualization\n• Instructor feedback and response capabilities\n\nTechnical improvements:\n• Refactored backend architecture using Spring Boot\n• Improved database schema design and optimization\n• Enhanced security with secure login mechanisms\n• Responsive frontend design improvements\n• Performance optimization for handling large user bases\n\nImpact achieved:\n• Increased student participation in course evaluations\n• Better insights for faculty and administration\n• Improved course quality through systematic feedback analysis\n• Streamlined evaluation process management for academic staff`,
      startTime: '2024-02-01',
      endTime: '2024-12-31',
      rights: 'Czech Technical University Prague'
    },
    {
      id: 3,
      title: 'ASCII Art Generator',
      category: ['university'],
      description: 'Console-based ASCII art generator developed as part of Object-Oriented Programming course, showcasing core OOP principles like encapsulation, inheritance, and polymorphism.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop',
      technologies: ['Java', 'OOP Design Patterns', 'Console I/O', 'File Processing', 'Clean Architecture'],
      metrics: {
        extensible: 'Yes',
        IO: 'CLI',
        architecture: 'OOP'
      },
      client: 'CTU Prague - University Project',
      testimonial: `"Excellent demonstration of object-oriented programming principles with clean, maintainable code structure and proper design pattern usage."`,
      clientRole: 'OOP Course Instructor',
      liveUrl: undefined,
      githubUrl: 'https://github.com/matej-parizek/ascii-art',
      caseStudy: `Developed a comprehensive ASCII art generation tool as part of Object-Oriented Programming coursework at CTU Prague, demonstrating mastery of OOP principles.\n\nCore OOP implementation:\n• Encapsulation: Private data members with well-defined public interfaces\n• Inheritance: Base classes for different art generation methods and strategies\n• Polymorphism: Multiple art generation strategies with common interface\n• Design patterns: Factory and Strategy patterns for extensible architecture\n• Clean code practices and comprehensive documentation\n\nFeatures implemented:\n• Multiple ASCII art generation algorithms and techniques\n• Support for various input formats and image sources\n• Configurable output parameters and styling options\n• File input/output capabilities with error handling\n• Command-line interface with user-friendly options and help\n• Comprehensive error handling and input validation\n\nTechnical achievements:\n• Modular architecture enabling easy extension and maintenance\n• Efficient memory usage for large image processing operations\n• Robust error handling and user input validation systems\n• Clean separation of concerns and single responsibility principle\n• Demonstrated understanding of fundamental OOP concepts`,
      startTime: '2024-12-15',
      endTime: '2024-12-20'
    },
    {
      id: 4,
      title: 'Android Mobile App',
      category: ['mobile', 'university'],
      description: 'Semester project Android application built using Kotlin and Jetpack Compose, focusing on UI components and clean architecture practices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      technologies: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Material Design', 'MVVM'],
      metrics: {
        screens: '2+',
        components: '5+',
        architecture: 'MVVM'
      },
      client: 'CTU Prague - University Project',
      testimonial: `"Great implementation of modern Android development practices with excellent UI/UX design and proper architectural patterns."`,
      clientRole: 'Mobile Development Instructor',
      liveUrl: undefined,
      githubUrl: 'https://github.com/matej-parizek/Dog-Walking',
      caseStudy: `Built a modern Android application using Kotlin and Jetpack Compose as a semester project, demonstrating proficiency in contemporary mobile development practices.\n\nModern Android development approach:\n• Kotlin programming with full type safety and null safety features\n• Jetpack Compose for declarative UI development and modern design\n• Material Design 3 components and comprehensive theming system\n• MVVM architecture pattern implementation for clean separation\n• Dependency injection and modular design principles\n\nKey features implemented:\n• Multiple interactive screens with smooth navigation\n• Advanced state management using Compose state handling\n• Custom UI components and smooth animations\n• Local data storage and efficient data management\n• Responsive design optimized for different screen sizes\n• Modern Material Design implementation with consistent theming\n\nTechnical highlights:\n• Jetpack Compose UI toolkit mastery and best practices\n• Kotlin language features and modern development approaches\n• Android lifecycle management and proper resource handling\n• Performance optimization specifically for mobile devices\n• Comprehensive testing implementation for UI and business logic\n• Clean architecture principles applied to mobile development`,
      startTime: '2024-05-16',
      endTime: '2024-06-11'
    },
    {
      id: 5,
      title: 'CTU FIT – Study Projects',
      category: ['university', 'systems', 'algorithms'],
      description: 'Collection of selected coursework and programming assignments completed at Czech Technical University in Prague (FIT), focusing on algorithms, systems programming, cryptography, and operating systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      technologies: [
        'C',
        'C++',
        'Python',
        'STL',
        'POSIX Threads',
        'Linux'
      ],
      metrics: {
        courses: '5',
        projects: '20+',
        languages: '3'
      },
      client: 'CTU Prague – Faculty of Information Technology',
      testimonial: `"Strong emphasis on algorithmic thinking, low-level programming, and system design, reflecting solid academic and engineering foundations."`,
      clientRole: 'University Coursework',
      liveUrl: undefined,
      githubUrl: 'https://github.com/matej-parizek/Czech-Technical-Univerzity---Bachalor',
      caseStudy: `This repository aggregates selected coursework and programming assignments completed during studies at CTU FIT, covering a broad range of core computer science topics.\n\nCourses included:\n• PA1 – Programming and Algorithms 1 (C)\n  – Foundations of programming, memory management, and basic data structures\n\n• PA2 – Programming and Algorithms 2 (C++)\n  – Object-oriented design, inheritance, polymorphism, and advanced data structures\n\n• AAG – Automata and Grammars (C++)\n  – Formal languages, finite automata, grammar parsing, and determinization\n\n• KAB – Cryptography and Security (C++ / Python)\n  – Classical and modern cryptography, hashing, block ciphers, PKI, and security principles\n\n• OSY – Operating Systems (C++)\n  – Multithreading, synchronization primitives, producer–consumer models, and performance considerations\n\nTechnical highlights:\n• Strong focus on low-level and systems programming\n• Emphasis on algorithmic correctness and efficiency\n• Practical implementation of theoretical concepts\n• Clean, testable C/C++ code following academic and engineering standards\n• Linux-based development environment\n\nThe repository serves as a structured academic portfolio demonstrating progression from foundational programming concepts to advanced systems and security topics.`,
      startTime: '2022-10-01',
      endTime: undefined
    },
    {
      id: 6,
      title: 'ENGDAT Platform',
      category: ['commercial', 'web-app'],
      description: 'Enterprise web platform designed to manage and process engineering data, built from scratch with a full-stack architecture and DevOps deployment practices.',
      image: 'https://www.enptechnologies.com/wp-content/uploads/2022/09/shutterstock_1716542992-1-768x466-1.jpg',
      technologies: [
        'Java 17',
        'Spring Boot',
        'Vue.js',
        'TypeScript',
        'PostgreSQL',
        'Flyway',
        'REST API',
        'Ansible',
        'Podman'
      ],
      metrics: {
        complexity: 'High',
        development: 'Agile (Scrum)',
        impact: 'Major'
      },
      client: 'T-Mobile Czech Republic',
      testimonial: `"The ENGDAT project was built from the ground up with a strong architectural foundation, demonstrating full-stack expertise and ownership of both development and deployment."`,
      clientRole: 'Technical Lead / Internal Platform',
      liveUrl: undefined,
      githubUrl: '#',
      caseStudy: `ENGDAT is an internal enterprise platform developed for T-Mobile Czech Republic, focused on structured engineering data management and processing.\n\nProject scope and responsibilities:\n• Designed the complete frontend and backend architecture from scratch\n• Defined the overall project structure for both FE and BE layers\n• Implemented RESTful API endpoints using Spring Boot (Java 17)\n• Developed frontend application using Vue.js and TypeScript\n• Designed and initialized the PostgreSQL database schema\n• Managed database versioning and migrations using Flyway\n• Implemented clean, layered backend architecture\n\nInfrastructure and deployment:\n• Prepared the application for containerized deployment\n• Configured deployment pipelines for test environment\n• Deployed the solution to a testing server using Ansible automation\n• Utilized Podman and Podman Play Kube for container orchestration\n\nTechnical highlights:\n• End-to-end ownership from initial design to deployment\n• Strong focus on maintainable architecture and scalability\n• Java backend with explicit API contracts\n• Infrastructure-as-code approach for deployment consistency\n• Close alignment with enterprise development standards`,
      startTime: '2025-06-01',
      endTime: '2025-12-31',
      rights: 'T-Mobile Czech Republic'
    }
]}
export default projects;