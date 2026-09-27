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
  resumeUrl: "#",
  social: {
    github: "https://github.com/[your-username]",
    linkedin: "https://linkedin.com/in/[your-username]",
    leetcode: "https://leetcode.com/[your-username]",
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
    role: "Software Development Intern",
    company: "Zynvex Solutions",
    period: "2026 — Present",
    current: true,
    points: [
      "[Add what you're building or maintaining at Zynvex — e.g. features shipped, stack used]",
      "[Add a collaboration detail — team size, process, tools]",
    ],
  },
  {
    role: "Technology Intern",
    company: "Bookme.pk",
    period: "8 months",
    current: false,
    points: [
      "[Add a concrete task or feature you worked on at Bookme.pk]",
      "[Add an impact/result — performance, bug fixes, users affected]",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Taimoor Engineering & Ceramics",
    period: "[Month Year — Month Year]",
    current: false,
    points: [
      "[Describe the website/app you built for this client]",
      "[Add the stack you used and the outcome for the client]",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Nadeem Enterprises",
    period: "[Month Year — Month Year]",
    current: false,
    points: [
      "[Describe the website/app you built for this client]",
      "[Add the stack you used and the outcome for the client]",
    ],
  },
];

export const projects = [
  {
    name: "AI Powered Cloud-based CI/CD pipeline on SAAS-based LMS",
    description:
      "[One or two sentences on what this project does and the problem it solves.]",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "[Project Two]",
    description:
      "[One or two sentences on what this project does and the problem it solves.]",
    tech: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "[Project Three]",
    description:
      "[One or two sentences on what this project does and the problem it solves.]",
    tech: ["Python", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
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
