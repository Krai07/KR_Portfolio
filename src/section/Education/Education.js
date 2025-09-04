import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    institution: "XYZ University",
    duration: "2018 - 2022",
  },
  {
    id: 2,
    degree: "Higher Secondary (12th Grade)",
    institution: "ABC Junior College",
    duration: "2016 - 2018",
  },
  {
    id: 3,
    degree: "Secondary School (10th Grade)",
    institution: "DEF High School",
    duration: "2014 - 2016",
  },
];

const Education = () => {
  return (
    <section id= "education" className="education-section">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            className="education-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="edu-dot"></div>
            <div className="edu-card">
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <span className="edu-duration">{edu.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
