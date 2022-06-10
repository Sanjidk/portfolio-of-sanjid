import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const mainMenu = <>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-black rounded-lg">
            <div className="navbar-start text-white">
                <div className="dropdown bg-white rounded-lg text-black">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                        {mainMenu}
                    </ul>
                </div>
                <div className='flex items-center text-white'>
                    <div>
                        <p className='text-4xl font-bold ml-32'>Port<span className='text-red-600'>folio</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="navbar-center text-white hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {mainMenu}
                </ul>
            </div>
        </div>
    );
};

export default Header;