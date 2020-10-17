import React from 'react';
import './style/nav.scss';
import {useStyles} from './helpers/lightDark.js'
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const classes = useStyles();
    return (
        <nav className={props.dark ? classes.linkDark + ' top-nav': classes.linkLight + ' top-nav'}>
          <Link to="/portfolio">Welcome</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/web">Web Portfolio</Link>
        <a href="#art-portfolio">Art Portfolio</a>
      </nav>
    )
}