import { motion } from "framer-motion";
import "./WorkExp.css";

const experiences = [
  {
    id: 1,
    role: "Consultant",
    company: "MindCraft Software Pvt Ltd",
    duration: "Sep 2024 - Present",
    description: "Developed scalable web apps with React and Node.js, optimized APIs, and led team collaborations.",
  },
  {
    id: 2,
    role: "Associate Consultant",
    company: "MindCraft Software Pvt Ltd",
    duration: "Aug 2023 - Sep 2024",
    description: "Built dynamic UIs, improved accessibility, and implemented animations for smooth user experiences.",
  },
  {
    id: 3,
    role: "Trainee - CyberSecurity",
    company: "TataStrive",
    duration: "April 2023 - Aug 2023",
    description: "Assisted in backend development and testing, gaining hands-on experience in Agile methodology.",
  },
];

function WorkExp() {
  return (
    <section id="work" className="work-exp">
      <h2 className="work-title">Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className={`timeline-card ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }} 
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default WorkExp;
