import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-left"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <h2>Let’s Connect</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="contact-info">
          <p>
            <FaEnvelope className="icon" /> yourmail@example.com
          </p>
          <p>
            <FaPhone className="icon" /> +91 98765 43210
          </p>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/kshitij-rai-07052001/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="contact-form"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <form>
          <h3>Send a Message</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
