import React, { useEffect, useState, useRef } from 'react';
import { projects } from './helpers/projects.js';
import './style/web.scss';
import { useStyles } from './helpers/lightDark.js';

export default function Web(props) {
    const classes = useStyles();
    const [projt, setProj] = useState(projects);
    const [num, setNum] = useState(1);
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
        if (num > 1) {
            setNum(num - 1)
        }
    }

    return (
        <div className={(props.dark === true) ? classes.dark + " web-container": classes.light + " web-container"}>

            <span className={num <= 1 ? 'inactive-button' : 'active-button prev-b'} ref={prev} onClick={() => prevProj()}>❮</span>

            {projt.slice(num - 1, num).map((proj, key) => {
                return <div key={key} id={"project-" + key} className="project-container enter">
                    <h2>Web Portfolio {'›'} <span>{proj.name}</span></h2>
                    {props.selectedTag && <p>Filtered Tag: {props.selectedTag}</p>}
                    <h3>{proj.description.map((desc, key) => <p key={key}>{desc}</p>)}</h3>
                    <div className="links-container">
                        links: {proj.links.install && <a href={proj.links.install}>Install</a>}
                        {proj.links.openSource && <a href={proj.links.openSource}>Open Source</a>}
                        {proj.links.demoVideo && <a href={proj.links.demoVideo}>Demo Video</a>}
                    </div>

                    <div className="tags-container">
                        <h3>Tags</h3>
                        <div className="tags">
                            {proj.tags.map((tag, key) => <span onClick={() => props.setSelectedTag(tag)} key={key}>{tag}</span>)}
                        </div>
                    </div>
                    <div className="proj-image-container">
                        <h3>Images:</h3>
                        <div key={key} className="proj-image">

                            {proj.images.map((image, key) => {
                                return <a key={key} href={image.link} target="_blank" rel="noopener noreferrer" ><img src={image.link} alt={image.alt} /></a>

                            })}
                            {proj.videos && proj.videos.map((vids, key) => <a key={key} href={vids.link} target="_blank" rel="noopener noreferrer">{vids.alt}</a>)}
                        </div>
                    </div>
                </div>
            })}
            <span className={projt.length <= num ? 'inactive-button' : 'active-button next-b'}  ref={next} onClick={() => nextProj()}>❯</span>
        </div>)
}