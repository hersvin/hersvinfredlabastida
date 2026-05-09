export const profileData = {
  name: 'Hersvin Fred',
  title: 'Frontend Developer',
  avatar: '/profile.jpg',
  email: 'hersvinlabastida@gmail.com',
  phone: '+63 993 0880 598',
  birthday: 'January 13, 2002',
  location: 'Bagong Barrio, Caloocan City, Philippines',
  social: {
    github: 'https://github.com/hersvin',
    facebook: 'https://facebook.com/hersvin',
    instagram: 'https://instagram.com/hersvinfred',
  },
}

export const aboutData = {
  description: [
    "I’m a Frontend Developer from Bagong Barrio, Caloocan City, specializing in building responsive, interactive, and user-focused web interfaces. I enjoy turning ideas into clean, functional, and visually engaging applications that deliver great user experiences.",

    "My work focuses on creating intuitive and accessible user interfaces that are both visually appealing and highly functional. I pay close attention to detail, performance, and usability to ensure smooth and seamless interactions across devices. My goal is to bring designs to life in a way that effectively communicates brand identity and purpose. I’ve worked with modern frontend technologies including React, Next.js, TypeScript, and Tailwind CSS."
  ],
  services: [
    {
      icon: 'IconCode',
      title: 'Frontend Development',
      description: 'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Development',
      description: 'Professional development of mobile applications with React Native and modern tools.',
    },
    {
      icon: 'IconWorld',
      title: 'Web Development',
      description: 'Developing full-stack web applications with scalable architecture, API integration, and optimized performance.',
    }, {
      icon: 'IconPalette',
      title: 'UI/UX Design',
      description: 'Designing clean, user-centered interfaces with a focus on usability, accessibility, and modern visual aesthetics.',
    },
  ],
  references: [
    {
      avatar: '/professional-man.jpg',
      name: 'Franco De Chavez',
      text: 'Maayos at organisado ang naging paggawa ng system para sa aming business workflow. Maganda ang communication at mabilis siyang mag-adjust sa changes na kailangan namin.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Michael Macabasag',
      text: 'Mahusay sa parehong frontend at backend development. Naipasa ang project bago ang deadline at malinis ang code kaya madaling i-maintain at i-improve.',
    },
    {
      avatar: '/professional-man.jpg',
      name: 'Joseph Abbelanosa',
      text: 'Maaasahan at may malalim na technical skills. Malaki ang naitulong niya sa pag-improve ng performance ng system at nakapagbigay ng praktikal na solusyon sa mga existing issues.',
    },
    // {
    //   avatar: '/professional-woman-diverse.png',
    //   name: 'Cielo Dizon',
    //   text: 'Professional, creative, and highly skilled. John is the developer you want on your team for any complex project.',
    // },
    // {
    //   avatar: '/professional-man.jpg',
    //   name: 'Marlyn Aberin',
    //   text: 'Outstanding work! John delivered a high-quality product that exceeded our expectations. His attention to detail is remarkable.',
    // },
    // {
    //   avatar: '/professional-man.jpg',
    //   name: 'Zhizhi Nieves',
    //   text: 'Outstanding work! John delivered a high-quality product that exceeded our expectations. His attention to detail is remarkable.',
    // },
  ],
  clients: [
    { name: 'Slashtech Corp', logo: '/slashtech.jpg' },
    { name: 'Endless Logic Innovations Corp.', logo: '/eli.jpg' },
    { name: 'Intellismart Technology Inc.', logo: '/iti.jpg' },
    { name: 'Wyntap', logo: '/wyntap.jpg' },
  ],

  stacks: [
    { name: 'React', logo: '/react.png' },
    { name: 'Next.js', logo: '/nextjs.png' },
    { name: 'TypeScript', logo: '/typescript.png' },
    { name: 'Tailwind CSS', logo: '/tailwindcss.png' },
    { name: 'Framer Motion', logo: '/framer-motion.png' },
    { name: 'Node.js', logo: '/node-js.png' },
    { name: 'Express', logo: '/express.png' },
    { name: 'MongoDB', logo: '/mongodb.png' },
  ],
}

export const resumeData = {
  education: [
    {
      title: 'University of Caloocan City',
      period: '2020 — 2024',
      description:
        'Graduated with a degree in Computer Science, focusing on advanced software engineering, full-stack web development, and algorithms. Developed a strong foundation in building scalable, efficient, and user-centric applications while mastering modern programming paradigms.',
    },
    {
      title: 'AMA Computer Learning Center',
      period: '2018 — 2020',
      description: 'Completed Senior High School under the Information and Communications Technology (ICT) strand, gaining foundational knowledge in programming and computer hardware.',
    },
    {
      title: 'Bagong Barrio National High School',
      period: '2014 — 2018',
      description: 'Completed Junior High School with active participation in various academic and extracurricular activities.',
    },
    {
      title: 'Bagong Barrio Elementary School',
      period: '2008 — 2014',
      description: 'Completed primary education, developing foundational academic skills and a strong sense of community.',
    },
  ],
  experience: [
    {
      title: "PHP Developer",
      period: "July 2023 — January 2024",
      company: "Slashtech Solutions Corp",
      description:
        "Developed and maintained backend modules using PHP for internal business systems. Implemented CRUD operations, optimized database queries, and supported API integrations for client-facing applications. Collaborated with senior developers to fix bugs, improve system stability, and deploy updates."
    },
    {
      title: "Junior Developer",
      period: "January 2024 — July 2024",
      company: "Endless Logic Innovations Corp",
      description:
        "Assisted in building web applications using modern frontend and backend technologies. Worked on UI improvements, API consumption, and debugging production issues. Gained hands-on experience in team-based development workflows, Git version control, and Agile practices."
    },
    {
      title: "Web and Mobile Developer",
      period: "July 2024 — Present",
      company: "Intellismart Technology Inc.",
      description:
        "Developing responsive web and mobile applications using modern frameworks. Responsible for building reusable components, integrating REST APIs, and improving application performance. Actively involved in planning features, code reviews, and optimizing user experience across platforms."
    }
  ],
  skills: [
    { name: 'Web Design', level: 90 },
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 80 },
    { name: 'Database Design', level: 70 },
  ],
}

