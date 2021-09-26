import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import document from "./assets/icons/Document.svg";
import summary_colored from "./assets/icons/summaries.svg";
import summary from "./assets/icons/summaries-unfocus.svg";
import settings from "./assets/icons/Setting.svg";
import search from "./assets/icons/Search.svg";
import notification from "./assets/icons/Notification.svg";
import { Assessment } from "./pages/assessment";

function App() {
  return (
    <div className="App">
      <div id="header">
        <div className="logo">Logo</div>
        <div>
          <nav>
            <ul>
              <li>
                <img className="icons" src={search} alt="Document" />
              </li>
              <li>
                <img className="icons" src={notification} alt="Document" />
              </li>
              <li>
                <div className="profile-nav">
                  <div className="profile-pic"></div>Nicole
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="container">
        <div id="sidebar">
          <div className="assessments onView">
            <img className="icons iconOnView" src={document} alt="Document" />
            Assessment
          </div>
          <div className="assessments">
            <img className="icons" src={summary} alt="Summary" />
            Summary
          </div>
          <div className="assessments">
            <img className="icons" src={settings} alt="Configuration" />
            Configuration
          </div>
        </div>
        <div id="main">
          <div id="main-heading">Please select interview type</div>
          <Assessment />
        </div>
      </div>
    </div>
  );
}

export default App;
