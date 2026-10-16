export const portfolioData = {
  personal: {
    name: "Priyanshi Sakariya",
    title: "Web Developer Building Modern Websites and Practical Web Applications",
    headline: "Web Developer Building Modern Websites and Practical Web Applications",
    heroHeading: "Priyanshi Sakariya",
    heroRole: "Web Developer & Practical Solutions Engineer",
    heroBio: "I design and build responsive frontend interfaces, full-stack web applications, backend APIs, and database-connected solutions. Focused on clean code, dependable system architectures, and practical digital solutions for freelance clients and businesses.",
    focus: "Web Development • React.js • Python & REST APIs • Full-Stack Solutions",
    status: "Available for Freelance Projects",
    statusDetail: "Open for freelance projects, custom web apps & Q2 contracts",
    
    aboutBio1: "I am an MCA student at Sardar Vallabhbhai Global University, Ahmedabad, with a strong foundation in core computer science, database architectures, and practical web engineering. My journey centers on transforming real-world business needs into fast, responsive, and secure digital applications.",
    aboutBio2: "Through rigorous academic coursework and self-directed production-style projects, I have engineered full-stack applications with React.js, Python (FastAPI), Java (Spring Boot), Node.js, Express, and modern databases like MongoDB and MySQL. I enjoy working directly with clients to solve concrete software problems—from crafting high-converting landing pages to architecting robust REST APIs and automating business workflows.",
    
    location: "Ahmedabad, Gujarat, India",
    email: "priyanshisakariya89@gmail.com",
    phone: "+91 9773188083",
    whatsapp: "https://wa.me/919773188083?text=Hi%20Priyanshi%2C%20I%20would%20like%20to%20discuss%20a%20web%20development%20project.",
    github: "https://github.com/priyanshisakariya",
    linkedin: "https://linkedin.com/in/priyanshisakariya",
    canonicalUrl: "https://priyanshi-sakariya.netlify.app/",
    avatar: "/priyanshi-sakariya.jpg",
    
    // Two genuine resumes
    resumes: {
      python: {
        title: "Python Developer Resume",
        filename: "Priyanshi_Sakariya_Python_Developer_Resume.pdf",
        url: "/Priyanshi_Sakariya_Python_Developer_Resume.pdf",
        specialty: "FastAPI • Python 3 • REST APIs • SQLAlchemy • Database Design",
        highlights: [
          "Flight Crew Management System (FastAPI & Conflict Engine)",
          "SQLAlchemy 2.0 relational schema design across 5 core entities",
          "JWT bearer token authentication and Bcrypt password hashing",
          "Automated OpenAPI/Swagger UI documentation & test suites"
        ]
      },
      fullstack: {
        title: "Full Stack Developer Resume",
        filename: "Priyanshi_Sakariya_Full_Stack_Developer_Resume.pdf",
        url: "/Priyanshi_Sakariya_Full_Stack_Developer_Resume.pdf",
        specialty: "React.js • Node.js • Express • MongoDB • Spring Boot • MySQL",
        highlights: [
          "Smart Timetable Optimizer (MERN Stack: React, Node, Express, MongoDB)",
          "Campus Project (React.js, Spring Boot, JWT, RBAC, MySQL/PostgreSQL)",
          "Employee Management System (Spring Data JPA, Hibernate, MVC)",
          "Multi-role dashboards and secure file upload pipelines"
        ]
      }
    },
    // Backwards-compatible resume URL pointing to default fullstack
    resumePdfUrl: "/Priyanshi_Sakariya_Full_Stack_Developer_Resume.pdf",
    resumeFilename: "Priyanshi_Sakariya_Full_Stack_Developer_Resume.pdf"
  },

  stats: [
    { label: "MCA Sem 2 CGPA", value: "8.8", detail: "Sardar Vallabhbhai Global Univ" },
    { label: "MCA Sem 1 CGPA", value: "8.5", detail: "Academic Excellence" },
    { label: "BCA CGPA", value: "7.6", detail: "SMT K.S.N Kansagra Mahila College" },
    { label: "Full-Stack Projects", value: "5+", detail: "Production-style apps" },
    { label: "Verified Credentials", value: "10", detail: "Linux Foundation, Google, etc." },
  ],

  // Section 4: Freelance Services matching genuine skills
  services: [
    {
      id: "website-development",
      number: "01",
      title: "Website Development",
      category: "Frontend & Web",
      shortDescription: "Clean, lightning-fast, and responsive websites designed to present your business clearly and convert visitors into clients.",
      deliverables: [
        "Fully responsive layouts across mobile, tablet, and desktop",
        "High-converting landing pages & business promotional websites",
        "Personal brand & portfolio websites for professionals",
        "Clean semantic HTML5, modern CSS3, and SEO best practices",
        "Fast page load optimization and cross-browser testing"
      ],
      tags: ["Responsive Design", "Landing Pages", "Business Sites", "Modern CSS", "SEO Basics"]
    },
    {
      id: "react-frontend",
      number: "02",
      title: "React.js Frontend Development",
      category: "Single Page Applications",
      shortDescription: "Interactive, component-driven user interfaces built with React.js, featuring smooth state management and clean API integration.",
      deliverables: [
        "Modular, reusable React.js components with clean folder structures",
        "State management using React Hooks (useState, useEffect, useContext)",
        "Seamless REST API integration using Axios or Fetch with loading states",
        "Interactive dashboards, filters, and dynamic search interfaces",
        "Modern UI/UX styling with Vanilla CSS and responsive design"
      ],
      tags: ["React.js", "Hooks", "Axios", "Dynamic UI", "Component Architecture"]
    },
    {
      id: "python-backend",
      number: "03",
      title: "Python Backend & API Development",
      category: "Backend Engineering",
      shortDescription: "High-performance backend services and REST APIs built with Python and FastAPI, featuring strict validation and security.",
      deliverables: [
        "Stateless RESTful APIs architected with FastAPI / Python 3",
        "Strict request & response schema validation using Pydantic v2",
        "Secure authentication using OAuth2 / JWT bearer tokens & Bcrypt hashing",
        "Business logic implementation (conflict detection, automated calculations)",
        "Interactive Swagger UI & OpenAPI documentation ready for client frontend teams"
      ],
      tags: ["Python 3", "FastAPI", "Pydantic", "JWT Auth", "Swagger UI", "REST APIs"]
    },
    {
      id: "full-stack-apps",
      number: "04",
      title: "Full-Stack Web Applications",
      category: "End-to-End Solutions",
      shortDescription: "Complete, end-to-end web applications with connected frontends, backends, authentication, and database persistence.",
      deliverables: [
        "Seamless integration between React.js frontend and Python/Node/Spring backends",
        "Role-Based Access Control (RBAC) supporting Admin, Staff, and Client roles",
        "Complete CRUD functionality for data entry, management, and reporting",
        "Database connectivity, indexing, and transactional integrity",
        "Secure file upload handling (PDFs, images, ZIP files) with validation"
      ],
      tags: ["Full-Stack", "Role-Based Access (RBAC)", "CRUD Workflows", "Auth", "End-to-End"]
    },
    {
      id: "website-bug-fixing",
      number: "05",
      title: "Website Bug Fixing & Troubleshooting",
      category: "Maintenance & Support",
      shortDescription: "Diagnostic troubleshooting to fix layout defects, broken forms, API integration issues, and browser compatibility problems.",
      deliverables: [
        "Diagnosing and fixing responsive layout breaks and mobile glitches",
        "Troubleshooting broken API requests, CORS errors, and token expiration bugs",
        "Form validation corrections and client feedback enhancements",
        "Debugging React state desynchronization and re-rendering problems",
        "Code review and refactoring for improved maintainability"
      ],
      tags: ["Bug Fixing", "Responsive Fixes", "CORS & API", "Form Validation", "Troubleshooting"]
    },
    {
      id: "database-integration",
      number: "06",
      title: "Database Integration & Management",
      category: "Data Architecture",
      shortDescription: "Practical database modeling, schema design, and integration using MongoDB, MySQL, PostgreSQL, or SQLite.",
      deliverables: [
        "Relational schema design (MySQL, PostgreSQL, SQLite) with foreign key integrity",
        "Document database modeling and schema validation with MongoDB & Mongoose",
        "ORM integration using SQLAlchemy 2.0 (Python) or Spring Data JPA / Hibernate",
        "Server-side pagination, search queries, and sorting algorithms",
        "Secure connection configurations protecting credentials via environment variables"
      ],
      tags: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQLAlchemy", "JPA/Hibernate"]
    }
  ],

  // Section 5: Projects
  projects: [
    {
      id: "timetable-optimizer",
      numericId: "01",
      title: "Smart Timetable Optimizer",
      shortTitle: "Timetable Optimizer",
      tagline: "Academic Scheduling & Conflict-Free Timetable Generation Platform",
      category: "MERN Stack Web Application",
      image: "/projects/timetable-optimizer.jpg",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Axios", "Bcrypt"],
      roles: ["Full Stack Developer", "Database Designer"],
      overview: "A full-stack web application designed to automate and simplify college timetable generation, room allocation, and faculty scheduling without overlapping conflicts.",
      problem: "Manually building semester timetables across multiple departments, classes, subjects, rooms, and faculty members consumes days of administrative effort and often results in double-booking classrooms or instructors.",
      solution: "Engineered an automated scheduling portal with separate role-based dashboards for Admin, Faculty, and Students. Admins manage department rules, time slots, and rooms, while the scheduling logic generates conflict-free schedules based on real faculty availability.",
      keyFeatures: [
        "Role-based access control with dedicated dashboards for Admin, Faculty, and Students",
        "Timetable generation structured around department, semester, division, faculty, room, and time slot criteria",
        "Faculty availability tracking to prevent scheduling lectures during unavailable periods",
        "Administrative master data management for courses, classrooms, faculty assignments, and time slots",
        "Interactive timetable grid viewing for students and teachers with clear schedule exports",
        "RESTful API backend built with Express.js and MongoDB Mongoose schema validation"
      ],
      architecture: [
        "Frontend: React.js with modular component hierarchy, weekly schedule grid, and Axios API layer",
        "Backend: Express.js REST API with routing controllers and JSON request body parsing",
        "Database: MongoDB with Mongoose schemas for departments, faculty, rooms, courses, and timetables",
        "Security: Password hashing using Bcrypt and protected administrative route handlers"
      ],
      myContribution: "Developed the full-stack MERN application, designed the MongoDB collections and schemas, implemented role-based dashboard views in React.js, authored Express REST endpoints, and created the scheduling matrix.",
      status: "Academic Project & Local Deployment",
      repoUrl: "https://github.com/priyanshisakariya/Smart-Timetable-Optimizer",
      liveDemo: null,
      isFeatured: true
    },
    {
      id: "flight-crew",
      numericId: "02",
      title: "Flight Crew Management System",
      shortTitle: "Flight Crew Management",
      tagline: "Full-Stack Aviation Operations, Crew Rostering & Conflict Engine",
      category: "Python & FastAPI Web Application",
      image: "/projects/flight-crew.jpg",
      technologies: ["Python 3", "FastAPI", "SQLAlchemy 2.0", "SQLite", "React.js", "Vite", "Pydantic", "PyJWT", "Bcrypt"],
      roles: ["Backend & Frontend Engineer", "API Architect"],
      overview: "An enterprise-grade aviation operations and crew scheduling platform featuring real-time schedule conflict prevention, pilot and cabin crew rostering, flight availability tracking, and role-based operations portals.",
      problem: "Airlines must strictly manage flight crew assignments to guarantee safety quotas (Captains, First Officers, Flight Attendants) while preventing transit overlap and duty-hour fatigue violations across tight turnaround schedules.",
      solution: "Built a dedicated scheduling engine (`conflict_service.py`) that checks time-interval intersections `[start - buffer, end + buffer]` to prevent concurrent duty assignments across transit windows. Features an Admin Operations Controller and a Crew Personal Portal.",
      keyFeatures: [
        "Dedicated conflict checking engine (`conflict_service.py`) executing time-interval intersection checks with turnaround buffers",
        "Operations Dashboard with real-time fleet metrics (Active Crew, Total Flights, Pending Assignments, Active Hubs)",
        "Role-based authorization distinguishing Operations Admin vs. Cockpit/Cabin Crew permissions",
        "OAuth2 / JWT bearer token authentication with Bcrypt password salt-hashing",
        "Interactive OpenAPI / Swagger UI documentation automatically generated at `/docs`",
        "13-step comprehensive automated test suite (`test_e2e.py`) validating data integrity and conflict edge cases",
        "Aviation flight route visuals (e.g. AMD ✈ BOM) with departure countdowns and duty schedules"
      ],
      architecture: [
        "Frontend: React.js 19 SPA with Vite, responsive aviation navy theme, and Axios JWT interceptors",
        "Backend: Python 3.13 + FastAPI REST routers organized into modular domain services",
        "Data Layer: SQLAlchemy 2.0 ORM with relational schema across 5 core entities (Users, Crew, Flights, Availability, Assignments)",
        "Validation: Strict Pydantic v2 schemas for all payload validation and error responses"
      ],
      myContribution: "Architected relational schemas with SQLAlchemy 2.0, developed the conflict engine and turnaround buffer algorithms in Python, implemented OAuth2/JWT security middleware, built the React frontend interface, and authored the 13-scenario automated test runner.",
      status: "Completed Full-Stack System",
      repoUrl: "https://github.com/priyanshisakariya/Flight-Crew-Management",
      liveDemo: null,
      isFeatured: true
    },
    {
      id: "campus-project",
      numericId: "03",
      title: "Student Project Management System",
      shortTitle: "Campus Project",
      tagline: "Role-Based Academic Project Lifecycle Management Platform",
      category: "Full-Stack Enterprise System",
      image: "/projects/campus-project.png",
      technologies: ["React.js", "Spring Boot", "JWT", "RBAC", "REST API", "MySQL", "Axios"],
      roles: ["Full Stack Developer", "Backend Engineer"],
      overview: "A multi-role academic project lifecycle platform serving Students, Faculty, and Administrators with structured proposal workflows, mentor allocations, and milestone tracking.",
      problem: "Tracking project proposals, mentor allocations, weekly milestone submissions, and approvals across hundreds of students is conventionally fragmented across physical paperwork, emails, and isolated spreadsheets.",
      solution: "Campus Project centralizes the entire lifecycle in a unified web platform with role-based routing, automated mentor assignments, weekly milestone tracking, multi-format secure document uploads, and direct faculty evaluation comments.",
      keyFeatures: [
        "Role-Based Access Control (RBAC) with 3 dedicated dashboards tailored for Student, Faculty, and Admin",
        "Stateless JWT Authentication ensuring secure sessions and protected endpoint access",
        "Proposal submission, automated mentor assignment, and administrative approval workflow",
        "Weekly progress tracking with milestone reviews and final project submissions",
        "Secure file uploads supporting 3 file types: PDF proposals, PDF reports, and ZIP source code",
        "Faculty review console with inline evaluation comments and approval/rejection decision workflows",
        "10+ RESTful API endpoints architected in Spring Boot and consumed via React.js (Axios) and MySQL"
      ],
      architecture: [
        "Frontend: React.js SPA with role-based protected routes and responsive dashboard modules",
        "Backend: Spring Boot REST controllers following clean MVC and service-repository pattern",
        "Security: Spring Security with JSON Web Tokens (JWT) and custom RBAC filter chains",
        "Database: MySQL relational schema maintaining users, roles, project submissions, and evaluation audits"
      ],
      myContribution: "Designed the relational database schema, built the Spring Boot REST API endpoints, integrated Spring Security with JWT & RBAC, configured multi-part file upload handlers for PDFs and ZIP files, and developed the React.js dashboards with Axios HTTP integration.",
      status: "Academic Deployment",
      repoUrl: "https://github.com/priyanshisakariya/CampusProject",
      liveDemo: null,
      isFeatured: true
    },
    {
      id: "employee-management-system",
      numericId: "04",
      title: "Employee Management System",
      shortTitle: "Employee Management",
      tagline: "High-Performance MVC Backend with Spring Data JPA & Hibernate",
      category: "Backend REST API System",
      image: null,
      isBackendProject: true,
      technologies: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "REST API", "Maven"],
      roles: ["Backend API Developer"],
      overview: "A robust backend system developed with Java, Spring Boot, Spring Data JPA, Hibernate, and MySQL following layered MVC architecture principles.",
      problem: "Organizational HR teams require performant, consistent, and validated APIs to manage employee records, departmental transfers, and fast search queries without risking data corruption.",
      solution: "Engineered a layered Spring Boot application providing comprehensive CRUD REST APIs with robust input validation, centralized exception handling, dynamic sorting, and server-side pagination to handle high data volumes efficiently.",
      keyFeatures: [
        "Engineered 5+ RESTful API endpoints for employee CRUD operations (add, update, delete, retrieve, and search)",
        "Implemented Spring Data JPA and Hibernate for performant ORM database persistence",
        "Configured server-side pagination and dynamic sorting for fast querying of extensive employee directories",
        "Integrated Jakarta Validation for payload verification and custom GlobalExceptionHandler for standardized error responses",
        "Comprehensive API validation and testing executed with Postman collections",
        "Managed enterprise project dependencies, plugins, and build lifecycles using Apache Maven"
      ],
      architecture: [
        "Controller Layer: REST controllers exposing standard HTTP verbs (GET, POST, PUT, DELETE)",
        "Service Layer: Business logic, transactional boundaries, validation checks, and sorting algorithms",
        "Data Layer: Spring Data JPA repositories interfacing with Hibernate ORM and MySQL database",
        "Cross-Cutting: Centralized ControllerAdvice for unified error handling and HTTP status mapping"
      ],
      myContribution: "Implemented the end-to-end backend service using Java and Spring Boot, created the database entity mappings with Hibernate, authored custom repository query methods, and tested all API endpoints using Postman.",
      status: "Completed Backend System",
      repoUrl: "https://github.com/priyanshisakariya/Employee-Management-System",
      liveDemo: null,
      isFeatured: false
    },
    {
      id: "food-donate",
      numericId: "05",
      title: "FoodDonate - Community Food Sharing Platform",
      shortTitle: "FoodDonate",
      tagline: "Connecting Surplus Food Donors with Local Volunteers and NGOs",
      category: "Frontend Web Application",
      image: "/projects/food-donate.jpg",
      technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "REST API Integration"],
      roles: ["Frontend Developer", "UI Designer"],
      overview: "A community-focused web platform created to eliminate urban food waste by connecting surplus food donors (restaurants, events, caterers) with verified volunteers and charitable organizations.",
      problem: "Every day, commercial food businesses and social events discard massive amounts of wholesome food while nearby shelter homes and communities face shortages due to lack of real-time coordination.",
      solution: "FoodDonate provides an accessible, mobile-responsive web portal where donors can list surplus food items with expiry windows and pickup addresses, allowing volunteers to claim, coordinate pickup, and deliver meals efficiently.",
      keyFeatures: [
        "Donor registration and food donation listing form with quantity and perishability indicators",
        "Volunteer pickup discovery feed showing nearby available food donations",
        "Clean impact metrics counter showcasing estimated meals saved and community partners",
        "Responsive, mobile-optimized card layout for on-the-go volunteer coordination",
        "Client-side input verification and clear visual status indicators (Available, Claimed, Delivered)"
      ],
      architecture: [
        "Frontend: React.js application with modular donor cards, listing filters, and pickup status updates",
        "Styling: Accessible Vanilla CSS with high-contrast readable layouts and mobile navigation",
        "Data Layer: Client-side state management ready for REST API backend connectivity"
      ],
      myContribution: "Designed the responsive user interface, implemented the donation listing and volunteer claim components in React, and tested cross-device responsiveness across smartphones and tablets.",
      status: "Community Web Initiative Prototype",
      repoUrl: null,
      liveDemo: null,
      isFeatured: false
    }
  ],

  // Section 6: Genuine Skills organized into the 6 requested groups
  skillsByCategory: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "FastAPI • Scripting • OOP", highlight: true },
        { name: "JavaScript", level: "ES6+ • React • Node", highlight: true },
        { name: "Java", level: "Core Java • OOP • Spring", highlight: true },
        { name: "SQL", level: "Queries • Schemas • Joins", highlight: true },
        { name: "Node.js", level: "Server Runtime", highlight: false },
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "Components • Hooks • SPA", highlight: true },
        { name: "HTML5", level: "Semantic Markup • A11y", highlight: true },
        { name: "CSS3 / Modern CSS", level: "Flexbox • Grid • Responsive", highlight: true },
        { name: "Axios", level: "REST API Integration", highlight: false },
        { name: "Responsive Design", level: "Mobile-First Layouts", highlight: true },
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "FastAPI", level: "Python REST APIs • Pydantic", highlight: true },
        { name: "Express.js", level: "Node.js Web Framework", highlight: true },
        { name: "Spring Boot", level: "Enterprise Java • MVC", highlight: true },
        { name: "REST APIs", level: "Stateless HTTP Architecture", highlight: true },
        { name: "JWT & RBAC", level: "Authentication & Role Security", highlight: true },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", level: "Relational Schemas • Keys", highlight: true },
        { name: "MongoDB", level: "Document DB • Mongoose", highlight: true },
        { name: "PostgreSQL", level: "Relational DBMS", highlight: false },
        { name: "SQLite", level: "Embedded Database", highlight: false },
        { name: "SQLAlchemy", level: "Python ORM 2.0", highlight: true },
        { name: "Spring Data JPA / Hibernate", level: "Java ORM Persistence", highlight: false },
      ]
    },
    {
      category: "Tools & Development Workflow",
      skills: [
        { name: "Git", level: "Branching • Commits • Merging", highlight: true },
        { name: "GitHub", level: "Version Control & Collaboration", highlight: true },
        { name: "Postman", level: "API Testing & Documentation", highlight: true },
        { name: "Visual Studio Code", level: "Primary Development IDE", highlight: false },
        { name: "Docker", level: "Containerization Basics", highlight: false },
        { name: "Linux", level: "Terminal & Environment", highlight: false },
        { name: "Maven", level: "Java Build & Dependency Tool", highlight: false },
      ]
    },
    {
      category: "Core Computer Science Concepts",
      skills: [
        { name: "Object-Oriented Programming (OOP)", level: "Inheritance • Polymorphism • Encapsulation", highlight: true },
        { name: "Data Structures & Algorithms", level: "Arrays • Maps • Trees • Complexity", highlight: true },
        { name: "DBMS & Normalization", level: "ACID • Normal Forms • Indexes", highlight: true },
        { name: "MVC Architecture", level: "Layered System Design", highlight: true },
        { name: "Software Development Life Cycle (SDLC)", level: "Requirements • Build • QA", highlight: false },
      ]
    }
  ],

  // Section 10: Engineering Principles / Trust (Honest, authentic, no fake reviews)
  trustPrinciples: [
    {
      icon: "Code2",
      title: "Clean, Maintainable Code",
      description: "Readable code structured in modular components and services, making future modifications and maintenance effortless for your team."
    },
    {
      icon: "ShieldCheck",
      title: "Secure by Default",
      description: "Strict payload validation, encrypted passwords (Bcrypt), and protected endpoints using stateless JWT authentication and role guards."
    },
    {
      icon: "CheckCircle",
      title: "Clear Milestone Communication",
      description: "Transparent progress updates with frequent demonstrable checkpoints, eliminating ambiguity throughout your project."
    },
    {
      icon: "Smartphone",
      title: "Cross-Platform Responsiveness",
      description: "Thorough testing across desktop, tablet, and mobile browsers to ensure every visitor experiences a polished interface."
    }
  ],

  // Section 7: Verified Certificates
  certifications: [
    {
      id: "cert-linux",
      title: "Developing Secure Software",
      organization: "The Linux Foundation",
      category: "Security & DevSecOps",
      certificateUrl: "/certificates/Linux_Foundation.jpeg",
      description: "Essential practices for developing secure software, identifying application vulnerabilities, and defensive programming."
    },
    {
      id: "cert-dsa",
      title: "Data Structures & Algorithms",
      organization: "ScholarHat",
      category: "Core Computer Science",
      certificateUrl: "/certificates/Data_Structure.jpeg",
      description: "Algorithmic problem-solving, asymptotic analysis (Big-O), arrays, linked lists, trees, graphs, sorting, and searching."
    },
    {
      id: "cert-python",
      title: "Python Programming",
      organization: "freeCodeCamp",
      category: "Programming & Backend",
      certificateUrl: "/certificates/Python_Free_code_Camp.jpeg",
      description: "In-depth Python programming covering object-oriented structures, functional patterns, file handling, and algorithms."
    },
    {
      id: "cert-react",
      title: "React.js",
      organization: "Cursa",
      category: "Frontend Development",
      certificateUrl: "/certificates/React_js.jpeg",
      description: "Modern component-based UI engineering, functional components, React Hooks, state management, and asynchronous data fetching."
    },
    {
      id: "cert-aws",
      title: "AWS CloudFront",
      organization: "Coursera",
      category: "Cloud Infrastructure",
      certificateUrl: "/certificates/AWS_S3_Bucket.jpeg",
      description: "Content Delivery Network (CDN) deployment, edge caching mechanisms, SSL/TLS security, and low-latency asset delivery."
    },
    {
      id: "cert-genai",
      title: "Introduction to Generative AI",
      organization: "Google Cloud",
      category: "Modern AI & Cloud",
      certificateUrl: "/certificates/Generative_AI.jpeg",
      description: "Foundations of Generative AI, Large Language Models, responsible AI practices, and cloud-based AI tools."
    },
    {
      id: "cert-cyber",
      title: "Cyber Security Fundamentals",
      organization: "Industry Credential",
      category: "Information Security",
      certificateUrl: "/certificates/Cyber_Security.jpeg",
      description: "Fundamental cybersecurity principles, threat awareness, network protection, and application security."
    },
    {
      id: "cert-ibm",
      title: "IBM SkillsBuild Certification",
      organization: "IBM SkillsBuild",
      category: "Professional Skills",
      certificateUrl: "/certificates/IBM_Skill.jpeg",
      description: "Applied computing concepts, collaborative software practices, and technological workflow fundamentals."
    },
    {
      id: "cert-prompt",
      title: "Prompt Engineering",
      organization: "Skill Certification",
      category: "AI & Productivity",
      certificateUrl: "/certificates/Prompt_Engineering.jpeg",
      description: "Structured prompt design, zero-shot and few-shot reasoning techniques, and contextual AI workflows."
    },
    {
      id: "cert-udemy-python",
      title: "Python Development Specialist",
      organization: "Udemy",
      category: "Programming & Practical Dev",
      certificateUrl: "/certificates/Udemy_python.jpeg",
      description: "Hands-on Python development covering web backends, data structures, and practical application modules."
    }
  ],

  // Academic Education
  education: [
    {
      id: "edu-mca",
      degree: "Master of Computer Application (MCA)",
      institution: "Sardar Vallabhbhai Global University",
      location: "Ahmedabad, Gujarat",
      period: "2025 – 2027",
      scores: [
        { label: "Semester 1 CGPA", value: "8.5" },
        { label: "Semester 2 CGPA", value: "8.8" }
      ],
      description: "Specializing in advanced software applications, enterprise backend architectures, full-stack web technologies, and database engineering.",
      current: true
    },
    {
      id: "edu-bca",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "SMT K.S.N Kansagra Mahila College",
      location: "Rajkot, Gujarat",
      period: "2022 – 2025",
      scores: [
        { label: "Cumulative CGPA", value: "7.6" }
      ],
      description: "Strong academic foundation in core computer science, software programming, object-oriented concepts, relational database design, and web development.",
      current: false
    }
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" }
  ]
};
