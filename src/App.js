import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header';


import Portfolio from './Pages/Home/Portfolio';
import Resume from './Pages/Home/Resume';
import Projects from './Pages/Home/Projects';
import Contact from './Pages/Home/Contact';
import About from './Pages/Home/About';
import Design from './Pages/Home/Design';


function App() {
  return (
    <div className='bg-gray-900'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="profile" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="project" element={<Projects />} />
        <Route path="design" element={<Design />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
