import React from 'react';
import './style/nav.scss'

export default function Navigation() {
    return (
        <nav class="top-nav">
        <a href="#skills" onClick="scroll_to('#skills')">Skills</a>
        <a href="#web-portfolio" onClick="scroll_to('#web-portfolio')">Web Portfolio</a>
        <a href="#art-portfolio" onClick="scroll_to('#art-portfolio')">Art Portfolio</a>
      </nav>
    )
}