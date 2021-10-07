import React from 'react'

import github from "../images/github.svg"
import behance from "../images/behance.svg"

import "./SocialMedia.css"

export default function SocialMedia() {
    return (
        <div className="socialMedia" style={{filter: "invert(1)"}}>
            <div style={{backgroundImage: `url('${github}')`}}></div>
            <div style={{backgroundImage: `url('${behance}')`}}></div>
        </div>
    )
}
