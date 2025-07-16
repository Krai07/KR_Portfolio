import navbar from './components/navbar';
import Home from './section/Home';
import About from './section/About';
import Education from './section/Education';
import WorkExp from './section/WorkExp';
import Projects from './section/Projects';
import Contact from './section/Contact';

function App() {
  return (
    <div className="App bg-[#f9f4e8] text-[#4a3f35]">
      <navbar />

      <main>
        <Home />
        <About />
        <Education />
        <WorkExp />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;