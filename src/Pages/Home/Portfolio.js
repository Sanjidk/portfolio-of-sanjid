import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import Footer from '../Shared/Footer';

const Portfolio = () => {
    return (
        <div>
            <Resume></Resume>
            <Projects></Projects>
            <Contact></Contact>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;