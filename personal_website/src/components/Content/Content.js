import React from 'react';
import './Content.css';
import ToggleSidebar from '../Content/ToggleSidebar/ToggleSidebar';
import TableOfContents from '../Content/TableOfContents/TableOfContents';
import Philosophy from '../Content/Philosophy/Philosophy';
import Interests from '../Content/Interests/Interests';
import EducationAndTraining from '../Content/EducationAndTraining/EducationAndTraining';
import CurrentProjects from '../Content/CurrentProjects/CurrentProjects';
import Tutorials from '../Content/Tutorials/Tutorials';
import ContactInfo from '../Content/ContactInfo/ContactInfo';


const Content = () => {
    return (
        <div id="content">
            <ToggleSidebar />
            <TableOfContents />
            <Philosophy />
            <Interests />
            <EducationAndTraining />
            <CurrentProjects />
            <Tutorials />
            <ContactInfo />
            {/*
            
            */}
        </div>
    );
}

export default Content;