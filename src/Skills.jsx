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
        <div className="skills">

            <div className={(props.dark === true) ? classes.dark + " skills-container" : (props.dark === false) ? classes.light + ' skills-container' : (leaving) && 'exit'}>
                <span>
                    <h1>Skills</h1>
                    <h2>Development, tools, and art skills</h2>
                </span>
                <div className={(props.dark === true) ? classes.indiDark + " skill-content" : classes.indiLight + " skill-content"}>
                    <h4>Languages and Frameworks</h4>
                    <ul>
                        {props.languages.map((item, key) => <Link key={key} to='/portfolio/web'><li onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
                <div className={(props.dark === true) ? classes.indiDark + " skill-content" : classes.indiLight + " skill-content"}>
                    <h4>Tools and Services</h4>
                    <ul>
                        {props.tools.map((item, key) => <Link key={key} to='/portfolio/web'><li onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}