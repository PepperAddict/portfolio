import React, { useState, Fragment } from 'react';


function Image(props) {
    const [hovered, setHovered] = useState(false);


    return <Fragment>
        <span target="_blank" rel="noopener noreferrer" onClick={() => props.setCurrentImage({ link: props.image.link, type: "image", alt: props.image.alt })} onMouseOver={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <img src={props.image.link} alt={props.image.alt} />
            {hovered && <span className="alt-show">{props.image.alt}</span>}
        </span>
    </Fragment>
}
export default function DisplayWeb({ num, proj, selectedTag, setSelectedTag }) {
    const [modal, setModal] = useState(null)
    return (
        <div key={num} id={"project-" + num} className="project-container">
            <h2 className="control-header">
                <span className="header-text">{proj.name} </span>

            </h2>
            <div className="desc-container">
                {proj.description.map((desc, key) => <p key={key} dangerouslySetInnerHTML={{ __html: desc }} />)}


            </div>

            <div className="links-container">
                <h3>Access</h3> {proj.links.install && <a tabIndex="0" href={proj.links.install} target="_blank" rel="noopener noreferrer" >Install App</a>}
                {proj.links.website && <a tabIndex="1" href={proj.links.website} target="_blank" rel="noopener noreferrer" >Live Website</a>}
                {proj.links.openSource && <a tabIndex="2" href={proj.links.openSource} target="_blank" rel="noopener noreferrer">Open Source</a>}
                {proj.links.demoVideo && <a tabIndex="3" href={proj.links.demoVideo} target="_blank" rel="noopener noreferrer">Demo Video</a>}
            </div>

            <div className="tags-container">
                <h3>Tags</h3>
                <div className="tags">
                    {proj.tags.sort().map((tag, key) => <span className={(selectedTag === tag) ? "active-tag" : "normal-tag"} onClick={() => setSelectedTag(tag)} key={key}>{tag}</span>)}
                </div>
            </div>
            <div className="proj-image-container">
                <h3>Images:</h3>
                <div key={num} className="proj-image">

                    {proj.images.map((image, key) => <Image image={image} key={key} setModal={setModal} />)}
                    {proj.videos && proj.videos.map((vids, key) => <span key={key} onClick={() => setModal({ link: vids.link, alt: vids.alt, type: "video" })} href={vids.link} target="_blank" rel="noopener noreferrer">{vids.alt}</span>)}
                </div>
            </div>
        </div>
    )
}