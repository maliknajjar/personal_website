import React from 'react'

import github from "../images/github.svg"
import behance from "../images/behance.svg"

import "./SocialMedia.css"

export default function SocialMedia({forDesign = false, forCode = false}) {
    let styles
    if (forDesign) { 
        styles = stylesForDesign 
    } else {
         if (forCode) { 
            styles = stylesForCode
        } 
    }
    return (
        <div className="socialMedia" style={styles}>
            <a href="https://github.com/malik446644" target="_blank">
                <div className={forDesign ? "forDesign" : forCode ? "forCode" : ""} style={{backgroundImage: `url('${github}')`}}></div>
            </a>
            <a href="https://www.behance.net/maliknajjar" target="_blank">
                <div className={forDesign ? "forDesign" : forCode ? "forCode" : ""} style={{backgroundImage: `url('${behance}')`}}></div>
            </a>
        </div>
    )
}

let stylesForDesign = {
    left: "unset",
    right: "0",
    filter: "invert(0)",
    marginRight: "10px"
}

let stylesForCode = {
    left: "unset",
    right: "0",
    marginRight: "10px"
}