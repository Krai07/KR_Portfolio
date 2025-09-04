import React from "react";
import "./About.css";
import SkillMarquee from "../../components/SkillMarquee/SkillMarquee";

const About = () => {
  return (
    <section id= "about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        I’m a passionate Software Developer with expertise in building scalable
        applications, modern web solutions, and backend systems. My focus is on
        crafting clean, efficient, and impactful code while staying up-to-date
        with the latest technologies.
      </p>

      {}
      <SkillMarquee />
    </section>
  );
};

export default About;
