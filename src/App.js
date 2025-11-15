import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './section/Home/Home';
import About from './section/About/About';
import Education from './section/Education/Education';
import Work from './section/WorkExp/WorkExp';
import Projects from './section/Projects/Projects';
import Contact from './section/Contact/Contact';
import './index.css'; 

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isReady ? (
        <>
          <Navbar />
          <main>
            <Home />
            <About />
            <Education />
            <Work />
            <Projects />
            <Contact />
          </main>
        </>
      ) : (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
