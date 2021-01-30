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

    const focusIt = (image, key, ele, type) => {
        setFullImage({ content: image, type: type, current: key })
        ele.target.focus();
        setNum(key)
    }

    const classes = useStyles();

    const nextOrPrev = (e, next) => {
        console.log(fullImage)
        let newthingy

        if (num >= 0 || num <= fullImage.content.length) {
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
            ele.scrollIntoView(false);
            ele.focus()
            let att;

            att = {
                content: {
                    link: ele.attributes['data-link'].value,
                    alt: ele.attributes['data-alt'].value,
                    desc: ele.attributes['data-desc'].value
                },
                type: (ele.attributes['data-type'] === 'image') ? "image" : "video",
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
    return (
        <div className={(props.dark === true) ? classes.dark + " full-container" : classes.light + " full-container"}>
            <div className="art-gallery-container">

                <div className="sidebar">
                    <h1>Art Portfolio</h1>

                    <h2>{fullImage.content.alt}</h2>
                    <p className="desc">{fullImage.content.desc && fullImage.content.desc}</p>
                    <div className="button-container">
                        <span className="active-button bg border circle-button" onClick={() => nextOrPrev(fullImage.current, false)}>❮</span>
                        <span className="active-button bg border circle-button" onClick={() => nextOrPrev(fullImage.current, true)}>❯</span>
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
                         {fullImage.type === "video" ? <iframe src={fullImage.content.link} title={fullImage.content.alt} />   :
                            <img src={fullImage.content.link} alt={fullImage.content.alt} />}
                        
                    </div>

                    <div className="gallery-container">

                        <div className="gallery-image-container">
                            {showWhich === 1 ?
                                artProjs.renders.map((renders, key) => <a tabIndex={key} onClick={(e) => focusIt(renders, key, e, "image")} id={'image' + key} key={key} data-desc={(renders.desc) ? renders.desc : " "} data-link={renders.link} data-alt={renders.alt}><img width="auto" height="100%" src={renders.link} alt={renders.alt} /> </a>)
                                : showWhich === 2 ? artProjs.gameRenders.map((game, key) => <a tabIndex={key} onClick={(e) => focusIt(game, key, e, "image")} id={'image' + key} key={key} data-desc={(game.desc) ? game.desc : " "} data-link={game.link} data-alt={game.alt}><img key={key} id={'image' + key} src={game.link} alt={game.alt} /></a>)
                                    : artProjs.animations.map((link, key) => <p id={'image' + key} tabIndex={key} key={key} onClick={(e) => focusIt(link, key, e, link.type) } data-desc={link.desc} data-alt={link.alt} data-link={link.link} data-type={link.type}>{link.alt}</p>)
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}