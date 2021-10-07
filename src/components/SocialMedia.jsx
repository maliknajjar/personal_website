import React from 'react'

import github from "../images/github.svg"
import behance from "../images/behance.svg"

import "./SocialMedia.css"

export default function SocialMedia({forDesign = false, forCode = false}) {
    let styles
    if (forDesign) { styles = stylesForDesign } else { if (forCode) { styles = stylesForCode } }
    return (
        <div className="socialMedia" style={styles}>
            <div style={{backgroundImage: `url('${github}')`}}></div>
            <div style={{backgroundImage: `url('${behance}')`}}></div>
        </div>
    )
}

let stylesForDesign = {
    left: "unset",
    right: "0",
    filter: "invert(1)",
    marginRight: "10px"
}

let stylesForCode = {
    left: "unset",
    right: "0",
    marginRight: "10px"
}