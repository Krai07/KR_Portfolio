import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaGithub, FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiTensorflow,
  SiFlask,
  SiRasa,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "VulneraX",
    tagline: "DevSecOps pipeline with custom security integrations",
    tech: [
      { icon: <FaReact color="#61DBFB" />, name: "React" },
      { icon: <SiSpringboot color="#6DB33F" />, name: "Spring Boot" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    ],
    description:
      "Built a CI/CD pipeline with automated code analysis and vulnerability detection.",
    github: "https://github.com/Krai07/VulneraX"
  },
  {
    id: 2,
    title: "DLPFS Client",
    tagline: "Transformer-based text classification",
    tech: [
      { icon: <FaPython color="#3776AB" />, name: "Python" },
      { icon: <SiTensorflow color="#FF6F00" />, name: "TensorFlow" },
    ],
    description:
      "Developed a transformer model for text classification with high accuracy.",
    github: "https://github.com/Krai07/DLPFS-client",
  },
  {
    id: 3,
    title: "DLPFS Server",
    tagline: "Data Leakage Prevention File System",
    tech: [
      { icon: <FaReact color="#61DBFB" />, name: "React" },
      { icon: <FaNodeJs color="#68A063" />, name: "Node.js" },
      { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    ],
    description:
      "Created a task management tool with authentication and real-time updates.",
    github: "https://github.com/Krai07/DLPFS-server",
  },
  {
    id: 4,
    title: "Developer's Community",
    tagline: "Conversational AI for support",
    tech: [
      { icon: <FaPython color="#3776AB" />, name: "Python" },
      { icon: <SiFlask color="#FFFFFF" />, name: "Flask" },
      { icon: <SiRasa color="#5A17EE" />, name: "Rasa" },
    ],
    description: "Built an AI-powered chatbot to automate support queries.",
    github: "https://github.com/Krai07/KKAVProject",
  },
  {
    id: 5,
    title: "Portfolio Website",
    tagline: "Interactive developer portfolio",
    tech: [
      { icon: <FaReact color="#61DBFB" />, name: "React" },
      { icon: <SiCss3 color="#264de4" />, name: "CSS3" },
      { icon: <SiJavascript color="#F7DF1E" />, name: "JavaScript" },
    ],
    description:
      "Designed and developed a modern glassy portfolio with animations for myself.",
    github: "https://github.com/Krai07/KR_Portfolio",
  },
];

const Projects = () => {
  const loopProjects = [...projects, ...projects];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <motion.div
        className="projects-carousel"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopProjects.map((project) => (
          <div key={project.id + Math.random()} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>

            <div className="tech-stack">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-icon" data-tooltip={t.name}>
                  {t.icon}
                </span>
              ))}
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                >
                  <FaGithub size={28} />
                </a>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
