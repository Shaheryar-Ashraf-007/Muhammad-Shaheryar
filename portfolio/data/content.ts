export const profile = {
  name: "Muhammad Shaheryar",
  roles: ["Software Engineer", "DevOps Engineer", "AI Full Stack Developer"],
  location: "Lahore, Pakistan",
  avatarUrl: "/avatar.jpeg",
  email: "muhammadshaheryar45@gmail.com",
  phone: "[+92 318 756 4225]",
  tagline:
    "I build fast, reliable web apps — from the database to the last pixel.",
  summary:
    "Software engineer with 2 years of hands-on experience building web applications. I've worked across internships and freelance projects, and I'm currently a Software Development Intern at Zynvex Solutions. I enjoy turning ambiguous problems into clean, working products — and I'm always looking for the next thing to build or break.",
  resumeUrl: "https://drive.google.com/drive/folders/16cCS82H2yaOu517eaywlsbUQOc3kK-Nu?usp=sharing",
  social: {
    github: "https://github.com/Shaheryar-Ashraf-007",
    linkedin: "https://www.linkedin.com/in/muhammad-shaheryar-bb0542314",
    leetcode: "https://leetcode.com/u/shaheryar_001/",
  },
};

export const status = {
  available: true,
  timezone: "GMT+5",
  responseTime: "<24h",
};

export const stats = [
  { label: "Years experience", value: "2" },
  { label: "Internships", value: "2" },
  { label: "Freelance clients", value: "2" },
  { label: "Technologies", value: "20" },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineer based in Lahore, Pakistan, with hands-on experience building full-stack web applications through internships, freelance projects, and professional work. My core stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL, with additional experience in AWS, Docker, CI/CD, and modern DevOps practices. I enjoy understanding the complete product lifecycle — from designing interfaces and building APIs to deploying and maintaining applications.",
    "My experience includes an 8-month technology internship at Bookme.pk, freelance development for small businesses, and my role as a Software Development Intern at Zynvex Solutions, where I worked on real-world applications involving AI integrations, SaaS platforms, authentication, databases, and third-party APIs. I am currently working as a Technical Support Executive at ibex Pakistan, where I continue to strengthen my troubleshooting, analytical, communication, and problem-solving skills while staying connected to the technology field.",
    "Outside of professional work, I continuously improve my problem-solving and engineering skills through LeetCode, GitHub projects, and hands-on experimentation with new technologies. I particularly enjoy turning ideas into working products and exploring how software can be made more scalable, reliable, and maintainable. My goal is to continue growing as a full-stack engineer while developing deeper expertise in cloud, DevOps, and software architecture.",
  ],
  highlights: [
    { label: "Experience", value: "2+ years" },
    { label: "Internships", value: "2" },
    { label: "Freelance clients", value: "2" },
    { label: "Technologies", value: "20" },
  ],
};

export const skills = [
  {
    group: "Languages",
    icon: "code",
    blurb: "Core languages I write day to day.",
    items: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    group: "Frontend",
    icon: "layout",
    blurb: "Building interfaces that feel fast and intentional.",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Material UI", "ShadCN UI","HTML5 / CSS3"],
  },
  {
    group: "Backend",
    icon: "server",
    blurb: "APIs and data layers that hold up under real use.",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "SQL"],
  },
   {
    group: "DevOps & Cloud",
    icon: "devops",
    blurb: "Automating deployments, infrastructure, and development workflows.",
    items: [
      "Git & GitHub",
      "Docker",
      "Kubernetes",
      "AWS",
      "Linux",
      "Terraform",
      "Helm",
      "Postman",
      "CI/CD Pipelines",
    ],
  },
  {
    group: "AI Tools & Framework",
    icon: "devops",
    blurb: "  AI technologies I use to build intelligent and generative applications.",
    items: [
      "Gemini API",
      "OpenAI API",
      "Replicate",
      "Flux Schnell",
      "Generative AI",
      "Prompt Engineering",
      "AI Integration",
    ],
  },
  {
    group: "Tools & Platforms",
    icon: "tools",
    blurb: "The tools and platforms I rely on to build, collaborate, and ship.",
    items: [
      "VS Code",
      "GitHub",
      "Hostinger",
      "Vercel",
      "Netlify",
      "Namecheap",
      "Slack",
    ],
  },
  
];

