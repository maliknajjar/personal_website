import "./code.css"
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../images/logo.svg"
import coverImage from "../images/test.svg"
import backButton from "../images/whiteBackButton.svg"
import codeProjects from "../database/designProducts"

import link from "../images/link.svg"

import houdini from "../images/designSkills/houdini.svg"
import fusion from "../images/designSkills/fusion.svg"
import blender from "../images/designSkills/blender.svg"
import premiere from "../images/designSkills/premiere.svg"
import illustrator from "../images/designSkills/illustrator.svg"
import photoshop from "../images/designSkills/photoshop.svg"
import designer from "../images/designSkills/designer.svg"
import painter from "../images/designSkills/painter.svg"
import resolve from "../images/designSkills/resolve.svg"
import aftereffect from "../images/designSkills/aftereffect.svg"

function Design() {
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="" style={{filter: "invert(1)"}} />
      </Link>
      <div className=" pageBigContainer" style={{backgroundColor: "#000000", backgroundImage: "linear-gradient(rgb(255 255 255 / 100%), rgb(255 255 255 / 90%))"}}>
        <div className="pageHeader" style={{backgroundSize: "100%", backgroundImage: `url(${coverImage})`, boxShadow: "0px 0px 50px 25px rgb(255 255 255)"}}>
          <div className="pageHeaderContainer">
            <Link to="/">
              <div style={{display: "flex", alignItems: "center"}}>
                <img style={{height: "20px", marginRight: "10px", filter: "invert(1)"}} src={backButton} alt="" />
                <div style={{fontSize: "20px", color: "black", fontWeight: "bold"}}>Go Back</div>
              </div>
            </Link>
            <div style={{fontSize: "50px", marginTop: "15px", marginBottom: "40px", color: "black", fontWeight: "bold"}}>Design Resume</div>
          </div>
        </div>
        <div className="pageBody">
          <div className="description" style={{boxShadow: "0px 0px 50px 0px rgb(255 255 255 / 71%)", backgroundColor: "black", backgroundImage: "linear-gradient(rgb(255 255 255 / 90%), rgb(255 255 255 / 100%))", color: "black", border: "3px solid rgb(0 0 0 / 10%)", borderTop: "none"}}>
            <h1 style={{marginTop: "0", color: "black"}}>Description</h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <h1 style={{color: "black"}}>Skills</h1>
          <div className="skillsPart">
            <div style={{backgroundImage: `url(${photoshop})`}}></div>
            <div style={{backgroundImage: `url(${illustrator})`}}></div>
            <div style={{backgroundImage: `url(${aftereffect})`}}></div>
            <div style={{backgroundImage: `url(${premiere})`}}></div>
            <div style={{backgroundImage: `url(${houdini})`}}></div>
            <div style={{backgroundImage: `url(${resolve})`}}></div>
            <div style={{backgroundImage: `url(${fusion})`}}></div>
            <div style={{backgroundImage: `url(${blender})`}}></div>
            <div style={{backgroundImage: `url(${designer})`}}></div>
            <div style={{backgroundImage: `url(${painter})`}}></div>
          </div>
          <h1 style={{color: "black"}}>Projects</h1>
          {/* ////////////////// */}
          {/* code projects loop */}
          {/* ////////////////// */}
          {codeProjects.map((project) => {
            return (
              <>
                <div className="divWithBorder" style={{width: "50px", height: "30px", borderLeft: "2.5px solid rgb(0 0 0 / 50%)"}}></div>
                <div className="cirlceContaienr flex">
                  <div className="circle" style={{backgroundColor: "rgb(0 0 0 / 50%)"}}></div>
                  <div className="card" style={{color: "rgb(133 133 133)"}}>{project.date}</div>
                </div>
                <div className="card divWithBorder" style={{borderLeft: "2.5px solid rgb(0 0 0 / 50%)"}}>
                  <a href={project.link} target="_blank">
                    <div className="innerCard" style={{boxShadow: "0px 0px 50px 0px rgb(255 255 255 / 100%)", backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.8) 0%, rgba(0,0,0,0) 100%), url('${project.image}')`}}>
                      <div class="whenHovering" style={{backgroundColor: "rgb(255 255 255 / 45%)"}}>
                        <img src={link} alt="" style={{filter: "invert(1)"}} />
                      </div>
                      <div style={{display: "flex" ,flexDirection: "column", justifyContent: "flex-end", height: "100%"}}>
                        <div className="cardTitle" style={{color: "black", textShadow: "2px 2px 10px white, 2px 2px 10px white, 2px 2px 10px white"}}>{project.title}</div>
                        <div className="cardDescription" style={{color: "black", textShadow: "2px 2px 10px white, 2px 2px 10px white, 2px 2px 10px white"}}>{project.description}</div>
                      </div>
                    </div>
                  </a>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Design;
