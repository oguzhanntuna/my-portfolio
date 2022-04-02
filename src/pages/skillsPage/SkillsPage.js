import React from 'react';
import './SkillsPage.scss';

import PageTitle from '../../components/pages/pageTitle/pageTitle';

const SkillsPage = () => {
    const advancedSkills = ['React.js', 'Redux', 'TypeScript', 'JavaScript', 'Sass', 'HTML5', 'CSS3'];
    const intermediateSkills = ['React Native', 'Firebase', 'Git'];
    const beginnerSkills = ['React Testing Library', 'Jest', 'RxJS', 'Bootstrap', 'jQuery', 'C#', 'Unity' ,'Python' ];

    return (
        <section className="skillsPage">
            <PageTitle title="Skills" />
            <div className="skillsPage-content">
                <div className="techStack">
                    <div className="techStackContainer techStackContainer--advanced">
                        <label>Advanced:</label>
                        <div className="techStackContainer-skills">
                            {
                                advancedSkills.map(advancedSkill => (
                                    <div className="gradientBorder">
                                        <span>{advancedSkill}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="techStack-techStackBottomContainer">
                        <div className="techStackContainer techStackContainer--intermediate">
                            <label>Intermediate:</label>
                            <div className="techStackContainer-skills">
                                {
                                    intermediateSkills.map(intermediateSkill => (
                                        <div className="gradientBorder">
                                            <span>{intermediateSkill}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="techStackContainer techStackContainer--beginner">
                            <label>Beginner:</label>
                            <div className="techStackContainer-skills">
                                {
                                    beginnerSkills.map(beginnerSkill => (
                                        <div className="gradientBorder">
                                            <span>{beginnerSkill}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsPage;