import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "VulneraX",
    tagline: "DevSecOps pipeline with custom security integrations",
    tech: ["React", "Spring Boot", "MongoDB", "SonarQube"],
    description: "Built a CI/CD pipeline with automated code analysis and vulnerability detection.",
  },
  {
    id: 2,
    title: " DLPFS Client",
    tagline: "Transformer-based text classification",
    tech: ["Python", "TensorFlow", "NLP"],
    description: "Developed a transformer model for text classification with high accuracy.",
    github: "https://github.com/Krai07/DLPFS-client",
  },
  {
    id: 3,
    title: "DLPFS Server",
    tagline: "Data Leakage Prevention File System",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description: "Created a task management tool with authentication and real-time updates.",
    github: "https://github.com/Krai07/DLPFS-server",

  },
  {
    id: 4,
    title: "Developer's Community",
    tagline: "Conversational AI for support",
    tech: ["Python", "Flask", "Rasa"],
    description: "Built an AI-powered chatbot to automate support queries.",
    github: "https://github.com/Krai07/KKAVProject",
  },
  {
    id: 5,
    title: "Portfolio Website",
    tagline: "Interactive developer portfolio",
    tech: ["React", "Framer Motion", "CSS"],
    description: "Designed and developed a modern glassy portfolio with animations for myself",
    github: "https://github.com/Krai07/KR_Portfolio",
  },
];

const Projects = () => {
  // Duplicate projects for seamless infinite scroll
  const loopProjects = [...projects, ...projects];

  return (
    <section className="projects-section">
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
                <span key={i} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
