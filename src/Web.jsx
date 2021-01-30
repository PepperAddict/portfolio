import React, { useEffect, useState, useRef, Fragment } from 'react';
import { projects } from './helpers/projects.js';
import './style/web.scss';
import { useStyles } from './helpers/lightDark.js';
import ProjNav from './ProjNav';
import DisplayWeb from './DisplayWeb'



export default function Web(props) {
    const classes = useStyles();
    const [projt, setProj] = useState(projects);
    const [num, setNum] = useState(0);
    const prev = useRef();
    const next = useRef();

    useEffect(() => {

        let projArr;
        if (props.selectedTag) {
            projArr = []
            for (let i of projects) {
                for (let t of i.tags) {
                    if (t === props.selectedTag) {
                        projArr.push(i)
                    }
                }
            }
            setProj(projArr)
        }
    }, [props.selectedTag])

    const nextProj = () => {
        if (projt.length > num) {
            setNum(num + 1)
        }
    }

    const prevProj = () => {
        if (num > 0) {
            setNum(num - 1)

        }
    }

    return (
        <div className={(props.dark === true) ? classes.dark + " web-container" : classes.light + " web-container"}>
            <div className="top bg">
                <div className="top-container two-column">
                    <div className="title">
                        <h1>Web Portfolio</h1>
                        <div className="arrows">
                            <span className={num <= 0 ? 'act-button prev inactive' : 'act-button prev'} ref={prev} onClick={() => (num <= 0) ? null : prevProj()}>❮</span>
                            <span className={(projt.length - 1) <= num ? 'act-button next inactive' : 'act-button next'} ref={next} onClick={() => (projt.length - 1) <= num ? null : nextProj()}>❯</span>
                        </div>
                    </div>

                    <div className="filter">
                        <p>Filter By</p>
                        <div className="filter-section">
                            {props.selectedTag ?
                                <span className="active-tag">
                                    {props.selectedTag}
                                </span> : <span>
                                    none
                            </span>}

                            <button onClick={() => { setNum(0); props.setSelectedTag(null) }}>⮿</button>
                            <select name="skills" id="skills" onChange={e => { props.setSelectedTag(e.target.value); console.log(e.target.value) }}>
                                <option value="Tags">Tags</option>

                                {props.allSkills.map((skill, key) => {
                                    return <option className="option" value={skill} key={key}>{skill}</option>
                                })}
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            {projt.length > 0 && (
                <div className="main-container">

                    <ProjNav proj={projt} setCurrentProj={setNum} num={num} />
                    <DisplayWeb proj={projt[num]} num={num} projt={projt} selectedTag={props.selectedTag} setSelectedTag={props.setSelectedTag} />
                </div>
            )}

        </div>)
}