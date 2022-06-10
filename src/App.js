import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';


import Portfolio from './Pages/Home/Portfolio';
import Resume from './Pages/Home/Resume';
import Projects from './Pages/Home/Projects';
import Contact from './Pages/Home/Contact';
import About from './Pages/Home/About';
import Blogs from './Pages/Home/Blogs';

function App() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />} />
      </Routes>

    </div>
  );
}

export default App;
