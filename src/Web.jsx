import React, { useEffect, useState, useRef, Fragment } from 'react';
import { projects } from './helpers/projects.js';
import './style/web.scss';
import { useStyles } from './helpers/lightDark.js';

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
    const [num, setNum] = useState(1);
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

            {projt.slice(num - 1, num).map((proj, key) => {
                return <div key={key} id={"project-" + key} className="project-container">
                    <h1>Web Portfolio</h1>
                    <h2 className="control-header">
                        <span className={num <= 1 ? 'inactive-button' : 'act-button prev'} ref={prev} onClick={() => prevProj()}>❮</span>
                        <span className="header-text">{proj.name} </span>
                        <span className={projt.length <= num ? 'inactive-button' : 'act-button next'} ref={next} onClick={() => nextProj()}>❯</span>
                    </h2>


                    <div className="top-right">
                        {props.selectedTag && <p><strong>Filtered Tag:</strong> <span className="gold-text">{props.selectedTag}</span></p>}
                        <button onClick={() => { setNum(1); props.setSelectedTag(null) }}>Reset</button>
                    </div>

                    <div className="desc-container">
                        {proj.description.map((desc, key) => <p key={key} dangerouslySetInnerHTML={{ __html: desc }} />)}
                        <div className="preview-image">
                            {currentImage && currentImage.type === "video" ? <iframe src={currentImage.link} title={currentImage.alt} /> :

                                <a href={(currentImage) ? currentImage.link : proj.images[0].link} target="_blank" rel="noopener noreferrer"><img src={(currentImage) ? currentImage.link : proj.images[0].link} /></a>

                            } </div>

                    </div>

                    <div className="links-container">
                        <h3>Links</h3> {proj.links.install && <a href={proj.links.install} target="_blank" rel="noopener noreferrer" >Install App</a>}
                        {proj.links.website && <a href={proj.links.website} target="_blank" rel="noopener noreferrer" >Live Website</a>}
                        {proj.links.openSource && <a href={proj.links.openSource} target="_blank" rel="noopener noreferrer">Open Source</a>}
                        {proj.links.demoVideo && <a href={proj.links.demoVideo} target="_blank" rel="noopener noreferrer">Demo Video</a>}
                    </div>

                    <div className="tags-container">
                        <h3>Tags</h3>
                        <div className="tags">
                            {proj.tags.sort().map((tag, key) => <span className={(props.selectedTag === tag) ? "active-tag" : "normal-tag"} onClick={() => props.setSelectedTag(tag)} key={key}>{tag}</span>)}
                        </div>
                    </div>
                    <div className="proj-image-container">
                        <h3>Images:</h3>
                        <div key={key} className="proj-image">

                            {proj.images.map((image, key) => <Image image={image} key={key} setCurrentImage={setCurrentImage} />)}
                            {proj.videos && proj.videos.map((vids, key) => <span key={key} onClick={() => setCurrentImage({ link: vids.link, alt: vids.alt, type: "video" })} href={vids.link} target="_blank" rel="noopener noreferrer">{vids.alt}</span>)}
                        </div>
                    </div>
                </div>
            })}
            {/* <div className="next-prev">
                <span className={num <= 1 ? 'inactive-button' : 'active-button prev-b'} ref={prev} onClick={() => prevProj()}>❮</span>
                <span className={projt.length <= num ? 'inactive-button' : 'active-button next-b'} ref={next} onClick={() => nextProj()}>❯</span>
            </div> */}

        </div>)
}