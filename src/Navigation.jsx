import React, {useEffect} from 'react';
import './style/nav.scss';
import { useStyles } from './helpers/lightDark.js'
import { Link } from 'react-router-dom';
const icon = require('./img/icon.jpg')

export default function Navigation(props) {
  useEffect(() => {

  }, [window])
  const classes = useStyles();
  return (
    <nav className= 'top-nav bg two-column'>
      <div className="icon">
        <img src={icon} /> <h1><Link to="/portfolio" onClick={() => props.setCurrentNav(true)}>PORTFOLIO</Link></h1>
      </div>
      <div className="nav">
        <Link to="/portfolio" onClick={() => props.setCurrentNav(true)}>Welcome</Link>
      <Link to="/portfolio/skills" onClick={() => props.setCurrentNav(false)}>Skills</Link>
      <Link to="/portfolio/web" onClick={() => props.setCurrentNav(false)}>Web Portfolio</Link>
      <Link to="/portfolio/art" onClick={() => props.setCurrentNav(false)}>Art Portfolio</Link>
      </div>
      
    </nav>
  )
}