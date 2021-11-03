import React from 'react';
import './Footer.scss';

import LinkedinIcon from '../../assets/icons/logo-linkedin--white.svg';
import InstagramIcon from '../../assets/icons/logo-instagram.svg';
import GithubIcon from '../../assets/icons/logo-github--white.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-seperator" />
            <div className="footer-content">
                <span className="allRightsReserved">Developed by © Oguzhan Tuna. All Rights Reserved.</span>
                <div className="iconContainer">
                    <a className="icon" href="https://github.com/oguzhanntuna" target="_blank" rel="noreferrer" >
                        <img src={GithubIcon} alt="github" />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/oguzhanatuna/" target="_blank" rel="noreferrer" >
                        <img src={LinkedinIcon} alt="linkedin" />
                    </a>
                    <a className="icon" href="https://www.instagram.com/oguzhanntuna/" target="_blank" rel="noreferrer" >
                        <img src={InstagramIcon} alt="instagram" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;