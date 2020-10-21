import React from 'react';
import './style/nav.scss';
import { useStyles } from './helpers/lightDark.js'
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const classes = useStyles();
  return (
    <nav className={props.dark ? classes.linkDark + ' top-nav' : classes.linkLight + ' top-nav'}>
      <Link to="/portfolio" onClick={() => props.setCurrentNav(true)}>Welcome</Link>
      <Link to="/portfolio/skills" onClick={() => props.setCurrentNav(false)}>Skills</Link>
      <Link to="/portfolio/web" onClick={() => props.setCurrentNav(false)}>Web Portfolio</Link>
      <Link to="/portfolio/art" onClick={() => props.setCurrentNav(false)}>Art Portfolio</Link>
    </nav>
  )
}