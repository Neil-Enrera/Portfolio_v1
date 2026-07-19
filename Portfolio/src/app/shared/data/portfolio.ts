export const portfolio = {
  name: 'Neil Andrei Enrera',
  tagline: 'Full Stack Developer',
  heroHeadline: 'Transforming Business Processes Into Scalable Digital Systems',
  heroSubtext: 'Full Stack Developer focused on designing and building efficient business solutions through system analysis, architecture planning, and modern web technologies.',

  about: {
    objective: 'BS Information Technology student with experience in software development, system analysis, database management, and workflow optimization. Passionate about transforming manual processes into efficient digital solutions.',
    details: 'Experienced in designing business systems, mobile applications, embedded system projects, and database-driven platforms. I approach every project by first understanding the underlying business processes, identifying pain points, and then designing solutions that scale. Passionate about leveraging AI and agentic workflows to accelerate development and build smarter systems.'
  },

  expertise: [
    {
      title: 'Business Process Analysis',
      description: 'Identifying inefficiencies and designing optimized workflows that align with business goals and operational requirements.',
      icon: 'chart'
    },
    {
      title: 'System Architecture',
      description: 'Planning scalable solutions before development begins, ensuring maintainable and extensible system designs.',
      icon: 'layers'
    },
    {
      title: 'Full Stack Development',
      description: 'Building complete applications from frontend to backend with modern frameworks, APIs, and database integration.',
      icon: 'code'
    },
    {
      title: 'Database Design',
      description: 'Designing efficient and maintainable data structures with proper normalization, indexing, and query optimization.',
      icon: 'database'
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and user-friendly interfaces that prioritize user experience and accessibility.',
      icon: 'palette'
    },
    {
      title: 'Technical Documentation',
      description: 'Producing clear diagrams, workflows, and system specifications that bridge business requirements and technical implementation.',
      icon: 'fileText'
    },
    {
      title: 'AI & Agentic Development',
      description: 'Leveraging AI tools and agentic coding workflows to accelerate development, automate repetitive tasks, and build intelligent features.',
      icon: 'cpu'
    }
  ],

  skills: {
    frontend: ['Angular', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Bootstrap', 'Responsive Design'],
    backend: ['PHP', 'Node.js', 'REST APIs', 'Authentication Systems', 'CRUD Operations'],
    database: ['MySQL', 'SQLite', 'Database Modeling', 'Normalization', 'Query Optimization'],
    tools: ['GitHub', 'VS Code', 'XAMPP', 'Figma', 'Cisco Packet Tracer', 'Android Studio'],
    analysis: ['Use Cases', 'Activity Diagrams', 'Data Flow Diagrams', 'ERD', 'System Architecture', 'Process Mapping', 'Wireframing'],
    ai: ['Prompt Engineering', 'Agentic Workflows', 'AI-Assisted Development', 'Vibe Coding', 'AI Integration']
  },

  projects: [
    {
      id: 1,
      title: 'Web-Based Tailoring Order Management System',
      organization: 'JDE Work of Our Hands',
      role: 'Lead Developer',
      category: 'Business Management System',
      image: 'images/projects/tailoring-admin-dashboard.png',
      summary: 'A comprehensive order management platform that digitizes the entire tailoring business workflow.',
      problem: 'The tailoring business relied on manual paper-based records for appointments, orders, payments, and customer communication. This led to lost orders, scheduling conflicts, delayed deliveries, and difficulty tracking business performance.',
      solution: 'Designed and developed a web-based system that centralizes all business operations into a single platform, automating appointment scheduling, order tracking, payment monitoring, and customer communication.',
      processFlow: [
        'Customer inquiry received via system',
        'Appointment scheduled with available tailor',
        'Order details captured with measurements and preferences',   
        'Production status tracked through each stage',
        'Payment recorded and monitored',
        'Customer notified upon completion'
      ],
      architecture: 'LAMP stack (Linux, Apache, MySQL, PHP) with responsive Bootstrap frontend. MVC architecture pattern with modular component design.',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'HTML/CSS', 'JavaScript', 'Apache'],
      features: [
        'Appointment scheduling with calendar integration',
        'Order tracking with production status updates',
        'Payment monitoring with receipt generation',
        'Customer communication portal',
        'Administrative dashboard with analytics',
        'Business workflow optimization tools'
      ],
      lessonsLearned: 'Understanding the tailoring workflow deeply was crucial. The biggest challenge was mapping the non-linear, multi-stage production process into a structured digital format while maintaining flexibility for unexpected changes.',
      gallery: [
        'images/projects/tailoring-admin-dashboard.png',
        'images/projects/tailoring/admin-1.png',
        'images/projects/tailoring/admin-2.png',
        'images/projects/tailoring/admin-3.png',
        'images/projects/tailoring/admin-4.png',
        'images/projects/tailoring/admin-5.png',
        'images/projects/tailoring/admin-6.png',
        'images/projects/tailoring/admin-7.png',
        'images/projects/tailoring/admin-8.png',
        'images/projects/tailoring/admin-9.png',
        'images/projects/tailoring/admin-10.png',
        'images/projects/tailoring/admin-11.png',
        'images/projects/tailoring/admin-12.png',
        'images/projects/tailoring/user-1.png',
        'images/projects/tailoring/user-2.png',
        'images/projects/tailoring/user-3.png',
        'images/projects/tailoring/user-4.png',
        'images/projects/tailoring/user-5.png',
        'images/projects/tailoring/user-6.png',
        'images/projects/tailoring/user-7.png',
        'images/projects/tailoring/user-8.png',
        'images/projects/tailoring/user-9.png',
        'images/projects/tailoring/user-10.png',
        'images/projects/tailoring/user-11.png',
        'images/projects/tailoring/user-12.png',
        'images/projects/tailoring/user-13.png',
        'images/projects/tailoring/user-14.png',
        'images/projects/tailoring/user-15.png',
        'images/projects/tailoring/user-16.png',
        'images/projects/tailoring/user-17.png',
        'images/projects/tailoring/user-18.png',
        'images/projects/tailoring/user-19.png',
        'images/projects/tailoring/user-20.png',
        'images/projects/tailoring/user-21.png'
      ]
    },
    {
      id: 2,
      title: 'CashTrack: Expense Tracker',
      role: 'Mobile Application Developer',
      category: 'Personal Finance Application',
      image: 'images/projects/cash-track-dashboard.png',
      summary: 'A personal finance management app that helps users track expenses and manage budgets.',
      problem: 'Individuals lack simple, effective tools to track daily expenses and maintain budget discipline, leading to poor financial management.',
      solution: 'Created a mobile expense tracking application with data visualization, budget management, and financial monitoring features.',
      architecture: 'Clean architecture with local-first data storage. Offline-capable with periodic sync.',
      technologies: ['Android Studio', 'Java', 'SQLite', 'MPAndroidChart'],
      features: [
        'Expense tracking with categories',
        'Financial data visualization and charts',
        'Budget management with alerts',
        'Monthly spending reports'
      ],
      lessonsLearned: 'Data visualization significantly improves user engagement with financial data. Simple, intuitive inputs reduce friction in daily expense logging.',
      gallery: [
        'images/projects/cash-track-dashboard.png',
        'images/projects/cash-track/1.png',
        'images/projects/cash-track/2.png',
        'images/projects/cash-track/3.png',
        'images/projects/cash-track/4.png',
        'images/projects/cash-track/5.png',
        'images/projects/cash-track/6.png',
        'images/projects/cash-track/7.png',
        'images/projects/cash-track/8.png'
      ]
    },
    {
      id: 4,
      title: 'DIY Seismic Monitor',
      organization: 'Earthquake Detection for Establishments',
      role: 'Embedded Systems Developer',
      category: 'Embedded System',
      image: 'images/projects/seismic-monitor-system.png',
      summary: 'An affordable earthquake detection system combining hardware sensors with software monitoring.',
      problem: 'Small establishments lack access to affordable earthquake detection and monitoring systems to provide early warnings.',
      solution: 'Built a DIY seismic monitoring system using cost-effective sensors integrated with custom software for real-time detection and alerts.',
      architecture: 'Sensor data acquisition layer → Microcontroller processing → Alert/notification system. Hardware-software integrated design.',
      technologies: ['Arduino', 'C++', 'Sensors', 'Embedded Systems'],
      features: [      
        'Sensor integration for vibration detection',
        'Real-time monitoring and analysis',
        'Alert notification system',
        'Hardware and software development'
      ],
      lessonsLearned: 'Hardware-software integration requires careful consideration of signal processing, noise filtering, and real-time response requirements.',
      gallery: [
        'images/projects/seismic-monitor-system.png',
        'images/projects/seismic-monitor/1.jpg',
        'images/projects/seismic-monitor/2.jpg'
      ]
    },
    {
      id: 5,
      title: 'Here Pawr You',
      organization: 'Adoption and Lost & Found System for Stray Animals',
      role: 'Developer',
      category: 'Database Management System',
      image: '',
      summary: 'A community platform connecting stray animals with adopters and reuniting lost pets with owners.',
      problem: 'Stray animals lack a centralized platform for adoption facilitation and lost-and-found reporting, making it difficult for communities to coordinate care.',
      solution: 'Developed a database-driven web platform with comprehensive user management, animal profiles, and matching algorithms.',
      architecture: 'Relational database design with normalized schema. Web-based interface with role-based access control.',
      technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
      features: [
        'Animal adoption management system',
        'Lost & found tracking and matching',
        'Comprehensive database design',
        'User management and authentication',
        'Community support platform'
      ],
      lessonsLearned: 'Database design is critical for systems with complex relationships. Well-normalized schemas enable flexible querying and reporting capabilities.',
      gallery: []
    }
  ],

  systemDesigns: [
    {
      title: 'Entity Relationship Diagrams',
      description: 'Comprehensive ERDs showing database structure, relationships, and normalization for business systems.',
      items: ['Logical data models', 'Physical schema designs', 'Relationship mapping', 'Normalization documentation']
    },
    {
      title: 'System Architecture Diagrams',
      description: 'High-level architecture views showing component interactions, data flow, and system boundaries.',
      items: ['Layered architecture designs', 'Component interaction diagrams', 'Deployment topology', 'API structure maps']
    },
    {
      title: 'Workflow & Process Maps',
      description: 'Detailed process flows showing business operations, decision points, and system interactions.',
      items: ['Business process flows', 'User journey maps', 'System interaction diagrams', 'Decision trees']
    },
    {
      title: 'User Flow & Wireframes',
      description: 'User-centered design artifacts showing navigation patterns, screen layouts, and interaction design.',
      items: ['User flow diagrams', 'Wireframe prototypes', 'Screen mockups', 'Navigation maps']
    },
    {
      title: 'Use Case & Requirements',
      description: 'Structured requirements documentation capturing functional needs, system boundaries, and actor interactions.',
      items: ['Use case specifications', 'Activity diagrams', 'Requirement traceability', 'Stakeholder analysis']
    }
  ],

  certifications: [
    {
      title: 'CCNA (Cisco Certified Network Associate)',
      issuer: 'Cisco Networking Academy',
      image: 'images/certifications/Enrera_Neil_Networking_Basics(CiscoNetworkingAcademy)_page-0001.jpg',
      description: 'Networking fundamentals, routing, switching, and network security.'
    },
    {
      title: 'Alibaba Cloud Big Data Associate',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-big-data.png',
      description: 'Big data processing, storage, and analytics on cloud infrastructure.'
    },
    {
      title: 'ECS Fundamentals',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-ecs.png',
      description: 'Elastic Compute Service configuration and management.'
    },
    {
      title: 'SLB Fundamentals',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-slb.png',
      description: 'Server Load Balancer implementation and optimization.'
    },
    {
      title: 'Auto Scaling Fundamentals',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-auto-scaling.png',
      description: 'Automated scaling strategies for cloud resources.'
    },
    {
      title: 'OSS Fundamentals',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-oss.png',
      description: 'Object Storage Service architecture and best practices.'
    },
    {
      title: 'ApsaraDB RDS Fundamentals',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-rds.png',
      description: 'Relational Database Service management on Alibaba Cloud.'
    },
    {
      title: 'IoT Foundations: Operating Systems Fundamentals',
      issuer: 'IoT Academy',
      image: 'images/certifications/CertificateOfCompletion_IoT Foundations Operating Systems Fundamentals_pages-to-jpg-0001.jpg',
      description: 'Operating system concepts for IoT device development.'
    },
    {
      title: 'Vibe Code and Agentic Coding',
      issuer: 'AI Seminar',
      image: 'images/certifications/vibe-code-agentic-coding.png',
      description: 'Modern AI-assisted development techniques including agentic workflows, prompt engineering, and AI-powered coding practices.'
    }
  ],

  experience: [
    {
      title: 'Technical Support & Customer Communication',
      description: 'Handled customer inquiries and chat support while maintaining professional communication and problem resolution. Developed strong client-facing skills and technical troubleshooting abilities.'
    },
    {
      title: 'Web & Mobile Development Projects',
      description: 'Designed and developed academic and commissioned systems focused on solving real-world operational challenges. Led full-cycle development from requirements gathering to deployment.'
    }
  ],

  resume: {
    file: '/resume/Neil_Enrera_CV.pdf',
    label: 'View Resume'
  },

  contact: {
    email: 'neilandreienrera@gmail.com',
    github: 'https://github.com/NeilEnrera',
    linkedin: 'https://www.linkedin.com/in/neil-andrei-enrera-41339b288/',
    facebook: 'https://www.facebook.com/neilxbzjsj/',
    formAction: ''
  }
};
