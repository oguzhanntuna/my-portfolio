import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.scss';

import PageTitle from '../../components/pages/pageTitle/pageTitle';
import GithubIcon from '../../assets/icons/logo-github.svg';
import LinkedinIcon from '../../assets/icons/logo-linkedin.svg';

const AboutPage = () => {

    return (
        <section className="aboutPage">
            <div className="aboutPage-titleContainer">
                <PageTitle title="About" />
            </div>
            <div className="aboutPage-content">
                <div className="aboutPage-shortDescriptionContainer">
                    <div className="aboutPage-shortDescriptionContainer-shortDescription">
                        <span>Hi,</span>
                        <span>I'm Oguzhan Tuna,</span>
                        <span>Front-End Developer.</span>
                        <span>B.Sc. in Electronics and Communication Engineering. Moreover, a self-taught Front-End Developer.</span>
                    </div>
                    <div className="aboutPage-shortDescriptionContainer-iconContainer">
                        <div className="linkedinBorder gradientBorder">
                            <a className="icon" href="https://www.linkedin.com/in/oguzhanatuna/" target="_blank" rel="noreferrer">
                                <img src={LinkedinIcon} alt="linkedin" />
                            </a>
                        </div>
                        <div className="githubBorder gradientBorder">
                            <a className="icon" href="https://github.com/oguzhanntuna" target="_blank" rel="noreferrer">
                                <img src={GithubIcon} alt="github" />
                            </a>
                        </div>
                        <div className="resumeBorder gradientBorder">
                            <a className="resume" href="https://drive.google.com/file/d/1LVmhDWIWVh5o-6bdCvt3jC6_0t4S_RJR/view?usp=sharing" target="_blank" rel="noreferrer">
                                <span>Resume</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="aboutPage-detailedDescription">
                    <div className="aboutPage-detailedDescription-leftPart">
                        <p>I was always interested in software development and tried some languages in different fields of area to find out my interest.</p>
                        <p>
                            While trying to figure out which part of the software development I was most passionate about,
                            I found myself much happier in the <span className="highlightedText singleLine">combination of design and code.</span>
                        </p>
                    </div>
                    <div className="aboutPage-detailedDescription-rightPart">
                        <p>Therefore, I decided to go with the front-end development and achieved to turn my hobby to a full-time job.</p>
                        <p className="highlightedText">I like to code things from scratch, design my own ideas and enjoy bringing them to life.</p>
                    </div>
                </div>
                <div className="aboutPage-currentStatusBorder">
                    <div className="aboutPage-currentStatus">
                        {/* My most recent work experience was at  */}
                        <p className="aboutPage-currentStatus-statusText">Currently I am working at <a href="https://www.resolvetech.com/" target="_blank" rel="noreferrer"><span className="highlightedText singleLine">Resolve Tech Solutions</span></a> as a contractor with a direct client <a href="https://www.cbre.com/" target="_blank" rel="noreferrer"><span className="highlightedText singleLine">CBRE.</span></a></p>
                        <Link to="contact"><p className="aboutPage-currentStatus-openToWork highlightedText"><span>Open to new opportunities</span> →</p></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;