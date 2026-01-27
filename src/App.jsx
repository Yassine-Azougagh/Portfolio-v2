import { motion } from "framer-motion";
import { CalendarRange, Github, Linkedin, Mail, MapPin } from "lucide-react";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="flex justify-between items-center px-6 md:px-20 py-4">
          <span className="font-bold text-lg">Jack.dev</span>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-indigo-400">About</a>
            <a href="#projects" className="hover:text-indigo-400">Projects</a>
            <a href="#skills" className="hover:text-indigo-400">Skills</a>
            <a href="#experience" className="hover:text-indigo-400">Experience</a>
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </div>
        </div>
      </nav>

      <div className="px-6 md:px-20 pt-24">
        {/* HERO */}
        <section id="about" className="min-h-screen flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I'm <span className="text-indigo-400">Jack</span> 👋
          </motion.h1>
          <p className="text-gray-400 max-w-xl text-lg">
            Full‑stack developer specializing in Spring Boot & Angular / React.
            I build secure, scalable and cleanly‑architected applications.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#projects" className="px-6 py-3 bg-indigo-500 rounded-xl">Projects</a>
            <a href="#contact" className="px-6 py-3 border border-gray-700 rounded-xl">Contact</a>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24">
          <h2 className="text-3xl font-semibold mb-12">Experience</h2>
          <div className="space-y-6">
            {experience.map((e) => (
              <div className="bg-gray-900 p-6 rounded-2xl flex gap-2">
                <img src={e.icon} alt="company icon" className="w-25 h-25 rounded-2xl " />
                <div>
                  <h3 className="font-semibold">{e.title} • {e.role}</h3>
                  <div className="flex gap-3 text-sm">
                    {e.stack.map((s) => (
                      <span key={s} className="px-3 py-1 bg-gray-800 rounded-full">{s}</span>
                    ))}
                  </div>
                  <div className="p-2 flex gap-2 flex-col">
                    <p className="text-gray-400 text-sm">{e.company} • {e.type}</p>
                    <p className="text-gray-400 text-sm flex gap-1 items-center">
                      <CalendarRange /> {e.date}
                    </p>
                    <p className="text-gray-400 text-sm flex gap-1 items-center"><MapPin /> {e.adresse}</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-2 pb-2">
                    {e.description}
                  </p>
                  <ul className="list-disc pl-4">
                    {e.Highlights.map((hightlight) => (
                      <li><span className="text-gray-500 text-sm mt-2">{hightlight}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <h2 className="text-3xl font-semibold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={p.title}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 mb-4">{p.desc}</p>
                <div className="flex gap-3 text-sm">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-gray-800 rounded-full">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* SKILLS */}
        <section id="skills" className="py-24">
          <h2 className="text-3xl font-semibold mb-12">Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((s) => (
              <div key={s.title} className="bg-gray-900 p-6 rounded-2xl">
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-3xl font-semibold mb-6">Let's work together</h2>
          <p className="text-gray-400 mb-8">Open to full‑stack & backend roles.</p>
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/Yassine-Azougagh" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/yassine-azougagh-026240214" target="_blank"><Linkedin /></a>
            <a href="yassine.azougagh2001@gmail.com"><Mail /></a>
          </div>
        </section>
      </div>
    </div>
  );
}

const skills = [
  {
    title: "Backend",
    items: "Java, Spring Boot, Spring Security, JPA, Hibernate, OAuth2, Microservices",
  },
  {
    title: "Frontend",
    items: "Angular, React, TypeScript, Tailwind CSS, HTML, CSS",
  },
  {
    title: "Database & Tools",
    items: "PostgreSQL, Oracle, Git, Docker, REST APIs",
  },
];

const projects = [
  {
    title: "Secure Form Platform",
    desc: "Dynamic forms with role‑based access and OAuth2 security.",
    stack: ["Angular", "Spring Boot", "OAuth2"],
  },
  {
    title: "Microservice Travel Planner",
    desc: "Distributed system with API gateway, auth, and async processing.",
    stack: ["Spring Cloud", "React", "PostgreSQL"],
  },
  {
    title: "Graph Visualizer",
    desc: "Interactive graph data‑structure visualizer built from scratch.",
    stack: ["Angular", "TypeScript"],
  },
];

const experience = [
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
    date: 'Aug 2022 - 1 mois',
    adresse: 'Khouribga, Béni Mellal-Khénifra, Morocco',
    icon: '/ocp_logo.jpg'
  }
]