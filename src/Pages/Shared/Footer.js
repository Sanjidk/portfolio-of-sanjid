import React from 'react';
import linkedin from "../../img/icon/linkedin.png"
import facebook from "../../img/icon/facebook.png"
import skype from "../../img/icon/skype.png"

const Footer = () => {
    return (
        <footer className="footer footer-center p-8 bg-black text-white mt-2">

            <div className="grid grid-flow-col gap-4">
                <a href="https://www.facebook.com/moshiur.rahaman.71271" target="blank">
                    <img className='w-10 mb-2' src={facebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/mahmud-sanjid/" target="blank">
                    <img className='w-12' src={linkedin} alt="" />
                </a>
                <a href="https://join.skype.com/invite/sq8nWLgfdlUm" target="blank">
                    <img className='w-12' src={skype} alt="" />
                </a>
            </div>

            <div>
                <p>Copyright © 2023 - All right reserved by Mahmud Sanjid</p>
            </div>
        </footer>
    );
};

export default Footer;