export const experience = [
  {
    role: "Customer Support Executive",
    company: "Ibex. Pakistan",
    period: "SEP 2026 — Present",
    current: true,
    points: [
      "Provide customer support by diagnosing issues, troubleshooting problems, and guiding customers toward appropriate solutions.Apply structured problem-solving and analytical skills while handling customer queries and resolving service-related issues.Maintain accurate case records and follow established quality, compliance, and service procedures."
    ],
  },
  {
    role: "Mern Stack Developer Intern",
    company: "Zynvex Solutions",
    period: "2 months",
    current: false,
    points: [
      "Developed and enhanced full-stack web applications using React.js, Next.js, Node.js, Express.js, and MongoDB, implementing responsive UI and RESTful API integrations.Collaborated with the development team to build **AI-powered features**, troubleshoot application issues, and deliver scalable solutions using modern development practices."
    ],
  },
  {
    role: "FullStack/Technology Intern ",
    company: "bookme.pk",
    period: "8 months",
    current: false,
    points: [
    "Developed web application features using React.js, Vue.js, Nuxt.js, Next.js, Node.js, MongoDB, and PostgreSQL. Integrated REST APIs and contributed to frontend, backend, and database development for scalable web applications.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Lumix Solutions",
    period: "1.3 Years",
    current: false,
    points: [
      "Developed and maintained responsive web applications using React.js, Node.js, Express.js, and MongoDB. Integrated REST APIs, implemented frontend features, and optimized applications for performance and usability."
    ],
  },
];

export const projects = [
  {
    name: "AI Powered Cloud-based CI/CD pipeline on SAAS-based LMS (Final Year Project)",
    description:
        "Built an AI-powered SaaS LMS with Gemini API and Stripe, backed by a cloud-based CI/CD pipeline using GitHub Actions, Docker, Kubernetes, Terraform, and AWS.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "Javascript", "Rest API'S", "PostgreSQL", "Prisma", "Stripe", "Gemini API", "Github Actions", "Docker", "Kubernates", "Terraform", "AWS"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/ai-lms-project",
    featured: true,
  },
  {
    name: "AI Powered Outfit Recommendation Using Flux-Scnell Model for image generation",
    description:
  "Built an AI-powered outfit recommendation system that generates personalized outfit suggestions based on user preferences and details. Integrated Gemini API for recommendations and Replicate’s Flux Schnell model to generate realistic outfit images.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Rest API'S", "Flux Schnell", "Gemini API", "Replicate", ],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/ai-outfit-planner",
    featured: true,
  },
  {
    name: "The Multi-Cloud E-Commerce Migration & Modernization",
    description:
        "Modernized a full-stack e-commerce application with a multi-cloud architecture focused on scalability, reliability, and performance. Implemented containerization, CI/CD automation, caching, load balancing, and infrastructure management using Docker, Jenkins, Redis, and cloud technologies.",
    tech: ["DevSecops Project", "Docker", "Jenkins", "Redis", "AWS", "Kubernetes", "Cloud Technologies"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/Full-Stack-E-Commerce-Platform",
    featured: false,
  },
  {
    name: "AI Powered Trip Planner with Gemini API and Google-maps",
    description:
        "Built an AI-powered trip planner that generates personalized travel itineraries based on destination, budget, preferences, and trip duration. Integrated Gemini API with Google Maps to provide smart recommendations, locations, and an interactive travel planning experience.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "Javascript", "Rest API'S", "Mongodb", "Mongodb", "Stripe", "Gemini API", "Leaflet API", "Pixels API", "Google Maps"],
    liveUrl: "#",
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/ai-trip-planner",
    featured: false,
  },
  {
    name: "Face Recognition Attendance System using ML functions",
    description:
      "Developed a face recognition-based attendance system that uses machine learning algorithms to accurately identify and track employee attendance. Integrated with existing HR systems for seamless data management and reporting.",
    tech: ["Python", "Tkinter", "numpy", "OpenCV", "Machine Learning (LBPH Function)", "Face Recognition"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/face_recognition_system",
    featured: false,
  },
  {
    name: "AI Powered Chat Application",
    description: "Built an AI-powered chat application that delivers intelligent, context-aware responses through a clean and responsive interface. Integrated AI capabilities to enable natural conversations and provide a smooth, real-time user experience.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "Javascript", "Rest API'S", "Mongodb", "Mongodb", "Stream-chat", "Docker", "bcrypt"],
    liveUrl: "#",
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/chat-application",
    featured: false,
  },
  {
    name: "Spotify Clone with Chatbot Integration",
    description:
      "Built a Spotify-inspired music streaming application with **playlist management, music discovery, and user authentication** features. Integrated a **conversational AI chatbot** to help users discover music and interact through natural-language conversations.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "Javascript", "Rest API'S", "Mongodb", "Mongodb", "Socket.io",  "bcrypt"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/spotify-clone-",
    featured: false,
  },
  {
    name: "Social Media Platform with AI-powered Content Recommendations",
    description:
      "Developed a social media platform that leverages AI algorithms to provide personalized content recommendations to users. The platform features a modern UI, real-time updates, and seamless integration with existing social media APIs.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "TypeScript", "Rest API'S", "postgresql", "Prisma", "TanStack Query",  "bcrypt"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/social-media-app/tree/main/social-app",
    featured: false,
  },
   {
    name: "Inventory Management System",
    description:
      "Developed an inventory management system that streamlines stock tracking and order processing. The system features a user-friendly interface and real-time data synchronization.",
    tech: ["Reactjs", "Tailwind CSS", "Nodejs", "Expressjs", "javascript", "Rest API'S", "postgresql", "Prisma", "Redux Toolkit", "bcrypt"],
    githubUrl: "https://github.com/Shaheryar-Ashraf-007/Front-end/tree/main/inventory-management-system",
    featured: false,
  },
  
];

export const education = [
  {
    school: "[University / Institute Name]",
    degree: "[Degree, e.g. BS Computer Science]",
    period: "[Year — Year]",
    detail: "[Optional: CGPA, honors, relevant coursework]",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
