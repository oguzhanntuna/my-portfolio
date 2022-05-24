import React, { useState, useEffect } from 'react';
import './ProjectItem.scss';

import { useDeviceType } from '../../../../customHooks/useDeviceType';
import { useClickedOutside } from '../../../../customHooks/useClickedOutside';

import GithubIcon from '../../../../assets/icons/logo-github.svg';
import WebsiteIcon from '../../../../assets/icons/logo-website.svg';

const ProjectItem = props => {
    const { 
        data: { 
            title, 
            image, 
            description, 
            technologiesUsed, 
            additionalFeatures, 
            githubLink, 
            websiteLink 
        }, 
        index,
        type
    } = props;
    const deviceType = useDeviceType();
    const { ref, isClickedOutside } = useClickedOutside();
    const [showContentCover, setShowContentCover] = useState(false);

    useEffect(() => {
        if (isClickedOutside) {
            setShowContentCover(false);
        }
    }, [isClickedOutside]);

    const renderProjectItemImage = () => {
        if (type === 'mobile' && image instanceof Array) {

            return (
                <div className="projectItem-imageContainer">
                    {image.map((imageItem, index) => (
                        <img src={imageItem} alt={`project-${index}`} key={`${imageItem}-${index}`}/>
                    ))}
                </div>
            );
        }
        
        return <img src={image} alt={`project-${index}`} />;
    }

    const renderContentCover = () => (
        <div className="projectItem-contentCover">
            <div className="projectItem-description">
                {description}
            </div>
            <div className="projectItem-infoContainer">
                <div className="projectItem-additionalFeatures">
                    {
                        additionalFeatures.length > 0 &&
                        <>
                            <div className="projectItem-additionalFeatures-title">Additional Features:</div>
                            <ul className="projectItem-additionalFeatures-info">
                                { additionalFeatures.map(item => <li>{item}</li>) }
                            </ul>
                        </>
                    }   
                </div>
                <div className="projectItem-technologiesUsed">
                    <div className="projectItem-technologiesUsed-title">Technologies Used:</div>
                    <div className="projectItem-technologiesUsed-info">
                        { technologiesUsed.map(item => <div className="gradientBorder"><span>{item}</span></div>) }
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`projectItem projectItem--${type}`}>
            <label className="projectItem-title">
                {title}
            </label>
            <div 
                className="projectItem-content" 
                onClick={() => setShowContentCover(true)}
                ref={ref}
            >
                <div className={`
                    projectItem-iconsContainer
                    ${deviceType === 'desktop' ? 'projectItem-iconsContainer--desktop' : 'projectItem-iconsContainer--mobile'}
                    ${showContentCover ? 'projectItem-iconsContainer--active' : ''}
                `}>
                    {
                        githubLink !== ''
                            ? (
                                <a className="icon" href={githubLink} target="_blank" rel="noreferrer" >
                                    <img src={GithubIcon} alt="github" />
                                </a>
                            )
                            : <></>
                    }
                    {
                        websiteLink !== ''
                            ? (
                                <a className="icon icon-marginLeft" href={websiteLink} target="_blank" rel="noreferrer" >
                                    <img src={WebsiteIcon} alt="website" />
                                </a>
                            )
                            : <></>
                    }
                </div>
                {
                    deviceType === 'desktop'
                        ? renderContentCover()
                        : showContentCover
                            ? renderContentCover()
                            : <></>
                }
                {renderProjectItemImage()}
            </div>
        </div>
    );
};

export default ProjectItem;