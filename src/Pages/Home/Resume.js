import React from 'react';
import sanjid from '../../img/sanjid2.jpg';

const Resume = () => {
    return (
        <div>
            <div className="hero  bg-black mt-0.5 rounded-lg text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div>
                        <img src={sanjid} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold"> Hi, I'm <span className='text-rose-600'> MD. MAHMUD SANJID</span> </h1>
                        <h1 className="text-2xl font-bold"> MERN Stack | Frontend Web Developer</h1>
                        <div className='w-80'>
                            <p className="py-6">I like to create perfect and functional websites. I have done already a number of projects. I'm passionate about coding and take challenges for learning new technologies.</p>
                        </div>

                        <a target='_blank' href="https://drive.google.com/file/d/1zhqI2DNdLhx_mRaKIzdqCgY-XiQmNjCE/view?usp=sharing">
                        <button  className="btn btn-error text-white font-bold">View Resume</button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;