import React from 'react';
import eid from '../../img/design/Eid.png';
import logo from '../../img/design/logo.png';
import family from '../../img/design/family.png';
import may from '../../img/design/may.jpg';
import gw from '../../img/design/gw.png';
import cv from '../../img/design/cv.jpg';
import Footer from '../Shared/Footer';

const Design = () => {
    return (
        <div>
            <h1 className='font-bold text-center text-slate-300 text-2xl lg:text-4xl lg:my-4'> VISUAL LIST </h1>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={eid} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>EID AL ADHA 2023</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={logo} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>MEN'S SUIT LOGO</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={family} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>FAMILY DAY 2023</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={may} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>MAY DAY 2023</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={gw} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>GLOBAL WARMING</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
                <div className="card card-side p-4 m-2 text-white bg-slate-800">
                    <img className='w-2/3' src={cv} alt="eid" />
                    <div className="p-4">
                        <h2 text-2xl>CV / RESUME</h2>
                        <a target='_blank' href="https://drive.google.com/drive/folders/1LhIOTS_S3NNlA4fprsf-QMZ4x_0bbNY6?usp=drive_link">
                            <button className="btn btn-primary text-white mt-12">Main File</button>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Design;