import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./WorkExp.css";

const experiences = [
  { id: 1, company: "MindCraft Software", role: "Consultant", duration: "Sep 2024 - Present", description: "Developed backend microservices for Kotak Asset Management Corporation using SpringBoot and deployed using CI/CD pipelines. Developed frontend for SBI life insurance using AngularTs and deployed updated builds on WasAdmin using Jenkins" },
  { id: 2, company: "MindCraft Software", role: "Associate Consultant", duration: "Aug 2023 - Aug 2024", description: "Built a Generative AI-powered document search engine using local OCR and MiniLM embeddings, enabling semantic parsing across 100+ insurance records with improved retrieval" },
  { id: 3, company: "Tata Strive", role: "Trainee- CyberSecurity", duration: "April 2023 - Aug 2024", description: "Built scalable APIs and integrated database solutions with MongoDB." },
];

const WorkExperience = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id= "work" className="work-experience" ref={containerRef}>
      <h2 className="workexp-title">Work Experience</h2>
      <div className="timeline">
        {/* Center vertical progressive line */}
        <motion.div className="timeline-line" style={{ scaleY: pathLength }} />

        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <motion.div
              className="timeline-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}</p>
              <span className="duration">{exp.duration}</span>
              <p className="description">{exp.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
