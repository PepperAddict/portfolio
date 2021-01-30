import React, { useState, useEffect } from 'react';
import './style/skills.scss'
import { useStyles } from './helpers/lightDark.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Skills(props) {
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        setLeaving(false)
    }, [])

    useEffect(() => {
        return () => {
            setLeaving(true)
        }
    })

    const classes = useStyles();

    return (
        <div className={(props.dark == true ) ? classes.dark + " skills": classes.light + ' skills'}>

            <div className="skills-container bg border">
                <span>
                    <h1>Skills</h1>
                    <h2>Development, tools, and art skills</h2>
                </span>
                <div className="skill-content border">
                    <h4>Languages and Frameworks</h4>
                    <ul className="border">
                        {props.languages.map((item, key) => <Link key={key} to='/portfolio/web'><li className="border bg border color hoverbg" onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
                <div className="skill-content border">
                    <h4>Tools and Services</h4>
                    <ul className="border">
                        {props.tools.map((item, key) => <Link key={key} to='/portfolio/web'><li className="border bg border color hoverbg" onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}