import React from 'react';
import sanju from '../../img/sanju.jpg';

const Resume = () => {
    return (
        <div>
            <div className="hero text-white">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div>
                        <img src={sanju} className="rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold"> Hi, I'm <span className='text-rose-600'> MAHMUD SANJID</span> </h1>
                        <h1 className="text-2xl text-slate-300 font-bold">DESIGNER & DEVELOPER</h1>
                        <div className='w-80'>
                            <p className="py-6">I like to create perfect and functional websites. I have done a number of projects. For increasing designing skills, i have learned Adobe PhotoShop and Illustrator. I'm very much passionate to take challenges for learning new technologies.</p>

                            <p className='mb-2'>Here is my Resume..</p>
                        </div>

                        <a target='_blank' rel="noreferrer" href="https://drive.google.com/drive/folders/1HsbLte1rrh7zt3N6SemhCDwMgXUB7riD?usp=share_link">
                        <button  className="btn btn-error text-white font-bold">View Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;