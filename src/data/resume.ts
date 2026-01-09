

export const personalInfo = {
    name: "Paras Kumar Sharma",
    title: "Aspiring Software Engineer",
    tagline: "I build enterprise solutions.",
    description: "I'm a software engineer specializing in building robust back-end systems and full-stack applications. Currently pursuing my BCA at Symbiosis International University and focused on creating secure, scalable enterprise solutions.",
    email: "paras.tloz@gmail.com",
    social: {
        github: "https://github.com/TriforceParas",
        linkedin: "https://linkedin.com/in/paras-kumar-sharma-1b7369261/",
    }
};

export const about = {
    text: [
        "Hello! I'm Paras, a software engineering student at Symbiosis International University (SICSR) in Pune, pursuing my Bachelor of Computer Applications. My journey in software development has been driven by a passion for solving complex problems and building efficient systems.",
        "I recently completed a software development internship at Everest Bank Ltd. in Kathmandu, where I developed a Java Spring Boot application that automated processing of SWIFT foreign transaction messages and integrated secure reporting and notifications.",
        "I'm focused on backend development, security, and building scalable systems. I enjoy learning new technologies and improving system reliability."
    ]
};

export const experience = [
    {
        company: "Everest Bank Ltd.",
        role: "Software Development Intern",
        date: "June 2024",
        location: "Kathmandu, Nepal",
        description: [
            "Developed a Java Spring Boot application with a Tauri desktop frontend to automate processing of SWIFT foreign transaction messages and convert ASCII .txt files into structured data.",
            "Automated data validation against Finacle using MySQL/JDBC, reducing manual reconciliation effort.",
            "Implemented secure email alerts for mismatch reports and customer notifications using SMTP.",
            "Generated branded, password-protected PDF summaries with QR-code verification.",
            "Implemented authentication with JWT, OTP-based login, password reset, account lockout, and role-based access control.",
            "Collaborated with IT to deploy the solution ensuring compliance with internal systems and security protocols."
        ]
    }
];

export const education = [
    {
        degree: "Master of Computer Applications (MCA)",
        school: "Christ University, Bengaluru",
        date: "2026 - 2028 (Expected)",
        desc: "Specializing in Advanced Software Engineering & Data Science."
    },
    {
        degree: "Bachelor of Computer Applications (BCA)",
        school: "Symbiosis International University (SICSR), Pune",
        date: "2023 - 2026",
        desc: "Relevant coursework: Data Structures, Algorithms, Web Development, Database Management."
    }
];

