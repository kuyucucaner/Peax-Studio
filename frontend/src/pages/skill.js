import React from "react";
import "../styles/skill.css";
import JavaScript from "../images/skills/js.png";
import CSharp from "../images/skills/c-sharp.png";
import CSS from "../images/skills/css-3.png";
import HTML from "../images/skills/html-5.png";
import Java from "../images/skills/java.png";
import Dart from "../images/skills/dart.png";

import SpringBoot from "../images/skills/springboot.svg";
import Redux from "../images/skills/redux.png";
import ReactJS from "../images/skills/react.png";
import NodeJs from "../images/skills/nodejs.png";
import NetCore from "../images/skills/netcore.png";
import MVC from "../images/skills/mvc.png";
import Flutter from "../images/skills/flutter.svg";
import Express from "../images/skills/express.png";
import Boostrap from "../images/skills/boostrap.png";
import API from "../images/skills/api.png";
import GoogleCloud from "../images/skills/googlecloud.svg";
import Redis from "../images/skills/redis.svg";

import Firebase from "../images/skills/firebase.svg";
import Mongo from "../images/skills/mongo.svg";
import MsSQL from "../images/skills/mssql.svg";
import MySQL from "../images/skills/mysql.svg";

import AndroidStudio from "../images/skills/androidstudio.svg";
import Eclipse from "../images/skills/eclipse.svg";
import Git from "../images/skills/git.svg";
import GitHub from "../images/skills/github.svg";
import GitLab from "../images/skills/gitlab.svg";
import IntelliJ from "../images/skills/intellij.svg";
import Postman from "../images/skills/postman.svg";
import Swagger from "../images/skills/swagger.svg";
import VsCode from "../images/skills/vscode.svg";
import Xcode from "../images/skills/xcode.svg";
const Skill = () => {
  return (
    <section className="skill-section" id="skill-section">
      <div className="skill-box">
        <h1 className="skill-title">Programming Languages</h1>
        <p className="skill-icon-text">
          These are the Programming Languages We're Proficient In
        </p>
        <div className="skill-icon-box">
          <div className="skill-card">
            <img src={CSharp} className="skill-icon" alt="C Sharp" />
            <h3 className="skill-name">C Sharp</h3>
          </div>
          <div className="skill-card">
            <img src={CSS} className="skill-icon" alt="CSS" />
            <h3 className="skill-name">CSS</h3>
          </div>
          <div className="skill-card">
            <img src={HTML} className="skill-icon" alt="HTML" />
            <h3 className="skill-name">HTML</h3>
          </div>
          <div className="skill-card">
            <img src={Java} className="skill-icon" alt="Java" />
            <h3 className="skill-name">Java</h3>
          </div>
          <div className="skill-card">
            <img src={Dart} className="skill-icon" alt="Dart" />
            <h3 className="skill-name">Dart</h3>
          </div>
          <div className="skill-card">
            <img src={JavaScript} className="skill-icon" alt="JavaScript" />
            <h3 className="skill-name">JavaScript</h3>
          </div>
        </div>
      </div>


      <div className="skill-box">
        <h1 className="skill-title">Frameworks/Libraries</h1>
        <p className="skill-icon-text">
          this is our known Frameworks and Libraries
        </p>
        <div className="skill-icon-box">
        <div className="skill-card">
            <img src={SpringBoot} className="skill-icon" alt="Spring Boot" />
            <h3 className="skill-name">Spring Boot</h3>
          </div>
          <div className="skill-card">
            <img src={Redux} className="skill-icon" alt="Redux" />
            <h3 className="skill-name">Redux</h3>
          </div>  <div className="skill-card">
            <img src={ReactJS} className="skill-icon" alt="React" />
            <h3 className="skill-name">React</h3>
          </div>  <div className="skill-card">
            <img src={NodeJs} className="skill-icon" alt="Node.js" />
            <h3 className="skill-name">Node.js</h3>
          </div>  <div className="skill-card">
            <img src={NetCore} className="skill-icon" alt=".Net Core" />
            <h3 className="skill-name">.Net Core</h3>
          </div>  <div className="skill-card">
            <img src={MVC} className="skill-icon" alt="Model View Controller" />
            <h3 className="skill-name">MVC</h3>
          </div>  <div className="skill-card">
            <img src={Flutter} className="skill-icon" alt="Flutter" />
            <h3 className="skill-name">Flutter</h3>
          </div>  <div className="skill-card">
            <img src={Express} className="skill-icon" alt="Express" />
            <h3 className="skill-name">Express.js</h3>
          </div>  <div className="skill-card">
            <img src={Boostrap} className="skill-icon" alt="Boostrap" />
            <h3 className="skill-name">Boostrap</h3>
          </div>  <div className="skill-card">
            <img src={API} className="skill-icon" alt="API" />
            <h3 className="skill-name">API</h3>
          </div>
          <div className="skill-card">
            <img src={GoogleCloud} className="skill-icon" alt="Google Cloud Service" />
            <h3 className="skill-name">Google Cloud Service</h3>
          </div>
          <div className="skill-card">
            <img src={Redis} className="skill-icon" alt="Redis" />
            <h3 className="skill-name">Redis</h3>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <h1 className="skill-title">Databases</h1>
        <p className="skill-icon-text">
          this is our known Databases
        </p>
        <div className="skill-icon-box">
        <div className="skill-card">
            <img src={Firebase} className="skill-icon" alt="Firebase" />
            <h3 className="skill-name">Firebase</h3>
          </div>
          <div className="skill-card">
            <img src={Mongo} className="skill-icon" alt="MongoDB" />
            <h3 className="skill-name">MongoDB</h3>
          </div>
          <div className="skill-card">
            <img src={MsSQL} className="skill-icon" alt="Microsoft SQL Server" />
            <h3 className="skill-name">Microsoft SQL Server</h3>
          </div>
          <div className="skill-card">
            <img src={MySQL} className="skill-icon" alt="MySQL" />
            <h3 className="skill-name">MySQL</h3>
          </div>
        </div>
      </div>
      <div className="skill-box">
        <h1 className="skill-title">Development Tools</h1>
        <p className="skill-icon-text">
          this is our known Development Tools
        </p>

        <div className="skill-icon-box">
        <div className="skill-card">
            <img src={AndroidStudio} className="skill-icon" alt="Android Studio" />
            <h3 className="skill-name">Android Studio</h3>
          </div>
          <div className="skill-card">
            <img src={Eclipse} className="skill-icon" alt="Eclipse" />
            <h3 className="skill-name">Eclipse</h3>
          </div>
          <div className="skill-card">
            <img src={Git} className="skill-icon" alt="Git" />
            <h3 className="skill-name">Git</h3>
          </div>
          <div className="skill-card">
            <img src={GitHub} className="skill-icon" alt="GitHub" />
            <h3 className="skill-name">GitHub</h3>
          </div>
          <div className="skill-card">
            <img src={GitLab} className="skill-icon" alt="GitLab" />
            <h3 className="skill-name">GitLab</h3>
          </div>
          <div className="skill-card">
            <img src={IntelliJ} className="skill-icon" alt="IntelliJ" />
            <h3 className="skill-name">IntelliJ IDEA</h3>
          </div>
          <div className="skill-card">
            <img src={Postman} className="skill-icon" alt="Postman" />
            <h3 className="skill-name">Postman</h3>
          </div>
          <div className="skill-card">
            <img src={Swagger} className="skill-icon" alt="Swagger" />
            <h3 className="skill-name">Swagger</h3>
          </div>
          <div className="skill-card">
            <img src={VsCode} className="skill-icon" alt="Visual Studio Code" />
            <h3 className="skill-name">Visual Studio Code</h3>
          </div>
          <div className="skill-card">
            <img src={Xcode} className="skill-icon" alt="Xcode" />
            <h3 className="skill-name">Xcode</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
