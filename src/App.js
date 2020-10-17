import React, { useState } from "react";
import "./App.css";
import "./style/header.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header.jsx";
import Skills from "./Skills.jsx";

import Navigation from "./Navigation.jsx";
import Web from "./Web.jsx";
import Footer from "./Footer.jsx";

const darkURL = require("./img/bg/velvet.jpg");
const lightURL = require("./img/bg/flower-bg.jpg");

export default function App() {
  const [selectedTag, setSelectedTag] = useState(null);
  const [dark, setDark] = useState(false);

  const lightStyle = {
    backgroundImage: "url(" + lightURL + ")",
    backgroundSize: "cover",
    color: "#262626",
  };

  const darkStyle = {
    backgroundImage: "url(" + darkURL + ")",
    backgroundSize: "cover",
    color: "#f2f2f2",
  };
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
      <div className="App" style={dark ? darkStyle : lightStyle}>
        <div className="container-header">
          <Navigation dark={dark} setSelectedTag={setSelectedTag}/>
          <Switch>
            <Route path="/portfolio" exact>
              <Header />
            </Route>

              <Route
                exact
                path="/web"
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
                path="/skills"
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

          </Switch>

          <Footer setDark={setDark} dark={dark} />
        </div>
      </div>
    </Router>
  );
}
