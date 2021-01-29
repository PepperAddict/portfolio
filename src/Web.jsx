import React, { useEffect, useState, useRef, Fragment } from 'react';
import { projects } from './helpers/projects.js';
import './style/web.scss';
import { useStyles } from './helpers/lightDark.js';
import ProjNav from './ProjNav';
import DisplayWeb from './DisplayWeb'

function Image(props) {
    const [hovered, setHovered] = useState(false);


    return <Fragment>
        <span target="_blank" rel="noopener noreferrer" onClick={() => props.setCurrentImage({ link: props.image.link, type: "image", alt: props.image.alt })} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.image.link} alt={props.image.alt} />
            {hovered && <span className="alt-show">{props.image.alt}</span>}
        </span>
    </Fragment>
}

export default function Web(props) {
    const classes = useStyles();
    const [projt, setProj] = useState(projects);
    const [num, setNum] = useState(0);
    const prev = useRef();
    const next = useRef();
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
        setNum(1)
    }, [])

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
        console.log(num)
        if (projt.length > num) {
            setNum(num + 1)

        }
    }

    const prevProj = () => {
        console.log(num)
        if (num > 1) {
            setNum(num - 1)

        }
    }

    return (
        <div className={(props.dark === true) ? classes.dark + " web-container" : classes.light + " web-container"}>

            <div className="top">
                <div className="title">
                    <h1>Web Portfolio</h1>
                    <div className="arrows">
                        <span className={num <= 0 ? 'inactive-button' : 'act-button prev'} ref={prev} onClick={() => prevProj()}>❮</span>
                        <span className={(projt.length - 1) <= num ? 'inactive-button' : 'act-button next'} ref={next} onClick={() => nextProj()}>❯</span>
                    </div>
                </div>

                <div className="filter">
                    <h3>Filter By</h3>
                    <span>{props.selectedTag}</span>
                    <select name="skills" id="skills" onChange={e => props.setSelectedTag(e.target.value)}>
                        <option value="Tags">Tags</option>
                        <button onClick={() => { setNum(0); props.setSelectedTag(null) }}>Reset</button>
                        {props.allSkills.map((skill, key) => {
                            return <option value={skill} key={key}>{skill}</option>
                        })}
                    </select>

                </div>

            </div>
            <div className="main-container">
                <ProjNav proj={projt} setCurrentProj={setNum} num={num} />
                <DisplayWeb proj={projt[num]} num={num} projt={projt} selectedTag={props.selectedTag} setSelectedTag={props.setSelectedTag} />

            </div>

        </div>)
}