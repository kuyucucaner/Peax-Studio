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

import FadeIn from "../components/fade-in";

const Skill = () => {
  const ProgrammingLanguages = [
    { img: CSharp, name: "C Sharp" },
    { img: CSS, name: "CSS" },
    { img: HTML, name: "HTML" },
    { img: Java, name: "Java" },
    { img: Dart, name: "Dart" },
    { img: JavaScript, name: "JavaScript" },
  ];
  const FrameworksLibraries = [
    { img: SpringBoot, name: "Spring Boot" },
    { img: Redux, name: "Redux" },
    { img: ReactJS, name: "React" },
    { img: NodeJs, name: "Node.js" },
    { img: NetCore, name: ".Net Core" },
    { img: MVC, name: "MVC" },
    { img: Flutter, name: "Flutter" },
    { img: Express, name: "Express.js" },
    { img: Boostrap, name: "Boostrap" },
    { img: API, name: "API" },
    { img: GoogleCloud, name: "Google Cloud Service" },
    { img: Redis, name: "Redis" },
  ];
  const Databases = [
    { img: Firebase, name: "Firebase" },
    { img: Mongo, name: "MongoDB" },
    { img: MsSQL, name: "Microsoft SQL Server" },
    { img: MySQL, name: "MySQL" },
  ];
  const DevelopmentTools = [
    { img: AndroidStudio, name: "Android Studio" },
    { img: Eclipse, name: "Eclipse" },
    { img: Git, name: "Git" },
    { img: GitHub, name: "GitHub" },
    { img: GitLab, name: "GitLab" },
    { img: IntelliJ, name: "IntelliJ IDEA" },
    { img: Postman, name: "Postman" },
    { img: Swagger, name: "Swagger" },
    { img: VsCode, name: "Visual Studio Code" },
    { img: Xcode, name: "Xcode" },
  ];
  return (
    <section className="skill-section" id="skill-section">
      <FadeIn direction="up">
        <div className="skill-box">
          <h1 className="skill-title">Programming Languages</h1>
          <p className="skill-icon-text">Programming Languages We Excel In</p>

          <div className="skill-icon-box">
            {ProgrammingLanguages.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.img} className="skill-icon" alt={skill.name} />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="up">
        <div className="skill-box">
          <h1 className="skill-title">Frameworks & Libraries</h1>
          <p className="skill-icon-text">Our Known Frameworks and Libraries</p>

          <div className="skill-icon-box">
            {FrameworksLibraries.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.img} className="skill-icon" alt={skill.name} />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <div className="skill-box">
          <h1 className="skill-title">Databases</h1>
          <p className="skill-icon-text">Databases We Work With</p>
          <div className="skill-icon-box">
            {Databases.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.img} className="skill-icon" alt={skill.name} />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn direction="up">
        <div className="skill-box">
          <h1 className="skill-title">Development Tools</h1>
          <p className="skill-icon-text">
            Development Tools We Are Proficient In
          </p>
          <div className="skill-icon-box">
            {DevelopmentTools.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <img src={skill.img} className="skill-icon" alt={skill.name} />
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Skill;
