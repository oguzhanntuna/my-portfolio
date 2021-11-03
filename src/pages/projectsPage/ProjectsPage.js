import React, { useState } from 'react';
import './ProjectsPage.scss';

import PageTitle from '../../components/pages/pageTitle/pageTitle';
import ProjectItem from '../../components/pages/projects/projectItem/ProjectItem';
import { WEB_PROJECT_ITEMS, MOBILE_PROJECT_ITEMS, PROJECT_FILTERS } from '../../data/static-data';

const ProjectsPage = () => {
    const webProjectItems = useState(WEB_PROJECT_ITEMS)[0];
    const mobileProjectItems = useState(MOBILE_PROJECT_ITEMS)[0];
    const projectFilters = useState(PROJECT_FILTERS)[0];
    const [selectedProjectFilter, setSelectedProjectFilter] = useState(PROJECT_FILTERS[0]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    const setSelectedFilterActive = (filterIndex) => {
        setSelectedFilterIndex(filterIndex);
        setSelectedProjectFilter(projectFilters[filterIndex]);
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
                                    `projectsPage-filterTabs-${item.filterType}Filter ${selectedFilterIndex === index 
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
                <div className="projectsPage-projectItems">
                    { 
                        selectedProjectFilter.filterType === 'web'
                            ? webProjectItems.map((item, index) => (
                                <ProjectItem key={item.title} data={item} index={index} type="web"/>
                            ))  
                            : mobileProjectItems.map((item, index) => (
                                <ProjectItem key={item.title} data={item} index={index} type="mobile"/>
                            ))  
                    }
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;