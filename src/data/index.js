export const NAV_LINKS = ["Home", "Services", "About", "Experience", "My_Work", "Contact"];

export const SKILLS = [
  { name: "MongoDB", level: 90 },
  { name: "Express.js", level: 88 },
  { name: "React.js", level: 92 },
  { name: "Node.js", level: 87 },
  { name: "JavaScript", level: 95 },
  { name: "REST APIs", level: 90 },
];

export const SERVICES = [
  {
    icon: "🖥️",
    title: "Full Stack Development",
    desc: "End-to-end web apps with React frontends and Node/Express backends powered by MongoDB.",
  },
  {
    icon: "🔌",
    title: "REST API Design",
    desc: "Robust, scalable RESTful APIs with clean architecture, authentication & documentation.",
  },
  {
    icon: "⚛️",
    title: "React UI/UX",
    desc: "Interactive, responsive user interfaces with React, hooks, and modern state management.",
  },
  {
    icon: "🗄️",
    title: "Database Architecture",
    desc: "MongoDB schema design, indexing strategies, and performance optimization.",
  },
];

export const EXPERIENCES = [
  {
    title: "MERN Stack Developer",
    company: "Novem Controls Pvt. Ltd.",
    duration: "2026 – Present · Full Time",
    current: true,
    desc: "Building and maintaining industrial control software solutions. Developing real-time dashboards, REST APIs, and responsive React UIs for monitoring and managing control systems. Collaborating cross-functionally to deliver scalable, production-grade applications.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "REST API"],
  }
];

export const PROJECTS = [
 {
  title: "Novem Controls",
  tag: "MERN Stack",
  desc: "Developed and deployed the official company website for Novem Controls using the MERN stack. Built responsive UI, contact forms, email integration, and dynamic features to enhance the company's online presence. Website: novemcontrol.com",
  tech: ["React", "Node.js", "MongoDB", "Resend"],
  color: "#ff6a00",
  link: "https://novemcontrol.com"
},
 {
  title: "Face Attendance System",
  tag: "Full Stack",
  desc: "Developed a face recognition-based attendance management system with secure authentication, real-time attendance tracking, student management, and automated record keeping.",
  tech: ["React", "Express", "MongoDB", "JWT"],
  color: "#ee0979",
  link: "https://attendance-system-4qmr.vercel.app/attendance"
},
  {
    title: "E-Commerce Platform",
    tag: "MERN Stack",
    desc: "Feature-rich e-commerce app with product listings, cart, payments integration and order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    color: "#11998e",
  },
  {
    title: "Task Management App",
    tag: "Web App",
    desc: "Kanban-style task management tool with drag-and-drop, team collaboration and deadline tracking.",
    tech: ["React", "Express", "MongoDB", "Redis"],
    color: "#4776e6",
  },
];
