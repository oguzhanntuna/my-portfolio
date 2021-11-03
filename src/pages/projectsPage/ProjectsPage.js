import React, { useEffect, useState } from 'react';
import './ProjectsPage.scss';

import { WEB_PROJECT_ITEMS, MOBILE_PROJECT_ITEMS, PROJECT_FILTERS } from '../../data/static-data';
import PageTitle from '../../components/pages/pageTitle/pageTitle';
import ProjectItem from '../../components/pages/projects/projectItem/ProjectItem';
import LoadingSpinner from '../../components/uı/loadingSpinner/LoadingSpinner';

const ProjectsPage = () => {
    const webProjectItems = useState(WEB_PROJECT_ITEMS)[0];
    const mobileProjectItems = useState(MOBILE_PROJECT_ITEMS)[0];
    const projectFilters = useState(PROJECT_FILTERS)[0];
    const [activeProjectFilter, setActiveProjectFilter] = useState(PROJECT_FILTERS[0]);
    const [activeFilterIndex, setActiveFilterIndex] = useState(0);
    const [fakeLoading, setFakeLoading] = useState(true);

    useEffect(() => {        
        setTimeout(() => { setFakeLoading(false);}, 750);
    }, [activeFilterIndex]);

    const setSelectedFilterActive = (filterIndex) => {
        setFakeLoading(true);
        setActiveFilterIndex(filterIndex);
        setActiveProjectFilter(projectFilters[filterIndex]);
    }

    return (
        <section className="projectsPage">
            <PageTitle title="Projects" />
            <div className="projectsPage-content">
                <div className="projectsPage-filterTabs">
                    {
                        projectFilters.map((item ,index) => (
                            <div 
                                className={
                                    `projectsPage-filterTabs-${item.filterType}Filter ${activeFilterIndex === index 
                                        ? `projectsPage-filterTabs-${item.filterType}Filter--active` 
                                        : ''}`
                                } 
                                onClick={() => setSelectedFilterActive(index)}
                            >
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                </div>
                {
                    fakeLoading
                        ? <>
                            <div className="projectsPage-loadingSpinnerContainer">
                                <LoadingSpinner width='5rem' height='5rem' />
                            </div>
                        </>
                        : <>
                            <div className="projectsPage-projectItems">
                                { 
                                    activeProjectFilter.filterType === 'web'
                                        ? webProjectItems.map((item, index) => (
                                            <ProjectItem key={item.title} data={item} index={index} type="web"/>
                                        ))  
                                        : mobileProjectItems.map((item, index) => (
                                            <ProjectItem key={item.title} data={item} index={index} type="mobile"/>
                                        ))  
                                }
                            </div>
                        </>
                }
            </div>
        </section>
    );
};

export default ProjectsPage;