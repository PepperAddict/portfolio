import React from 'react';
import './style/nav.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav className="top-nav">
          <Link to="/portfolio">Welcome</Link>
        <Link to="/skills">Skills</Link>
        <a href="#web-portfolio">Web Portfolio</a>
        <a href="#art-portfolio">Art Portfolio</a>
      </nav>
    )
}