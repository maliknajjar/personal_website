import "./code.css"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/logo.svg"
import coverImage from "../images/codeHeaderCover.png"
import backButton from "../images/whiteBackButton.svg"

import caddy from "../images/codeSkills/caddy.svg"
import ffmpeg from "../images/codeSkills/ffmpeg.svg"
import wordpress from "../images/codeSkills/wordpress.svg"
import websocket from "../images/codeSkills/websocket.svg"
import docker from "../images/codeSkills/docker.svg"
import react from "../images/codeSkills/react.svg"
import jwt from "../images/codeSkills/jwt.svg"
import electron from "../images/codeSkills/electron.svg"
import unity from "../images/codeSkills/unity.svg"
import opencv from "../images/codeSkills/opencv.svg"
import git from "../images/codeSkills/git.svg"
import mongodb from "../images/codeSkills/mongodb.svg"
import express from "../images/codeSkills/express.svg"
import mysql from "../images/codeSkills/mysql.svg"
import linux from "../images/codeSkills/linux.svg"
import flutter from "../images/codeSkills/flutter.svg"
import rust from "../images/codeSkills/rust.svg"
import nginx from "../images/codeSkills/nginx.svg"
import css from "../images/codeSkills/css.svg"
import html from "../images/codeSkills/html.svg"
import python from "../images/codeSkills/python.svg"
import dart from "../images/codeSkills/dart.svg"
import c from "../images/codeSkills/c.svg"
import cpp from "../images/codeSkills/cpp.svg"
import javascript from "../images/codeSkills/javascript.svg"
import php from "../images/codeSkills/php.svg"
import nodejs from "../images/codeSkills/nodejs.svg"

function Code() {
  return (
    <>
      <img className="logo" src={logo} alt="" />
      <div className=" pageBigContainer">
        <div className="pageHeader" style={{backgroundImage: `url(${coverImage})`}}>
          <div className="pageHeaderContainer">
            <Link to="/">
              <div style={{display: "flex", alignItems: "center"}}>
                <img style={{height: "20px", marginRight: "10px"}} src={backButton} alt="" />
                <div style={{fontSize: "20px"}}>Go Back</div>
              </div>
            </Link>
            <div style={{fontSize: "50px", marginTop: "15px", marginBottom: "40px"}}>Coding Resume</div>
          </div>
        </div>
        <div className="pageBody">
          <div className="description">
            <h1 style={{marginTop: "0"}}>Description</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <h1>Skills</h1>
          <div className="skillsPart">
            <div style={{backgroundImage: `url(${css})`}}></div>
            <div style={{backgroundImage: `url(${html})`}}></div>
            <div style={{backgroundImage: `url(${javascript})`}}></div>
            <div style={{backgroundImage: `url(${python})`}}></div>
            <div style={{backgroundImage: `url(${cpp})`}}></div>
            <div style={{backgroundImage: `url(${c})`}}></div>
            <div style={{backgroundImage: `url(${linux})`}}></div>
            <div style={{backgroundImage: `url(${rust})`}}></div>
            <div style={{backgroundImage: `url(${php})`}}></div>
            <div style={{backgroundImage: `url(${docker})`}}></div>
            <div style={{backgroundImage: `url(${react})`}}></div>
            <div style={{backgroundImage: `url(${opencv})`}}></div>
            <div style={{backgroundImage: `url(${git})`}}></div>
            <div style={{backgroundImage: `url(${nodejs})`}}></div>
            <div style={{backgroundImage: `url(${caddy})`}}></div>
            <div style={{backgroundImage: `url(${nginx})`}}></div>
            <div style={{backgroundImage: `url(${unity})`}}></div>
            <div style={{backgroundImage: `url(${dart})`}}></div>
            <div style={{backgroundImage: `url(${ffmpeg})`}}></div>
            <div style={{backgroundImage: `url(${wordpress})`}}></div>
            <div style={{backgroundImage: `url(${mysql})`}}></div>
            <div style={{backgroundImage: `url(${jwt})`}}></div>
            <div style={{backgroundImage: `url(${flutter})`}}></div>
            <div style={{backgroundImage: `url(${websocket})`}}></div>
            <div style={{backgroundImage: `url(${express})`}}></div>
            <div style={{backgroundImage: `url(${electron})`}}></div>
            <div style={{backgroundImage: `url(${mongodb})`}}></div>
          </div>
          <h1 style={{marginTop: "150px"}}>Projects</h1>
          <div className="divWithBorder" style={{width: "50px", height: "30px"}}></div>
          <div className="cirlceContaienr flex">
            <div className="circle"></div>
            <div className="card" style={{color: "rgba(255, 255, 255, 0.5)"}}>10/15/2020</div>
          </div>
          <div className="card divWithBorder">
            <div className="innerCard" style={{backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%), url('https://scontent.ftun16-1.fna.fbcdn.net/v/t1.6435-9/127640915_131842745650091_6478980153430293436_n.png?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=3GCEn-6nX5QAX-cH88s&tn=cWZDOMsFkL-Yt2ez&_nc_ht=scontent.ftun16-1.fna&oh=67b8d842ef0744b738407b4d65efb059&oe=6180B94E')"}}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Code;
