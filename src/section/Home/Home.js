import './Home.css';
import { FaArrowDown } from 'react-icons/fa';

function Home() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home-section">
      <div className="intro">
        <h1>
          Hi, I'm <span className="highlight">Kshitij Rai</span>
        </h1>
        <h2>Full Stack Developer | AI Enthusiast</h2>
        <p>
          I build smart, responsive applications with a focus on clean code and user-centric design.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn glass-btn">View Projects</a>
          <a href="#contact" className="btn glass-btn outline">Contact Me</a>
        </div>
      </div>

      {/* Right side - Decorative gradient shapes */}
      <div className="right-visual">
        <div className="gradient-shape"></div>
        <div className="gradient-shape small"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down" onClick={scrollToAbout}>
        <FaArrowDown />
      </div>
    </section>
  );
}

export default Home;