export const skills = {
    languages: [
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sql/sql-plain.svg" } // Using SQL icon from legacy
    ],
    frameworks: [
        { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
        { name: "Tauri", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tauri/tauri-original.svg" }, // Assuming Tauri exists or generic
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" }
    ],
    devops: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
        { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" }
    ],
    tools: [
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "Grafana", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" }
    ]
};

export const projects = [
    {
        title: "Task Progress Tracker",
        description: "Enterprise Task Management System with role-based access, CI/CD, and real-time updates built using Spring Boot, WebSockets, and Kubernetes.",
        fullDescription: "A comprehensive enterprise-grade task management platform designed for teams and organizations. The system features a microservices architecture deployed on Kubernetes with automated CI/CD pipelines using Jenkins. Real-time updates are powered by WebSockets, ensuring instant synchronization across all connected clients. The platform includes advanced role-based access control (RBAC) for granular permission management.",
        features: [
            "Real-time task updates with WebSocket integration",
            "Role-based access control with granular permissions",
            "Automated CI/CD pipeline with Jenkins and Kubernetes",
            "RESTful API with comprehensive documentation",
            "Dashboard with analytics and reporting features"
        ],
        tech: ["Spring Boot", "Jenkins", "Kubernetes", "WebSockets", "SQL"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "task-tracker",
    },
    {
        title: "Tomato",
        description: "Full-stack food ordering platform with Flask, Socket.IO, SQLAlchemy, and SendGrid for emails. Role-based access and real-time order tracking.",
        fullDescription: "Tomato is a complete food ordering and restaurant management platform built with Python Flask. The application supports both customers and restaurant owners with distinct dashboards and capabilities. Real-time order tracking is implemented using Socket.IO, providing live updates from order placement to delivery. The platform integrates SendGrid for transactional emails and supports multiple payment methods.",
        features: [
            "Real-time order tracking with Socket.IO",
            "Customer and admin dashboards",
            "Automated email notifications via SendGrid",
            "Menu management system for restaurants",
            "Order history and analytics"
        ],
        tech: ["Python", "Flask", "Socket.IO", "MySQL"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "tomato",
    },
    {
        title: "Data Visualization Dashboard",
        description: "Interactive dashboard for visualizing datasets using D3.js and React with Flask backend for data aggregation and real-time filtering.",
        fullDescription: "An interactive data visualization dashboard that transforms complex datasets into meaningful visual insights. Built with React and D3.js on the frontend, the dashboard offers various chart types including line charts, bar graphs, pie charts, and scatter plots. The Flask backend handles data processing, aggregation, and real-time filtering. Users can create custom views and export visualizations.",
        features: [
            "Multiple chart types with D3.js",
            "Real-time data filtering and aggregation",
            "Custom dashboard layouts",
            "Data export functionality",
            "Responsive design for all devices"
        ],
        tech: ["D3.js", "React", "Python", "Flask"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "dataviz",
    },
    {
        title: "Cross-Platform SQL Client",
        description: "Desktop SQL client built with Tauri and React, supporting MySQL, PostgreSQL, and SQLite with query execution and visual schema management.",
        fullDescription: "A cross-platform desktop application for database management built with Tauri and React. The client supports multiple database systems including MySQL, PostgreSQL, and SQLite. Features include visual schema browsing, query execution with syntax highlighting, result export, and connection management. The Rust backend ensures native performance and secure database connections.",
        features: [
            "Multi-database support (MySQL, PostgreSQL, SQLite)",
            "Visual schema browser and table editor",
            "Query execution with syntax highlighting",
            "Export results to CSV, JSON, and Excel",
            "Secure connection management"
        ],
        tech: ["Tauri", "React", "Rust", "TypeScript"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "sql-client",
    },
    {
        title: "ERP System",
        description: "Enterprise Resource Planning system with modules for HR, inventory, sales, and finance. Built with Spring Boot and React with PostgreSQL.",
        fullDescription: "A comprehensive Enterprise Resource Planning (ERP) system designed for small to medium businesses. The modular architecture includes Human Resources, Inventory Management, Sales & CRM, and Financial Accounting modules. Built with Spring Boot microservices and a React frontend, the system provides real-time reporting, workflow automation, and integration capabilities.",
        features: [
            "Modular architecture with HR, Inventory, Sales, Finance",
            "Role-based access control and audit logging",
            "Real-time reporting and analytics dashboard",
            "Workflow automation and approval chains",
            "REST API for third-party integrations"
        ],
        tech: ["Spring Boot", "React", "PostgreSQL", "Redis"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "erp",
    },
    {
        title: "Portfolio Website",
        description: "Modern portfolio website with bento grid layout, Framer Motion animations, and responsive design. Built with Vite, React, and TailwindCSS.",
        fullDescription: "A modern, responsive portfolio website showcasing projects and skills with a unique bento grid layout. Built with Vite and React for optimal performance, styled with TailwindCSS, and animated with Framer Motion. Features include dark mode, smooth transitions, interactive project cards with detailed sidebars, and mobile-first responsive design.",
        features: [
            "Bento grid layout design",
            "Smooth animations with Framer Motion",
            "Interactive project detail sidebar",
            "Fully responsive mobile-first design",
            "Optimized performance with Vite"
        ],
        tech: ["React", "Vite", "TailwindCSS", "Framer Motion"],
        links: {
            github: "https://github.com/TriforceParas",
        },
        image: "portfolio",
    }
];

