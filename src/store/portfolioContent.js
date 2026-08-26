export const portfolioContent = {
  profile: {
    name: 'Matej Parizek',
    role: 'Backend Software Engineer',
    location: 'Prague, Czech Republic',
    summary:
      'I help teams turn complex requirements into maintainable backend software, from REST APIs and microservices to cloud and event-driven integrations.',
    detail:
      'My work is grounded in clear communication, production reliability, and continuous technical growth.',
    email: 'mat.parizek@seznam.cz',
    phone: '+420 775 995 600',
    linkedIn: 'https://linkedin.com/in/matej-parizek',
    resume: '/assets/Matej_Parizek_Resume.pdf',
    resumeCz: '/assets/Matej_Parizek_Resume_CZ.pdf',
  },
  experience: [
    {
      company: 'CGI',
      role: 'Programmer Analyst',
      period: 'December 2025 — Present',
      location: 'Prague, Czech Republic',
      summary:
        'Developing and maintaining enterprise backend applications, primarily with Java and Spring Boot, with selected services and components in Kotlin and Python.',
      responsibilities: [
        'Contribute to production Kotlin and Spring Boot microservices in mixed Java/Kotlin JVM codebases built with Maven.',
        'Implement BankID backend functionality across REST endpoints, business logic, integrations, automated tests, refactoring, and bug fixes.',
        'Improve application and database performance through application-level and query optimization.',
        'Work with Azure Functions and Azure Event Hub for event-driven processing, and Redis for caching and efficient data access.',
        'Participate in L3 production support and investigate issues in enterprise backend systems.',
        'Clarify requirements and explain technical implementation decisions directly to customer stakeholders.',
      ],
      technologies: ['Java', 'Kotlin', 'Python', 'Spring Boot', 'Maven', 'SQL', 'Redis', 'Microsoft Azure'],
    },
    {
      company: 'T-Mobile Czech Republic',
      role: 'Software Engineer Trainee',
      period: 'March 2024 — December 2025',
      location: 'Prague, Czech Republic · Part-time',
      summary:
        'Developed backend applications with Java and Spring Boot and frontend functionality with TypeScript and Vue/Nuxt in an enterprise environment.',
      responsibilities: [
        'Analyzed customer requirements and translated them into feasible technical implementation tasks.',
        'Designed and redesigned REST APIs for clearer structure, usability, maintainability, and integration.',
        'Contributed to persistence, service, and controller layers using layered architecture principles.',
        'Communicated technical feasibility, implementation constraints, and available solutions directly with customers.',
        'Created UML diagrams and technical documentation describing modules and system interactions.',
      ],
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'TypeScript', 'Vue', 'Nuxt', 'Liquibase', 'Flyway'],
    },
    {
      company: 'T-Mobile Czech Republic',
      role: 'Junior Java Developer',
      period: 'July 2023 — September 2023',
      location: 'Prague, Czech Republic · Part-time',
      summary:
        'Contributed to the development and maintenance of internal applications using Java.',
      responsibilities: [
        'Implemented backend changes and supported existing application functionality.',
        'Participated in debugging, code reviews, and the implementation of maintainable backend code.',
      ],
      technologies: ['Java', 'Git', 'Maven', 'Gradle'],
    },
  ],
  projects: [
    {
      name: 'BankID Platform',
      type: 'Work project · CGI',
      description:
        'Production microservice platform in digital identity and financial services, built with Kotlin and Spring Boot.',
      contribution:
        'Implemented REST endpoints, business logic, integrations, automated tests, refactoring, and bug fixes. Worked on application- and database-level performance improvements and communicated technical solutions with customer stakeholders.',
      technologies: ['Kotlin', 'Spring Boot', 'REST APIs', 'SQL', 'Maven', 'Automated testing'],
    },
    {
      name: 'Sazka / Allwyn Backend Systems',
      type: 'Work project · CGI',
      description:
        'Enterprise backend systems developed and maintained primarily with Java and Spring Boot.',
      contribution:
        'Work includes event-driven processing with Azure Functions and Azure Event Hub, Redis caching, cloud-hosted databases, troubleshooting, and L3 production support.',
      technologies: ['Java', 'Spring Boot', 'Azure Functions', 'Azure Event Hub', 'Redis', 'SQL'],
    },
    {
      name: 'ENGDat Platform',
      type: 'Work project · T-Mobile Czech Republic',
      description:
        'Microservice-based data integration platform for automated exchange, validation, and transformation of technical documentation and engineering messages.',
      contribution:
        'Contributed to backend development, REST API design, service integration, and parts of the application’s technical design.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Data integration'],
    },
    {
      name: 'MB-TOOL WebEDI',
      type: 'Work project · T-Mobile Czech Republic',
      description:
        'Web logistics platform supporting delivery note generation, delivery forecasting, ASN creation, and EDI conversions.',
      contribution:
        'Contributed to application development and integration functionality while working at T-Mobile Czech Republic.',
      technologies: ['Java', 'Spring Boot', 'REST APIs', 'EDI', 'Application integration'],
    },
    {
      name: 'Anketa CTU',
      type: 'University team project · CTU Prague',
      description:
        'Kotlin web platform for university course evaluation, developed over two semesters as a team project.',
      contribution:
        'Developed application functionality supporting surveys, anonymous feedback, statistics, and instructor feedback.',
      technologies: ['Kotlin', 'Gradle', 'Web development', 'Team project'],
    },
  ],
  expertise: [
    { category: 'Languages', items: ['Java', 'Kotlin', 'SQL', 'Python', 'TypeScript / JavaScript', 'C / C++', 'Scala'] },
    { category: 'Backend & JVM', items: ['Spring Boot', 'JVM', 'REST APIs', 'Microservices', 'JPA / Hibernate', 'Redis'] },
    { category: 'Cloud & integration', items: ['Microsoft Azure', 'Azure Functions', 'Azure Event Hub', 'Event-driven architecture'] },
    { category: 'Data', items: ['PostgreSQL', 'SQL databases', 'Database query optimization', 'Liquibase', 'Flyway'] },
    { category: 'Architecture', items: ['Layered architecture', 'Modular application design', 'REST API design', 'Service integration'] },
    { category: 'Delivery & quality', items: ['Maven', 'Gradle', 'Git', 'CI/CD', 'Automated testing', 'Debugging', 'Code reviews', 'Refactoring'] },
    { category: 'Frontend context', items: ['Vue', 'Nuxt', 'TypeScript'] },
  ],
  education: {
    school: 'Czech Technical University in Prague, Faculty of Information Technology',
    degree: 'B.Sc. in Software Engineering',
    periods: ['Full-time · September 2022 — February 2025', 'Part-time · September 2025 — Present'],
  },
  languages: ['Czech', 'English'],
};