export const portfolioData = {
  categories: ['all', 'web design', 'applications', 'web development'],
  projects: [
    {
      title: 'E-Commerce Platform',
      category: 'web development',
      image: '/modern-ecommerce-website.png',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'Node.js', 'PostgreSQL'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/ecommerce',
    },
    {
      title: 'Task Management App',
      category: 'applications',
      image: '/task-management-interface.png',
      description: 'Collaborative task manager with real-time updates',
      tech: ['React', 'Firebase', 'TypeScript'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/taskmanager',
    },
    {
      title: 'Portfolio Website',
      category: 'web design',
      image: '/minimalist-portfolio-design.jpg',
      description: 'Modern portfolio design for creative professionals',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/portfolio',
    },
    {
      title: 'Social Media Dashboard',
      category: 'web development',
      image: '/analytics-dashboard.png',
      description: 'Analytics dashboard with data visualization',
      tech: ['React', 'D3.js', 'Express'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/dashboard',
    },
    {
      title: 'Mobile Banking App',
      category: 'applications',
      image: '/banking-app-interface.png',
      description: 'Secure mobile banking application',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/banking',
    },
    {
      title: 'Restaurant Website',
      category: 'web design',
      image: '/restaurant-website-design.png',
      description: 'Elegant restaurant website with online ordering',
      tech: ['Next.js', 'Sanity CMS', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/johndoe/restaurant',
    },
  ],
}

export const blogData = {
  posts: [
    {
      title: 'Building Modern Web Applications with Next.js 15',
      category: 'Development',
      date: 'Mar 15, 2024',
      readTime: '8 min',
      image: '/web-development-coding.png',
      excerpt: 'Deep dive into Next.js 15 features and App Router enhancements.',
      tags: ['Next.js', 'React', 'Web Development'],
      slug: 'building-modern-web-apps-nextjs-15',
    },
    {
      title: 'Microservices Architecture: A Complete Guide',
      category: 'Architecture',
      date: 'Mar 8, 2024',
      readTime: '12 min',
      image: '/software-architecture.jpg',
      excerpt: 'Design scalable microservices with real-world examples.',
      tags: ['Architecture', 'Backend', 'DevOps'],
      slug: 'microservices-architecture-guide',
    },
    {
      title: 'The Art of UI/UX: Creating Delightful Experiences',
      category: 'Design',
      date: 'Feb 28, 2024',
      readTime: '6 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Principles of exceptional UI/UX design for interfaces users love.',
      tags: ['Design', 'UI/UX', 'Frontend'],
      slug: 'art-of-uiux-delightful-experiences',
    },
    {
      title: 'TypeScript Best Practices for Large-Scale Applications',
      category: 'Development',
      date: 'Feb 20, 2024',
      readTime: '10 min',
      image: '/web-development-coding.png',
      excerpt: 'Master TypeScript patterns for maintainable, type-safe code.',
      tags: ['TypeScript', 'JavaScript', 'Best Practices'],
      slug: 'typescript-best-practices',
    },
    {
      title: 'Building Real-Time Applications with WebSockets',
      category: 'Development',
      date: 'Feb 12, 2024',
      readTime: '9 min',
      image: '/software-architecture.jpg',
      excerpt: 'Implement real-time features using WebSockets and modern frameworks.',
      tags: ['WebSockets', 'Real-time', 'Backend'],
      slug: 'realtime-apps-websockets',
    },
    {
      title: 'Mastering CSS Grid and Flexbox Layouts',
      category: 'Design',
      date: 'Feb 5, 2024',
      readTime: '7 min',
      image: '/ui-ux-design-concept.png',
      excerpt: 'Modern CSS layout techniques with practical examples.',
      tags: ['CSS', 'Layout', 'Frontend'],
      slug: 'mastering-css-grid-flexbox',
    },
  ],
}

export const contactData = {
  email: 'hersvinlabastida@gmail.com',
  phone: '+63 993 0880 598',
  location: 'Bagong Barrio, Caloocan City, Philippines',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7719.7373023502305!2d120.98998569549303!3d14.663394572742648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b69b73604f01%3A0xfad75678831fc9f1!2sBagong%20Barrio%20West%2C%20Caloocan%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1778304338207!5m2!1sen!2sph'
}
