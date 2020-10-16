import React from 'react';
import './style/skills.scss'

export default function Skills(props) {


    return (
        <div className="skills">
            <div className="skills-container">
                <div>
                    <h3>Languages and Frameworks</h3>
                    <ul>
                        {props.languages.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                    </div>

                <div>
                    <h3>Tools and Services</h3>
                    <ul>
                        {props.tools.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </div>)
}