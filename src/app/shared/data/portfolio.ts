export const portfolio = {
  name: 'Neil Andrei M. Enrera',
  tagline: 'BS Information Technology | Web, Mobile & IoT Developer',
  location: 'City of San Jose Del Monte, Bulacan',
  phone: '09476141605',
  email: 'andreienrera@gmail.com',
  heroHeadline: 'Building Practical Digital Systems, Web & Mobile Applications, and IoT Solutions',
  heroSubtext: 'BS Information Technology student at National University – Fairview (Dean\'s Lister 2024) specializing in Mobile and Internet Technologies. Experienced in client-commissioned systems, small business order support, database modeling, and full-cycle development with Angular, Laravel, PHP, and IoT integration.',

  about: {
    objective: 'BS Information Technology student specializing in Mobile and Internet Technologies with hands-on experience developing web and mobile applications, information management systems, and IoT-integrated solutions.',
    details: 'I bridge practical business workflows with modern technology. My background combines real-world small business customer support and order coordination with full-cycle software engineering—from commissioned client applications (CashTrack) and capstone enterprise solutions (JDE Tailoring & Barangay San Manuel IoT Kiosk System) to embedded sensor prototypes. Seeking an IT or Software Engineering internship where I can deliver immediate value through technical problem-solving and dependable collaboration.'
  },

  education: {
    institution: 'National University – Fairview',
    degree: 'BS Information Technology with Specialization in Mobile and Internet Technologies',
    status: 'Present',
    honor: "Dean's Lister 2024",
    coursework: ['Data Structures & Algorithms', 'Software Engineering', 'Operating Systems', 'Database Systems', 'Web & Mobile Development', 'Cloud Computing'],
    previous: [
      { school: 'Our Lady of Fatima University', track: 'STEM (Science, Technology, Engineering, and Mathematics)', period: '2019 – 2022' },
      { school: 'Our Lord of Mercy School of Caloocan Inc.', track: 'Junior High School', period: '2017 – 2020' }
    ]
  },

  expertise: [
    {
      title: 'Business Process Analysis',
      description: 'Dissecting manual operational workflows, identifying bottlenecks, and designing optimized digital processes that scale with business goals.',
      icon: 'chart'
    },
    {
      title: 'Full Stack & Web Development',
      description: 'Building end-to-end applications from responsive frontend interfaces (Angular, React) to robust backend APIs (Laravel, PHP, Node.js).',
      icon: 'code'
    },
    {
      title: 'Database Architecture & Modeling',
      description: 'Designing normalized relational schemas (MySQL 3NF, SQLite), establishing foreign key integrity, and optimizing queries.',
      icon: 'database'
    },
    {
      title: 'Mobile Application Development',
      description: 'Developing offline-first Android applications in Java/XML with structured SQLite local storage and clean user flows.',
      icon: 'layers'
    },
    {
      title: 'IoT & Hardware-Software Systems',
      description: 'Integrating microcontrollers, RFID authentication, QR verification, and vibration sensors with web platforms and kiosks.',
      icon: 'cpu'
    },
    {
      title: 'Client Support & Order Operations',
      description: 'Managing customer order queues, tracking delivery status, and providing empathetic, professional communication across digital channels.',
      icon: 'fileText'
    },
    {
      title: 'AI & Engineering Workflows',
      description: 'Leveraging AI-assisted development tools, agentic coding practices, and prompt engineering to accelerate prototyping and problem solving.',
      icon: 'cpu'
    }
  ],

  skills: {
    languages: ['JavaScript', 'TypeScript', 'PHP', 'SQL', 'Java', 'C++'],
    frameworks: ['Angular', 'React', 'Laravel', 'Node.js', 'Express.js'],
    database: ['MySQL', 'SQLite', 'Database Modeling', 'Schema Normalization (3NF)', 'Query Optimization'],
    web: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'RESTful APIs', 'Responsive Design'],
    toolsAndCloud: ['Git', 'GitHub', 'Docker', 'AWS', 'Alibaba Cloud', 'Linux CLI', 'Android Studio', 'Figma', 'VS Code', 'Postman'],
    hardwareAndIoT: ['IoT Systems', 'RFID Authentication', 'Sensors & Microcontrollers', 'Embedded Systems'],
    operations: ['Customer Communication', 'Order Management & Delivery Tracking', 'Requirements Discovery'],
    ai: ['AI-Assisted Development', 'Agentic Coding Workflows', 'Prompt Engineering', 'LLM Integration']
  },

  projects: [
    {
      id: 1,
      title: 'Information Management System with IoT-Assisted Document Request Kiosk',
      organization: 'Barangay San Manuel',
      role: 'Lead Developer',
      category: 'E-Governance & IoT Management',
      projectType: 'Capstone Project / Active Development',
      image: 'images/projects/san-manuel/san-manuel-dashboard.png',
      summary: 'A comprehensive web-based Barangay Information Management System integrated with an IoT-powered self-service kiosk for automated resident document requests.',
      githubUrl: 'https://github.com/Neil-Enrera',
      liveUrl: '',
      metrics: [
        'RFID-Based Resident Authentication',
        'QR Code Document Verification',
        'Automated Certificate & Clearance Processing',
        'Admin Dashboard with Demographic Analytics'
      ],
      clientEngagement: {
        discovery: 'Collaborated directly with Barangay San Manuel officials to identify long queue times and manual paperwork bottlenecks during clearance and document issuance.',
        revision: 'Designed an IoT self-service kiosk workflow supporting RFID card tap and verification to streamline resident verification before administrative approval.',
        outcome: 'Architected with Angular, MySQL, and RESTful APIs with role-based administrative dashboards for barangay governance.'
      },
      problem: 'Barangay San Manuel relied on manual paper-based filing cabinets and physical logbooks for resident records, clearance requests, and blotter case tracking—causing lengthy queues for residents and manual reporting overhead.',
      solution: 'Developed a modern web platform integrated with an IoT kiosk, enabling RFID resident authentication, instant online document requests (Clearance, Indigency, Residency), and administrative reporting.',
      processFlow: [
        'Resident taps RFID card at kiosk or submits online request',
        'Service / document request processed via RESTful API',
        'Barangay official verifies request in admin dashboard',
        'Official certificate generated and verified',
        'Payment/release logged and recorded in MySQL database',
        'Blotter incidents and community records maintained'
      ],
      architecture: 'Angular frontend interface communicating via RESTful APIs with normalized MySQL database (3NF) and hardware RFID scanner integration.',
      technologies: ['Angular', 'TypeScript', 'MySQL', 'RESTful APIs', 'RFID', 'IoT'],
      features: [
        'IoT self-service kiosk with RFID tap authentication',
        'Automated document issuance (Barangay Clearance, Certificate of Indigency, Residency)',
        'Anti-tamper QR code verification on generated certificates',
        'Blotter incident tracking, hearing schedules, and dispute status monitoring',
        'Role-based access control for Barangay Captain, Secretary, and Staff',
        'Demographic analytics and monthly request reporting dashboards'
      ],
      lessonsLearned: 'Integrating hardware RFID scanners with a modern web frontend required careful asynchronous state management and secure token verification across the API layer.',
      gallery: [
        'images/projects/san-manuel/san-manuel-dashboard.png',
        'images/projects/san-manuel/kiosk-1.png',
        'images/projects/san-manuel/kiosk-2.png',
        'images/projects/san-manuel/kiosk-3.png',
        'images/projects/san-manuel/kiosk-4.png',
        'images/projects/san-manuel/kiosk-5.png',
        'images/projects/san-manuel/kiosk-6.png',
        'images/projects/san-manuel/kiosk-7.png',
        'images/projects/san-manuel/kiosk-8.png',
        'images/projects/san-manuel/kiosk-9.png',
        'images/projects/san-manuel/kiosk-10.png',
        'images/projects/san-manuel/kiosk-11.png',
        'images/projects/san-manuel/kiosk-12.png',
        'images/projects/san-manuel/kiosk-13.png',
        'images/projects/san-manuel/kiosk-14.png',
        'images/projects/san-manuel/kiosk-15.png',
        'images/projects/san-manuel/kiosk-16.png',
        'images/projects/san-manuel/kiosk-17.png',
        'images/projects/san-manuel/admin-1.png',
        'images/projects/san-manuel/admin-2.png',
        'images/projects/san-manuel/admin-3.png',
        'images/projects/san-manuel/admin-4.png',
        'images/projects/san-manuel/admin-5.png',
        'images/projects/san-manuel/admin-6.png',
        'images/projects/san-manuel/admin-7.png',
        'images/projects/san-manuel/admin-8.png',
        'images/projects/san-manuel/admin-9.png',
        'images/projects/san-manuel/admin-10.png',
        'images/projects/san-manuel/admin-11.png',
        'images/projects/san-manuel/admin-12.png',
        'images/projects/san-manuel/admin-13.png',
        'images/projects/san-manuel/admin-14.png',
        'images/projects/san-manuel/admin-15.png',
        'images/projects/san-manuel/admin-16.png',
        'images/projects/san-manuel/admin-17.png',
        'images/projects/san-manuel/admin-18.png',
        'images/projects/san-manuel/admin-19.png',
        'images/projects/san-manuel/admin-20.png',
        'images/projects/san-manuel/admin-21.png',
        'images/projects/san-manuel/admin-22.png',
        'images/projects/san-manuel/admin-23.png',
        'images/projects/san-manuel/admin-24.png',
        'images/projects/san-manuel/online-1.png',
        'images/projects/san-manuel/online-2.png',
        'images/projects/san-manuel/online-3.png',
        'images/projects/san-manuel/online-4.png',
        'images/projects/san-manuel/online-5.png',
        'images/projects/san-manuel/online-6.png',
        'images/projects/san-manuel/online-7.png',
        'images/projects/san-manuel/online-8.png',
        'images/projects/san-manuel/online-9.png'
      ]
    },
    {
      id: 2,
      title: 'Web-Based Tailoring Order Management System',
      organization: 'JDE Work of Our Hands',
      role: 'Lead Developer',
      category: 'Enterprise Management System',
      projectType: 'Capstone Project',
      image: 'images/projects/tailoring-admin-dashboard.png',
      summary: 'A complete enterprise order management and workflow automation platform that digitizes garment tailoring operations.',
      githubUrl: 'https://github.com/Neil-Enrera',
      liveUrl: '',
      metrics: [
        '100% Digitized Order Lifecycle',
        '12+ Normalized DB Entities (3NF)',
        '6-Stage Production State Tracking'
      ],
      clientEngagement: {
        discovery: 'Conducted on-site workflow analysis with the business owner and tailors to map physical paper order receipts, measurement cards, and production queues.',
        revision: 'When the client requested that future measurement adjustments must not alter past order records, engineered an immutable measurement snapshot schema.',
        outcome: 'Digitized the entire tailoring workflow and delivered hands-on system walkthroughs ensuring non-technical staff could operate it seamlessly.'
      },
      problem: 'The business struggled with manual paper records, leading to lost customer measurements, scheduling conflicts, delayed order fulfillment, and zero visibility into daily production bottlenecks.',
      solution: 'Engineered a centralized web platform automating the entire lifecycle—from appointment booking and customer measurement profiling to multi-stage production tracking and automated invoicing.',
      processFlow: [
        'Customer inquiry & measurement capture',
        'Appointment scheduling with conflict detection',
        'Work order creation with garment specifications',
        '6-stage production tracking (Cutting → Stitching → QA → Ready)',
        'Payment recording with receipt generation',
        'Automated customer notification on order completion'
      ],
      architecture: 'MVC architecture pattern using PHP, MySQL (3NF relational schema), and responsive Bootstrap/CSS frontend with role-based authentication (Admin vs. Tailor vs. Client).',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5/CSS3', 'Apache'],
      features: [
        'Real-time appointment scheduling with calendar view',
        'Granular order tracking with 6-stage status transitions',
        'Measurement snapshot versioning to preserve past order history',
        'Payment recording with PDF invoice generation',
        'Administrative analytics dashboard for sales & order volume',
        'Role-based access control for administrative staff and tailors'
      ],
      lessonsLearned: 'Designing the measurement snapshot system was critical: updating a customer’s current measurements must not corrupt previous historical completed orders. Implementing immutable order measurement snapshots solved this architectural challenge.',
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
      id: 3,
      title: 'CashTrack: Expenses Tracker',
      organization: 'Personal Finance Project',
      role: 'Mobile Application Developer',
      category: 'Personal Finance Application',
      projectType: 'Commissioned Project',
      image: 'images/projects/cash-track-dashboard.png',
      summary: 'A mobile personal finance application developed for a client to efficiently track daily expenses, manage income, and monitor budget categories.',
      githubUrl: 'https://github.com/Neil-Enrera',
      liveUrl: '',
      metrics: [
        'Commissioned for Private Client',
        'Offline-First Local SQLite Database',
        'Category Budgeting & Visual MPAndroidChart'
      ],
      clientEngagement: {
        discovery: 'Interviewed the client to identify friction points in daily expense tracking and budget compliance.',
        revision: 'Refined the user interface to support rapid 2-tap transaction logging and instant visual budget progress bars.',
        outcome: 'Delivered an offline-capable Android APK tailored to the client’s custom spending categories and budgeting targets.'
      },
      problem: 'The client needed a simple, lightweight mobile tool to track personal income, expenses, and savings without requiring constant internet access or dealing with complex multi-screen navigation.',
      solution: 'Built a responsive Android application with structured SQLite local storage, interactive visual charts, expense categorization, and budget threshold alerts.',
      architecture: 'Clean architecture with local SQLite database integration, DAO pattern for structured data access, and asynchronous UI updates.',
      technologies: ['Android Studio', 'Java', 'SQLite', 'MPAndroidChart', 'XML Layouts'],
      features: [
        'Fast one-tap expense logging with custom categorization',
        'Interactive spending charts and monthly trend breakdowns',
        'Budget limit alerts with real-time percentage indicators',
        'Complete offline functionality with secure local storage'
      ],
      lessonsLearned: 'Prioritizing low input friction was vital for user retention. Simplifying the transaction entry flow to two taps noticeably improved logging frequency during testing.',
      gallery: [
        'images/projects/cash-track-dashboard.png',
        'images/projects/cash-track/1.png',
        'images/projects/cash-track/2.png',
        'images/projects/cash-track/3.png',
        'images/projects/cash-track/5.png',
        'images/projects/cash-track/7.png'
      ]
    },
    {
      id: 4,
      title: 'DIY Seismic Monitor: Earthquake Detector for Establishments',
      organization: 'Establishment Safety Initiative',
      role: 'Embedded Systems Project Manager',
      category: 'IoT & Embedded Systems',
      projectType: 'Academic Project',
      image: 'images/projects/seismic-monitor-system.png',
      summary: 'An affordable earthquake detection and early-warning alert system combining hardware vibration sensors with microcontroller real-time monitoring software.',
      githubUrl: 'https://github.com/Neil-Enrera',
      liveUrl: '',
      metrics: [
        'Sub-second Real-time Vibration Detection',
        'Low-cost Hardware Sensor Integration',
        'Automated Visual & Audio Warning Trigger'
      ],
      problem: 'Small commercial establishments and educational facilities often lack access to expensive commercial seismic warning systems for immediate localized alerts.',
      solution: 'Constructed an integrated hardware-software monitoring prototype using microcontroller sensor acquisition, digital filtering, and real-time visual/auditory alarms.',
      architecture: 'Sensor signal acquisition layer (Piezo/Accelerometer) → Microcontroller ADC processing with threshold filtering → Real-time alert dispatch system.',
      technologies: ['C++', 'Arduino', 'Vibration Sensors', 'Embedded Systems', 'Hardware Interfacing'],
      features: [
        'Continuous vibration signal sampling and noise threshold filtering',
        'Real-time threshold breach detection with visual status LED indicators',
        'Instantaneous audible buzzer warning for occupant evacuation',
        'Fail-safe hardware-software loop designed for continuous uptime'
      ],
      lessonsLearned: 'Managing environmental noise (accidental floor vibrations vs. actual ground tremors) required implementing a sliding-window averaging filter to prevent false positive alarms.',
      gallery: [
        'images/projects/seismic-monitor-system.png',
        'images/projects/seismic-monitor/1.jpg',
        'images/projects/seismic-monitor/2.jpg'
      ]
    },
    {
      id: 5,
      title: 'Here Pawr You: Pet Adoption & Rescue Platform',
      organization: 'Community Animal Welfare',
      role: 'Developer',
      category: 'Database Management Platform',
      projectType: 'Academic Project',
      image: '',
      summary: 'A community-driven web platform connecting animal shelters, pet adopters, and pet owners for adoption facilitation and lost-and-found tracking.',
      githubUrl: 'https://github.com/Neil-Enrera',
      liveUrl: '',
      metrics: [
        'Role-Based Shelter & Adopter Portals',
        'Multi-criteria Animal Matching Schema',
        'Community Lost & Found Incident Mapping'
      ],
      problem: 'Animal rescue initiatives lack centralized systems for cataloging rescued animals, tracking adoption statuses, and handling lost pet reports within local communities.',
      solution: 'Architected a normalized database-driven web platform with role-based authentication, pet profiling, adoption application workflows, and incident reporting.',
      architecture: 'Relational database architecture with normalized schemas (3NF), session-based RBAC, and modular PHP backend services.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'HTML5/CSS3'],
      features: [
        'Pet adoption directory with multi-attribute filtering (Age, Breed, Size, Medical Status)',
        'Adopter application submission and shelter review workflow',
        'Lost and found reporting with location details and photo uploads',
        'Role-based access control for shelter admins, adopters, and community users'
      ],
      lessonsLearned: 'Designing a flexible relationship schema between Pet Profiles, Shelter Organizations, and Multi-stage Adoption Applications reinforced the importance of foreign key constraints and transactional integrity.',
      gallery: []
    }
  ],

  systemDesigns: [
    {
      title: 'Entity Relationship Diagrams (ERD)',
      description: 'Detailed relational schemas (3NF) mapping primary keys, foreign keys, cardinality constraints, and relationship integrity.',
      items: ['Conceptual & logical data models', 'Physical schema definitions', 'Foreign key constraints & cascade rules', '3NF normalization documentation']
    },
    {
      title: 'System Architecture Diagrams',
      description: 'High-level component topology illustrating client-server interactions, data flow pipelines, and security perimeters.',
      items: ['Layered MVC & Clean Architecture', 'Client-to-API communication flows', 'Authentication & authorization layers', 'Component decoupling strategies']
    },
    {
      title: 'Workflow & Process Mapping',
      description: 'End-to-end operational mapping of business processes to identify inefficiencies and define automated state transitions.',
      items: ['Business process flows (BPMN)', 'State machine transition logic', 'User journey mapping', 'System decision trees']
    },
    {
      title: 'User Flow & Wireframing',
      description: 'Interaction blueprints designed in Figma to validate screen hierarchies, navigation patterns, and edge case flows before code.',
      items: ['Low and high-fidelity wireframes', 'Navigation structure maps', 'Interaction state specifications', 'Responsive layout blueprints']
    },
    {
      title: 'Use Case & Requirements Specs',
      description: 'Rigorous functional requirements and actor interaction diagrams bridging stakeholder needs with technical implementation.',
      items: ['Formal use case specifications', 'Activity & sequence diagrams', 'Requirement traceability matrices', 'Edge case & error handling specs']
    }
  ],

  certifications: [
    {
      title: 'CCNA: Networking Basics',
      issuer: 'Cisco Networking Academy',
      image: 'images/certifications/Enrera_Neil_Networking_Basics(CiscoNetworkingAcademy)_page-0001.jpg',
      description: 'Core networking architecture, IP addressing, subnetting, TCP/IP & OSI models, routing protocols, and network security fundamentals.'
    },
    {
      title: 'Alibaba Cloud Big Data Associate (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-big-data.png',
      description: 'Big data processing, storage, data pipelines, and analytics on distributed cloud infrastructure.'
    },
    {
      title: 'ECS (Elastic Compute Service) Fundamentals (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-ecs.png',
      description: 'Virtual server provisioning, instance lifecycle management, security group rules, and compute scaling.'
    },
    {
      title: 'SLB (Server Load Balancer) Fundamentals (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-slb.png',
      description: 'High-availability traffic distribution, listener configurations, health checks, and fault tolerance.'
    },
    {
      title: 'Auto Scaling Fundamentals (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-auto-scaling.png',
      description: 'Dynamic elasticity, automated scaling groups, scheduled policies, and infrastructure cost optimization.'
    },
    {
      title: 'OSS (Object Storage Service) Fundamentals (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-oss.png',
      description: 'Cloud object storage architecture, bucket access policies, lifecycle rules, and media asset hosting.'
    },
    {
      title: 'ApsaraDB RDS Fundamentals (2025)',
      issuer: 'Alibaba Cloud',
      image: 'images/certifications/alibaba-rds.png',
      description: 'Managed relational database service configuration, backup strategies, read-replicas, and MySQL instance tuning.'
    },
    {
      title: 'IoT Foundations: Operating Systems Fundamentals (2025)',
      issuer: 'IoT Academy',
      image: 'images/certifications/CertificateOfCompletion_IoT Foundations Operating Systems Fundamentals_pages-to-jpg-0001.jpg',
      description: 'Operating system principles, kernel processes, memory management, and hardware interfacing for embedded devices.'
    },
    {
      title: 'Modern AI-Assisted Engineering & Workflows',
      issuer: 'AI Developer Seminar',
      description: 'Professional AI-assisted development practices, agentic coding workflows, prompt engineering, and LLM-assisted system design.'
    }
  ],

  activities: [
    {
      organization: 'Codability Tech Student Organization (CTSO)',
      role: 'Member',
      description: 'Participated in IT workshops, seminars, technical events, and technology initiatives.'
    },
    {
      organization: 'VIBE CODE AND AGENTIC CODING Online Seminar',
      role: 'Participant',
      description: 'Attended a technical seminar on AI-assisted software development, modern coding workflows, and agentic programming concepts.'
    }
  ],

  experience: [
    {
      title: 'Online Order & Customer Support',
      period: 'May – July 2025',
      organization: 'Online Store / Small Business Operations (Remote)',
      description: 'Managed online customer inquiries via live chat and social messaging platforms, providing timely details on products, order status, and delivery tracking. Handled order updates, cancellations, and issue resolution politely to maintain positive customer satisfaction.'
    },
    {
      title: 'Systems & Mobile Application Developer',
      period: '2023 – Present',
      organization: 'Capstone & Commissioned Client Projects',
      description: 'Designed and engineered full-cycle systems for real clients and community stakeholders: the IoT-assisted Barangay San Manuel Information Kiosk System (Angular/MySQL), the JDE Tailoring Order Management System (PHP/MySQL), and the CashTrack mobile finance app (Android/SQLite).'
    }
  ],

  resume: {
    file: '/resume/Resume.pdf',
    label: 'View Resume (PDF)'
  },

  contact: {
    email: 'andreienrera@gmail.com',
    github: 'https://github.com/Neil-Enrera',
    linkedin: 'https://www.linkedin.com/in/neil-andrei-enrera-41339b288/',
    formAction: ''
  }
};
