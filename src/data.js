
export const skills = [
  {
    title: "Backend",
    items: "Java, Spring Boot, Spring Security, JPA, Hibernate, OAuth2, Microservices, Keycloak",
  },
  {
    title: "Frontend",
    items: "Angular, React, TypeScript, Tailwind CSS, HTML, CSS",
  },
  {
    title: "Cloud & Computing",
    items: "Aws Plateform, Google Cloud",
  },
  {
    title: "Database & Tools",
    items: "PostgreSQL, Oracle, Firebase, Git, Docker, REST APIs",
  },
];

export const projects = [
  {
    title: "Microservices-based e-commerce platform",
    desc: "E-commerce platform designed on a Spring Boot microservices architecture with React frontend, incorporating API Gateway patterns, Kafka event streaming, JWT-based security, Stripe payments, and comprehensive monitoring through ELK, Zipkin, and Grafana.",
    stack: [
      'Spring Boot',
      'Spring Cloud',
      'Microservices',
      'API Gateway',
      'Service Discovery',
      'JWT Authentication',
      'Resilience4j',
      'Apache Kafka',
      'Stripe API',
      'ELK Stack',
      'Zipkin',
      'Prometheus',
      'Grafana',
      'React',
      'CSS'
    ],
  },
  {
    title: "Intern Management Desktop App",
    desc: "Automating the workflow of intern registration with Electron.js. This app replaces messy paperwork with logic-driven dynamic forms and instantly generates all necessary compliance documents in Word, Excel, or PDF formats.",
    stack: ['Electron.js', 'Node.js', 'Word/PDF/Excel'],
  },
  {
    title: "IntelliJ Locale Key Explorer",
    desc: "IntelliJ plugin that reads JSON locale files, displays key chains with their values in a table, allows developers to search by keys or values, and copies full paths to the clipboard with a single click — simplifying locale management and built with Kotlin, IntelliJ SDK, and Gradle.",
    stack: ["Kotlin", "IntelliJ Platform SDK", "Gradle", "ToolWindowFactory", "Action", "MouseAdapter"],
  },
  {
    title: "Warranty Management Module for Odoo",
    desc: "A custom Odoo module designed to centralize warranty tracking and claim management for both supplier and customer products. It automates warranty expiration monitoring, claims validation, and notifications, ensuring better control, traceability, and communication across the system.",
    stack: ["Odoo (Custom Module Development)", "Python", "PostgreSQL", "Odoo ORM", "Odoo Mail / Notifications", "Odoo Product & Invoicing Modules Integration"]
  },
];

export const experience = [
  {
    title: 'E-Wallet & E-Banking Integration Platform',
    role: 'Full Stack Engineer',
    stack: [
      'Spring Boot',
      'Microservices',
      'REST APIs',
      'External API Integration',
      'Oracle Database',
      'React',
      'Java',
      'SQL',
      'Postman',
      'Role-Based Access Control',
      'E-Banking Systems',
      'Financial Transaction Processing'
    ],
    company: 'Adria Business & Technology',
    type: 'Internship',
    description: `
    Enterprise e-wallet platform built with Spring Boot microservices, React, and Oracle, integrating external banking operators, role & plafond management, and real e-banking transaction flows.
    `,
    Highlights: [
    "Enterprise e-wallet platform integrated with an e-banking ecosystem using Spring Boot microservices",
    "External operator API integrations and extended shared transaction flows via inherited services",
    "Role and plafond management across client, admin, and banking platforms",
    "Oracle DB integration with structured SQL scripts and React-based frontend features",
    "On-site deployment, testing, bug fixing, and close collaboration with finance and e-banking teams"
  ],
    date: 'Feb 2024 - Jul 2024 · 6 mounths → Full-Time (Jul 2024 – Present)',
    adresse: 'Casablanca-Settat, Morocco',
    icon: '/adria_logo.png'
  },
  {
    title: 'Scalable E-Commerce Platform',
    role: 'Full Stack Engineer',
    stack: [
      'Spring Boot',
      'Spring Cloud',
      'Microservices',
      'API Gateway',
      'Service Discovery',
      'JWT Authentication',
      'Resilience4j',
      'Apache Kafka',
      'Stripe API',
      'ELK Stack',
      'Zipkin',
      'Prometheus',
      'Grafana',
      'React',
      'CSS'
    ],
    company: 'Ecole Nationale des Sciences Appliquées de Khouribga',
    type: 'Internship',
    description: `
    Microservices-based e-commerce platform using Spring Boot & React, featuring API Gateway architecture, Kafka messaging, JWT security, Stripe payments, and full observability with ELK, Zipkin, and Grafana.
    `,
    Highlights: [
    "Spring Boot microservices architecture integrated with an e-banking ecosystem",
    "External operator API integrations and shared transaction flow extensions",
    "Role and plafond management across client, admin, and banking platforms",
    "Oracle database integration with structured SQL scripts and React frontend features",
    "On-site deployment, testing, and collaboration with finance and e-banking stakeholders"
  ]
  ,
    date: 'Jul 2023 - Aug 2023 · 2 mounths',
    adresse: 'Khouribga, Béni Mellal-Khénifra, Morocco',
    icon: '/ensa_logo.png'
  },
  {
    title: 'Intern Management Desktop App',
    role: 'Full Stack Engineer',
    stack: ['Electron.js', 'Node.js', 'Word/PDF/Excel'],
    company: 'OCP Group',
    type: 'Internship',
    description: `
    Desktop app that automates intern registration using dynamic forms and generates Word / Excel / PDF documents from structured data — built with Electron.js.
    `,
    Highlights: [
      'Cross-platform desktop application (Electron.js)',
      'Form-driven UI with structured data validation',
      'Automated document generation (Word, Excel, PDF)',
      'Focus on real business workflows and productivity',
      'Built and delivered during a professional internship'
    ],
    date: 'Aug 2022 · 1 mounth',
    adresse: 'Khouribga, Béni Mellal-Khénifra, Morocco',
    icon: '/ocp_logo.jpg'
  }
]