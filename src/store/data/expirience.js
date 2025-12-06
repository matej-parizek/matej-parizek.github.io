// src/store/data/experience.js  (doporučuju file přejmenovat správně)
import { calculateDuration, formatDate } from '../../utils/date.js';

const experiences = [
  {
    id: 1,
    company: 'T-Mobile Czech Republic',
    position: 'Software Engineer Trainee',
    startDate: new Date(2024, 2),
    endDate: undefined, // běží
    get period() {
      const from = formatDate(this.startDate);
      const to = this.endDate ? formatDate(this.endDate) : 'Present';
      return `${from} – ${to}`;
    },
    get duration() {
      return calculateDuration(this.startDate, this.endDate);
    },
    location: 'Prague, Czech Republic',
    type: 'Part-time',
    description:
      'Current role focusing on customer requirements analysis, API design, and backend/frontend development using enterprise technologies.',
    achievements: [
      'Customer Requirements Analysis: Analyzing and developing customer requirements to ensure solutions meet business goals and technical standards',
      'API Design: Designing and redesigning REST APIs to improve clarity, performance, and usability for internal and external consumers',
      'Backend and Frontend Development: Developing backend (Java, Spring Boot) and frontend (TypeScript, Vue) components with focus on clean architecture and scalability',
      'Module Architecture: Defining and implementing module structures (persistence, service, controller) following best practices (MVC, layered architecture)',
      'Unit Testing: Writing comprehensive unit tests to ensure high code quality and reliability',
      'Technical Documentation: Creating technical documentation as part of the trainee program, including basic UML diagrams to illustrate architecture and module interactions',
      'System Improvements: Proactively contributing ideas to enhance system performance, maintainability, and developer experience'
    ],
    technologies: ['Java', 'Spring Boot', 'TypeScript', 'Vue.js', 'Liquibase/Flyway', 'Gradle/Maven'],
    projects: [
      'MB-TOOL WebEDI - Web-based logistics platform for delivery management',
      'Internal API Development - RESTful services for business applications',
      'System Architecture Documentation - UML diagrams and technical specifications'
    ]
  },
  {
    id: 2,
    company: 'T-Mobile Czech Republic',
    position: 'Junior Java Developer',
    startDate: new Date(2023, 6),
    endDate: new Date(2023,8), 
    get period() {
      const from = formatDate(this.startDate);
      const to = this.endDate ? formatDate(this.endDate) : 'Present';
      return `${from} – ${to}`;
    },
    get duration() {
      return calculateDuration(this.startDate, this.endDate);
    },
    location: 'Prague, Czech Republic',
    type: 'Part-time',
    description:
      'Summer internship role focusing on Java development and gaining commercial software development experience.',
    achievements: [
      'Tool Development: Contributed to the development and maintenance of internal tools using Java',
      'Code Quality: Assisted in code reviews and debugging to ensure maintainable and high-quality code',
      'Collaboration: Worked closely with senior engineers to implement backend solutions and learn professional development practices',
      'Learning Professional Workflows: Gained experience with enterprise development processes and version control practices'
    ],
    technologies: ['Java', 'Spring Boot', 'Maven/Gradle', 'Git', 'IntelliJ IDEA'],
    projects: [
      'Internal Development Tools - Java-based utilities for development workflow',
      'Code Review Participation - Contributing to code quality and maintainability',
      'Backend Solution Implementation - Supporting senior developers in backend development'
    ]
  },
  {
    id: 3,
    company: 'Czech Technical University Prague',
    position: 'Software Engineering Student',
    startDate: new Date(2022, 8), // Sep 2022
    endDate: null, // běží
    get period() {
      const from = formatDate(this.startDate);
      const to = this.endDate ? formatDate(this.endDate) : 'Present';
      return `${from} – ${to}`;
    },
    get duration() {
      return calculateDuration(this.startDate, this.endDate);
    },
    location: 'Prague, Czech Republic',
    type: 'Education',
    description:
      "Currently pursuing Bachelor's Degree in Software Engineering with focus on practical programming skills and software development methodologies.",
    achievements: [
      'Academic Projects: Completed multiple software development projects including web applications and mobile apps',
      'Object-Oriented Programming: Mastered OOP principles through practical projects like ASCII Art Generator using encapsulation, inheritance, and polymorphism',
      'Modern Development Practices: Learned clean architecture, design patterns, and best practices for maintainable code',
      'Team Collaboration: Worked on team projects using agile methodologies and version control systems',
      'Multi-language Programming: Gained experience in Java, Kotlin, C/C++, Scala, and modern web technologies'
    ],
    technologies: ['Java', 'Kotlin', 'C/C++', 'Scala', 'Android SDK', 'Jetpack Compose', 'Git'],
    projects: [
      'Anketa CTU - Web-based course evaluation platform improvement project',
      'ASCII Art Generator - Console-based application demonstrating OOP principles',
      'Android Mobile App - Kotlin application using Jetpack Compose and modern UI components'
    ]
  }
];

export default experiences;
