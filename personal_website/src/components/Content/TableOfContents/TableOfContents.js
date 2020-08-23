import React from 'react';
import './TableOfContents.css';

const TableOfContents = () => {
    return (
        <div id="table-of-contents">
            <h2>
                Table of Contents
                <a href="#">Close</a>
            </h2>
            <div id="text-table-of-contents">
                <ul>
                    <li><a href="#philosophy">1. Philosophy</a></li>
                    <li><a href="#interests">2. Interests</a></li>
                    <li><a href="#education-and-training">3. Education and Training</a></li>
                    <li><a href="#current-projects">4. Current Projects</a>
                        <ul>
                            <li><a href="#face-recognition-project">4.1. Face Recognition Project</a></li>
                            <li><a href="#guitarcat-mobile-game">4.2. Guitar Cat Mobile Game</a></li>
                            <li><a href="#naturalselection-mobile-game">4.3. Natural Selection Mobile Game</a></li>
                        </ul>
                    </li>
                    <li><a href="#tutorials">5. Tutorials</a>
                        <ul>
                            <li><a href="#programming-tutorials">5.1. Programming Tutorials</a></li>
                            <li><a href="#other-tutorials">5.1. Other Tutorials</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact-info">6. Contact Info</a></li>
                </ul>
            </div>

        </div>
    );
}

export default TableOfContents;