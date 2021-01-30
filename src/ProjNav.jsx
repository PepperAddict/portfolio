import React, {Fragment} from 'react'
import './style/web-nav.scss'
const bulletOne = require('./img/asset/bullet.svg')
const bulletTwo = require('./img/asset/bullet-selected.svg')

export default function ProjNav({proj, setCurrentProj, num}) {


    return (
        <div className="proj-nav">
            {proj.map((project, key) => {
  
                return key==num ? (
                    <p className="active" onClick={() => setCurrentProj(key)} key={key}><img src={bulletTwo} alt="bullet for active project"/><strong>{project.name}</strong></p>
                ) :
                (
                    <p onClick={() => setCurrentProj(key)} key={key}><img src={bulletOne} alt="bullet for non-active project"/>{project.name}</p> 
                )
            })}
        </div>
    )
}