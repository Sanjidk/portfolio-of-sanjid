import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const mainMenu = <>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/design">Design</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    return (
        <div className="navbar bg-black">
            <div className="navbar-center lg:navbar-start text-white">
                <div className="dropdown bg-white rounded-lg text-black">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                        {mainMenu}
                    </ul>
                </div>
                    <div className=''> 
                        <p className='lg:text-4xl font-bold ml-28 text-red-600'>Portfolio of<span className='text-white'> SANJID</span>
                        </p>
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