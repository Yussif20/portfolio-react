import VideoBackground from './components/VideoBackground';
import Header from './components/Header';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white/80 dark:bg-black/80 text-black dark:text-white">
      <VideoBackground />
      <Header />
      <Bio />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
