import React from 'react';
import sanju from '../../img/sanjid.png';
import Footer from '../Shared/Footer';

const About = () => {
    return (
        <div>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <img src={sanju} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div>
                        <h1 className="text-3xl text-slate-300 font-bold mb-8"> Hi, I'm MAHMUD SANJID </h1>
                        <div className='w-96'>
                            <p>
                                I live at Savar in Dhaka. I have completed my MSc in Computer Science and Engineering from Jahangirnagar University and BSc in Computer Science and Engineering from International University of Business Agriculture and Technology.
                            </p>
                            <br />
                            <p>
                                I have learned web related technologies and programming languages
                                like HTML5, CSS3, React Bootstrap, Tailwind CSS, JavaScript (ES6),
                                React-JS, NodeJS, MongoDB, Firebase, DOM, API etc. I have basic knowledge in Laravel, MySQL, MVC. In designing site, i have learn Adobe Photoshop, Adobe Illustrator, Figma etc.
                            </p>
                        </div>
                    </div>
                </div>
            </div>          
            <Footer></Footer>
        </div>
    );
};

export default About;