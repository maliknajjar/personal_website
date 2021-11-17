// global variables
let isVertical = false;
let didClickOnBack = false;

function mainInit(update) {
    // selecting mainDiv an blackBackground
    let blackBackground = document.querySelector(".animationBackground")
    let mainDiv = document.querySelector(".Main")

    // selecting the svg border paths of the 
    let designLogoBorder = document.querySelector(".designLogoBorder")
    let codeLogoBorder = document.querySelector(".codeLogoBorder")

    // selecting the div 
    let designContainer = document.querySelector(".designDiv .container")
    let codeContainer = document.querySelector(".codeDiv .container")
    
    // selecting design div and code div
    let codeDiv = document.querySelector(".codeDiv")
    let designDiv = document.querySelector(".designDiv")

    // selecting the black background
    let bigBackground = document.querySelector(".bigBackground")
    let whitebigBackground = document.querySelector(".whitebigBackground")

    // selecting the code design and design design
    let codeDesign = document.querySelectorAll(".codeDesign")
    let theDesignDesign = document.querySelectorAll(".theDesignDesign")

    // selecting the logo
    let logo = document.querySelector(".logo")
    
    // selecting the codeDescription div
    let codeDescription = document.querySelector(".codeDescription")
    let designDescription = document.querySelector(".designDescription")

    // selecting the svg
    let codeSvg = document.querySelector(".codeDescription .button svg")
    let designSvg = document.querySelector(".designDescription .button svg")

    // selecting buttons
    let back_button_code = document.querySelector(".back_button_code")
    let back_button_design = document.querySelector(".back_button_design")
    let codeButton = document.querySelector(".codeButton")
    let designButton = document.querySelector(".designButton")
    
    // selecting language icon
    let languageIcon = document.querySelector(".languageIcon")
    let languageIconNotInvert = document.querySelector(".languageIconNotInvert")
    
    // social media icons
    let socialMediaDivs = document.querySelectorAll(".socialMedia div")
    
    // two sides buttons
    let theCodeSvg = document.querySelector(".theCodeSvg")
    let theDesignSvg = document.querySelector(".theDesignSvg")
    
    //timouts
    let codeTimeout;
    let designTimeout;

    // event listener for contact us
    let theContact = document.querySelector(".contact")
    let back = document.querySelector(".back")
    languageIconNotInvert.addEventListener("click", () => {
        theContact.style.opacity = "1"
        theContact.style.pointerEvents = "all";
    })
    back.addEventListener("click", () => {
        theContact.style.opacity = "0"
        theContact.style.pointerEvents = "none";
    })

    // add event listener for window resize
    changeIsVertical()

    // exetute animation when mouse entering html element space
    designContainer.addEventListener("click", () => {
        // making the design icon glow
        theDesignSvg.style.filter = "drop-shadow(0px 0px 25px #ff46e6)"

        didClickOnBack = false
        clearTimeout(designTimeout)
        designDescription.style.display = "flex"
        codeDiv.style.zIndex = "9"
        setTimeout(() => {
            codeContainer.style.pointerEvents = "none";
        }, 1000);
        objectAnimtion(designContainer, 200, [
            {}, {transform: 'scale(1.25)'}
        ])
        objectAnimtion(designLogoBorder, 1000, [
            {}, {transform: 'rotate(180deg)'}
        ])
        if (!isVertical) {
            objectAnimtion(blackBackground, 1000, [
                {}, {left: "-100%", transform: "skew(0deg, 0deg)"}
            ])
        } else {
            objectAnimtion(blackBackground, 1000, [
                {}, {top: "-100%", transform: "skew(0deg, 0deg)"}
            ])
        }
        objectAnimtion(codeContainer, 500, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(theDesignDesign[0], 1750, [
            {opacity: "0%", offset: 0.5}, {opacity: "25%"}
        ])
        objectAnimtion(theDesignDesign[1], 1750, [
            {opacity: "0%", offset: 0.5}, {opacity: "10%"}
        ])
        objectAnimtion(logo, 2000, [
            {filter: "invert(0)", offset: 0.5}, {filter: "invert(1)"}
        ])
        objectAnimtion(designDescription, 1000, [
            {}, {opacity: "100%"}
        ])
        objectAnimtion(designDescription, 1250, [
            {}, {transform: "rotateY(0deg) translate(-50%, -50%)"}
        ], "ease-out")
        objectAnimtion(designDescription, 1250, [
            {}, {filter: "blur(0px)"}
        ])
        objectAnimtion(whitebigBackground, 2000, [
            {}, {opacity: "100%"}
        ])

        // changing the color of the language icon
        if (isVertical) {
            setTimeout(() => {
                languageIcon.style.filter = "invert(0)"
            }, 1000)
        }
        if (!isVertical) {
            setTimeout(() => {
                socialMediaDivs.forEach((div) => {
                    div.style.filter = "invert(0)"
                })
            }, 750)
        }
    })

    codeContainer.addEventListener("click", () => {
        // making the code button glow
        theCodeSvg.style.filter = "drop-shadow(0px 0px 25px #5fffd7c7)"

        didClickOnBack = false
        clearTimeout(codeTimeout)
        codeDescription.style.display = "flex"
        designDiv.style.zIndex = "9"
        setTimeout(() => {
            designContainer.style.pointerEvents = "none";
        }, 1000);
        objectAnimtion(codeContainer, 200, [
            {}, {transform: 'scale(1.25)'}
        ])
        objectAnimtion(codeLogoBorder, 1000, [
            {}, {transform: 'rotate(-180deg)'}
        ])
        if (!isVertical) {
            objectAnimtion(blackBackground, 1000, [
                {}, {left: "0%", transform: "skew(0deg, 0deg)"}
            ])
        } else {
            objectAnimtion(blackBackground, 1000, [
                {}, {top: "0%", transform: "skew(0deg, 0deg)"}
            ])
        }
        objectAnimtion(designContainer, 500, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(codeDesign[0], 1750, [
            {opacity: "0%", offset: 0.5}, {opacity: "25%"}
        ])
        objectAnimtion(codeDesign[1], 1750, [
            {opacity: "0%", offset: 0.5}, {opacity: "17.5%"}
        ])
        objectAnimtion(codeDescription, 1000, [
            {}, {opacity: "100%"}
        ])
        objectAnimtion(codeDescription, 1250, [
            {}, {transform: "rotateY(0deg) translate(50%, -50%)"}
        ], "ease-out")
        objectAnimtion(codeDescription, 1250, [
            {}, {filter: "blur(0px)"}
        ])
        objectAnimtion(bigBackground, 2000, [
            {}, {opacity: "100%"}
        ])

        // changing the color of the language icon
        setTimeout(() => {
            languageIcon.style.filter = "invert(1)"
            languageIconNotInvert.style.filter = "invert(1)"
        }, 750)

        if (isVertical) {
            setTimeout(() => {
                socialMediaDivs.forEach((div) => {
                    div.style.filter = "invert(1)"
                })
            }, 750)
        }
    })

    // exetute animation when mouse leaves html element space
    back_button_design.addEventListener("click", () => {
        // removing glow
        theDesignSvg.style.filter = "drop-shadow(0px 0px  0px rgba(255, 255, 255, 0))"

        didClickOnBack = true
        codeContainer.style.pointerEvents = "all";
        codeDiv.style.zIndex = "10"
        designTimeout =  setTimeout(() => {
            designDescription.style.display = "none"
        }, 1100)
        objectAnimtion(designContainer, 700, [
            {}, {transform: 'scale(1.0)'}
        ])
        objectAnimtion(designLogoBorder, 700, [
            {}, {transform: 'rotate(0deg)'}
        ])
        if (!isVertical) {
            objectAnimtion(blackBackground, 1000, [
                {}, {left: "-50%", transform: "skew(-8deg, 0deg)"}
            ])
        } else {
            objectAnimtion(blackBackground, 1000, [
                {}, {top: "-50%", transform: "skew(0deg, -8deg)"}
            ])
        }
        objectAnimtion(codeContainer, 1000, [
            {opacity: "0%", offset: 0}, {opacity: "0%", offset: 0.5}, {opacity: "100%", offset: 1.0}
        ])
        objectAnimtion(theDesignDesign[0], 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(theDesignDesign[1], 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(logo, 2000, [
            {}, {filter: "invert(0)"}
        ])

        objectAnimtion(designDescription, 500, [
            {}, {opacity: "0%", filter: "blur(50px)", transform: "rotateY(50deg)"}
        ])
        objectAnimtion(designDescription, 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(whitebigBackground, 1000, [
            {}, {opacity: "0%"}
        ])
        if (isVertical) {
            setTimeout(() => {
                languageIcon.style.filter = "invert(1)"
            }, 250)
        }
        if (!isVertical) {
            setTimeout(() => {
                socialMediaDivs.forEach((div) => {
                    div.style.filter = "invert(1)"
                })
            }, 250)
        }
    })

    back_button_code.addEventListener("click", () => {
        // removing glow
        theCodeSvg.style.filter = "drop-shadow(0px 0px  0px rgba(255, 255, 255, 0))"

        didClickOnBack = true
        designContainer.style.pointerEvents = "all";
        designDiv.style.zIndex = "10"
        codeTimeout = setTimeout(() => {
            codeDescription.style.display = "none"
        }, 1100)
        objectAnimtion(codeContainer, 700, [
            {}, {transform: 'scale(1.0)'}
        ])
        objectAnimtion(codeLogoBorder, 700, [
            {}, {transform: 'rotate(0deg)'}
        ])
        if (!isVertical) {
            objectAnimtion(blackBackground, 1000, [
                {}, {left: "-50%", transform: "skew(-8deg, 0deg)"}
            ])
        } else {
            objectAnimtion(blackBackground, 1000, [
                {}, {top: "-50%", transform: "skew(0deg, -8deg)"}
            ])
        }
        objectAnimtion(designContainer, 1000, [
            {opacity: "0%", offset: 0}, {opacity: "0%", offset: 0.5}, {opacity: "100%", offset: 1.0}
        ])
        objectAnimtion(codeDesign[0], 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(codeDesign[1], 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(codeDescription, 500, [
            {}, {opacity: "0%", filter: "blur(50px)", transform: "rotateY(-50deg)"}
        ])
        objectAnimtion(codeDescription, 250, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(bigBackground, 1000, [
            {}, {opacity: "0%"}
        ])

        // changing the color of the language icon
        if (!isVertical) {
            setTimeout(() => {
                languageIcon.style.filter = "invert(0)"
                languageIconNotInvert.style.filter = "invert(0)"
            }, 500)
        }
        if (isVertical) {
            setTimeout(() => {
                socialMediaDivs.forEach((div) => {
                    div.style.filter = "invert(0)"
                    languageIconNotInvert.style.filter = "invert(0)"
                })
            }, 500)
        }
    })
}

function objectAnimtion(object, duration, array, ease = "ease-in-out") {
    object.animate(
        array,
        {
            duration: duration,
            easing: ease,
            delay: 10,
            iterations: 1,
            direction: 'alternate',
            fill: 'forwards'
        }
    );
}

function changeIsVertical() {
    let previousIsVertical = isVertical
    if(window.innerHeight / window.innerWidth >= 1) isVertical = true
    else isVertical = false
    window.addEventListener("resize", (e) => {
        previousIsVertical = isVertical
        if(window.innerHeight / window.innerWidth >= 1) isVertical = true
        else isVertical = false
        if (isVertical != previousIsVertical && didClickOnBack == true) {
            window.location.reload(false)
            didClickOnBack = false
        }
    })
}


module.exports = mainInit