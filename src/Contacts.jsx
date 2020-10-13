import React from 'react';
import './style/contacts.scss'

//icons 
const gmail = require('./img/gmail.png');
const linkedin = require('./img/LI-In-Bug.png');
const github = require('./img/Octocat.png');
const gitlab = require('./img/gitlab-icon-rgb.png');
const dribbble = require('./img/dribbble.png');


export default function Contacts() {
    return (

        <div className="contact-container">

            <div className="contact-list">
                <a href="mailto:jenearly@gmail.com">
                    <img src={gmail} alt="contact via email" />
                </a>
                <a href="https://www.linkedin.com/in/jenearly/" rel="nofollow noopener noreferrer" target="_blank">
                    <img src={linkedin} alt="contact via linkedin" />
                </a>
                <a href="https://github.com/PepperAddict"
                    target="_blank" rel="nofollow noopener noreferrer">
                    <img src={github} alt="contact via Github" />
                </a>
                <a href="https://gitlab.com/Pepperaddict" target="_blank" rel="nofollow noopener noreferrer">
                    <img src={gitlab} alt="Contact Via Gitlab" />
                </a>
                <a href="https://dribbble.com/pepperaddict" target="_blank" rel="nofollow noopener noreferrer">
                    <img src={dribbble} alt="Dribble Portfolio Link" />
                </a>
            </div>
        </div>
    )
}