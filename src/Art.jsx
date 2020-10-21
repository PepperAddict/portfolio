import React, { useState, useEffect } from 'react';
import { artProjs } from './helpers/art.js';
import './style/art.scss'
import { useStyles } from './helpers/lightDark.js';

export default function Art(props) {
    const [fullImage, setFullImage] = useState({
        content: artProjs.renders[0],
        type: "image",
        current: 0
    })
    let [num, setNum] = useState(0)

    const [showWhich, setShowWhich] = useState(1)

    const focusIt = (image, key) => {
        setFullImage({ content: image, type: "image", current: key })
    }

    const classes = useStyles();

    const nextOrPrev = (e, next) => {
        let newthingy

        if (num >= 0 || num <= artProjs.renders.length) {
            next ? newthingy = ++num : newthingy = --num;

            setNum(newthingy)
            let ele = document.getElementById('image' + num)
            changeIt(ele, e)

        } else {
            setNum(0)
        }
    }

    useEffect(() => {
        setNum(0)
    }, [])


    const changeIt = (ele, e) => {
        if (ele) {

            ele.scrollIntoView();
            const att = {
                content: {
                    link: ele.attributes.src.value,
                    alt: ele.attributes.alt.value,
                    desc: ele.attributes['data-desc'].value
                },
                type: "image",
                current: e
            }
            setFullImage(att)
        }
    }
    const resetWhenClicked = e => {
        setShowWhich(e);
        let cont;
        if (e === 1) {
            cont = {
                content: artProjs.renders[0],
                type: "image",
                current: 0
            }
        } else if (e === 2) {
            cont = {
                content: artProjs.gameRenders[0],
                type: "image",
                current: 0
            }
        } else {
            cont = {
                content: artProjs.animations[0],
                type: "video",
                current: 0
            }
        }
        setFullImage(cont)
    }
    return (<div className={(props.dark === true) ? classes.dark +" art-gallery-container" : classes.light + " art-gallery-container"}>

        <div className="sidebar">
            <h1>Art Gallery</h1>

            <h2>{fullImage.content.alt}</h2>
            <p className="desc">{fullImage.content.desc && fullImage.content.desc}</p>
            <div className="button-container">
                <span className="next circle-button" onClick={() => nextOrPrev(fullImage.current, false)}>❮</span>
                <span className="prev circle-button" onClick={() => nextOrPrev(fullImage.current, true)}>❯</span>
            </div>

            <nav>
                <ul>
                    <li onClick={() => resetWhenClicked(1)} className={showWhich === 1 ? "active-tab" : "inactive-tab"}>3D Renders</li>
                    <li onClick={() => resetWhenClicked(2)} className={showWhich === 2 ? "active-tab" : "inactive-tab"}>Game Renders</li>
                    <li onClick={() => resetWhenClicked(3)} className={showWhich === 3 ? "active-tab" : "inactive-tab"}>Animations</li>
                </ul>
            </nav>

        </div>
        <div className="content-container">
            <div className="main-image">

                {fullImage.type === "image" && <img src={fullImage.content.link} alt={fullImage.content.alt} />}

            </div>
            <div className="gallery-container">

                <div className="gallery-image-container">
                    {showWhich === 1 ?
                        artProjs.renders.map((renders, key) => <img key={key} src={renders.link} id={'image' + key} alt={renders.alt} onClick={() => focusIt(renders, key)} data-desc={(renders.desc) ? renders.desc : " "} />)
                        : showWhich === 2 ? artProjs.gameRenders.map((game, key) => <img key={key} id={'image' + key} src={game.link} alt={game.alt} onClick={() => setFullImage({ content: game, type: "image" })} data-desc={(game.desc) ? game.desc : " "} />)
                            : artProjs.animations.map((link, key) => <a key={key} href={link.link} target="_blank" rel="noopener noreferrer" >{link.alt}</a>)
                    }

                </div>
            </div>
        </div>

    </div>
    )
}