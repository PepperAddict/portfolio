import React, { useState } from "react";
import "./App.css";
import "./style/header.scss";
import { useStyles } from './helpers/lightDark.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Header.jsx";
import Skills from "./Skills.jsx";

import Navigation from "./Navigation.jsx";
import Web from "./Web.jsx";
import Art from './Art.jsx';
import Footer from "./Footer.jsx";


export default function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [dark, setDark] = useState(false);
  const [currentNav, setCurrentNav] = useState(true);
  const classes = useStyles();

  const [languages] = useState([
    "HTML5",
    "JSX",
    "JavaScript",
    "ES6",
    "JQuery",
    "PHP",
    "CSS",
    "Stylus",
    "Sass",
    "NodeJS",
    "Wordpress",
    "ReactJS",
    "WebGL",
    "SQL",
    "GraphQL",
    "MySQL",
    "PostgreSQL",
  ]);

  const [tools] = useState([
    "Webpack",
    "Gulp",
    "Grunt",
    "CypressJS",
    "Circle CI/CD",
    "Gitlab CI/CD",
    "Jenkins CI/CD",
    "Buddy CI/CD",
    "Jira",
    "Asana",
    "Ontraport",
    "Docker",
    "Blender",
    "Adobe Photoshop",
    "Adobe XD",
    "Inkscape",
    "Accessibility",
    "PWA",
    "Texture Packer",
  ]);

  return (
    <Router>
      <div className={dark ? classes.mainDark + ' App' : classes.mainLight + ' App'}>
        <div className="container-header">
          <Navigation
            dark={dark}
            setSelectedTag={setSelectedTag}
            setCurrentNav={setCurrentNav}
          />
          <Switch>
            <Route path="/portfolio" exact>
              <Header />
            </Route>

            <Route
              exact
              path="/portfolio/web"
              component={(props) => (
                <Web
                  {...props}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  dark={dark}
                />
              )}
            />

            <Route
              path="/portfolio/skills"
              exact
              component={(props) => (
                <Skills
                  {...props}
                  tools={tools}
                  languages={languages}
                  selectedTag={selectedTag}
                  setSelectedTag={setSelectedTag}
                  dark={dark}
                />
              )}
            />

            <Route
              path="/portfolio/art"
              exact
              component={(props) => (
                <Art
                  {...props}
                  setSelectedTag={setSelectedTag}
                  dark={dark}
                />
              )}
            />
          </Switch>

          <Footer setDark={setDark} dark={dark} />
        </div>
      </div>
    </Router>
  );
}
