import './Home.css';
import { FaArrowDown } from 'react-icons/fa';

function Home() {
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
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn outline">Contact Me</a>
        </div>
      </div>

      {/* Optional: Right side - Add an image or illustration */}
      <div className="profile-img">
        {/* Example: <img src="yourImage.png" alt="Profile" /> */}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-down">
        <FaArrowDown />
      </div>
    </section>
  );
}

export default Home;
