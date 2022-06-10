import React from 'react';
import sanju from '../../img/sanjid.png';

const About = () => {
    return (
        <div>
            <div className="hero  bg-black mt-0.5 rounded-lg text-white mt-1">
                <div className="hero-content flex-col lg:flex-row gap-20">
                    <div>
                        <img src={sanju} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className=''>
                        <h1 className="text-3xl font-bold">Hi, I'm MD. MAHMUD SANJID </h1>
                        <br />
                        <p>I'm from Savar at Dhaka in Bangladesh. I have completed Bsc. in computer science and engineering from International University of
                            Business Agriculture and Technology ( IUBAT ) in Uttara, Dhaka. Now i admit in Jahangirnagar University for MSc.
                        </p>
                        <br />
                        <p>
                            I have learned from last one and half years a few web
                            related technologies and programming languages
                            like HTML5, CSS3, React Bootstrap, Tailwind CSS, JavaScript,
                            React.js, DaisyUI, NodeJS, ExpressJS, MongoDB, Firebase Authentication system etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;