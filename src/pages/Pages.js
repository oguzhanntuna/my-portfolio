import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './Pages.scss';

import AboutPage from './aboutPage/AboutPage';
import ProjectsPage from './projectsPage/ProjectsPage';
import SkillsPage from './skillsPage/SkillsPage';
import ContactPage from './contactPage/ContactPage';

const Pages = () => {
    const routes = (
        <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/skills" component={SkillsPage} />
            <Route path="/contact" component={ContactPage} />
            <Redirect from="/" to="/about" />
        </Switch>
    )

    return (
        <div className="pages">
            {routes}   
        </div>
    );
};

export default Pages;