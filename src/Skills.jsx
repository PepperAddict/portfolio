import React, {useState, useEffect} from 'react';
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
 
            <div className={(props.dark === true) ? classes.dark + " skills-container enter" : (props.dark === false) ? classes.light + ' skills-container enter' : (leaving) && 'exit'}>
                <span><h2>Skills</h2>
                <h3>Click on a skill to see a related project.</h3>
                    </span>
                <div className={(props.dark === true) ? classes.indiDark + " skill-content": classes.indiLight + " skill-content"}>
                    <h4>Languages and Frameworks</h4>
                    <ul>
                        {props.languages.map((item, key) => <Link key={key} to='/web'><li onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
                <div className={(props.dark === true) ? classes.indiDark +" skill-content" : classes.indiLight + " skill-content"}>
                    <h4>Tools and Services</h4>
                    <ul>
                        {props.tools.map((item, key) => <Link key={key} to='/web'><li onClick={() => props.setSelectedTag(item)}>{item}</li></Link>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}