import React, { useState, useEffect } from 'react';

function Modal({ modal, setModal }) {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [])

    return (
        <div className="modal bg" id="modal">
            <span className="close bg" onClick={() => setModal(null)}>⮾</span>
            <div className="main-content">
                <embed src={modal.link} height={modal.type === 'video' ? '500px' : '100%'} />
                <span className="description">
                    {modal.alt}
                    <span className="close-2" onClick={() => setModal(null)}>close</span>
                </span>
            </div>

        </div>
    )
}

export default function DisplayWeb({ num, proj, selectedTag, setSelectedTag }) {
    const [modal, setModal] = useState(null)
    return (
        <div key={num} id={"project-" + num} className="project-container">
            <h2 className="control-header">
                <span className="header-text">{proj.name} </span>

            </h2>
            <div className="links-container">
                <h3>Access:</h3> {proj.links.install && <a tabIndex="0" href={proj.links.install} target="_blank" rel="noopener noreferrer" >Install</a>}
                {proj.links.website && <a tabIndex="1" href={proj.links.website} target="_blank" rel="noopener noreferrer" >Website</a>}
                {proj.links.openSource && <a tabIndex="2" href={proj.links.openSource} target="_blank" rel="noopener noreferrer">Source Code</a>}
                {proj.links.demoVideo && <a tabIndex="3" href={proj.links.demoVideo} target="_blank" rel="noopener noreferrer">Demo Video</a>}
            </div>       

            <div className="container">
                {proj.description.map((desc, key) => <p key={key} dangerouslySetInnerHTML={{ __html: desc }} />)}
            </div>

            <div className="container">
                <h3>Tags:</h3>
                <div className="tags">
                    {proj.tags.sort().map((tag, key) => <span className={(selectedTag === tag) ? "active tag bg border" : "tag bg border"} onClick={() => setSelectedTag(tag)} key={key}>{tag}</span>)}
                </div>
            </div>

            <div className="container">
                <h3>Images{proj.videos && ' & Videos'}:</h3>
                <div key={num} className="proj-image">
                    {proj.images.map((image, key) => 
                    <span className="bg border" target="_blank" key={key} rel="noopener noreferrer" onClick={() => setModal({ link: image.link[1], type: "image", alt: image.alt })} >
                        <img src={image.link[0]} alt={image.alt} />
                    </span>)}
                    {proj.videos && proj.videos.map((vids, index) =>
                    <div className="video" key={index} onClick={() => setModal({ link: vids.link, alt: vids.alt, type: "video" })}>

                        <span className="proj-video bg border" />
                        <span className="bg border">
                            {vids.alt}
                        </span>
                        </div>)}
                </div>

                {modal && <Modal modal={modal} setModal={setModal} />}
            </div>
        </div>
    )
}