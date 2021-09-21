function mainInit() {
    // selecting the svg border paths of the 
    let designLogoBorder = document.querySelector(".designLogoBorder")
    let codeLogoBorder = document.querySelector(".codeLogoBorder")

    // selecting the div 
    let designContainer = document.querySelector(".designDiv .container")
    let codeContainer = document.querySelector(".codeDiv .container")

    // selecting the black background
    let blackBackground = document.querySelector(".animationBackground")
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

    // selecting the svf
    let codeSvg = document.querySelector(".codeDescription .button svg")
    let designSvg = document.querySelector(".designDescription .button svg")

    // exetute animation when mouse entering html element space
    designContainer.addEventListener("mouseenter", () => {
        objectAnimtion(designContainer, 200, [
            {}, {transform: 'scale(1.25)'}
        ])
        objectAnimtion(designLogoBorder, 1000, [
            {}, {transform: 'rotate(180deg)'}
        ])
        objectAnimtion(blackBackground, 1000, [
            {}, {left: "-100%", transform: "skew(0deg, 0deg)"}
        ])
        objectAnimtion(codeContainer, 500, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(theDesignDesign[0], 2000, [
            {opacity: "0%", offset: 0.5}, {opacity: "25%"}
        ])
        objectAnimtion(theDesignDesign[1], 2000, [
            {opacity: "0%", offset: 0.5}, {opacity: "10%"}
        ])
        objectAnimtion(logo, 2000, [
            {filter: "invert(0)", offset: 0.5}, {filter: "invert(1)"}
        ])
        objectAnimtion(designDescription, 2000, [
            {}, {opacity: "100%"}
        ])
        objectAnimtion(designDescription, 1500, [
            {}, {transform: "rotateY(0deg) translate(-50%, -50%)"}
        ], "ease-out")
        objectAnimtion(designSvg, 2000, [
            {}, {transform: "rotateY(0deg)"}
        ])
        objectAnimtion(designDescription, 1250, [
            {}, {filter: "blur(0px)"}
        ])
        objectAnimtion(whitebigBackground, 2000, [
            {}, {opacity: "100%"}
        ])
    })

    codeContainer.addEventListener("mouseenter", () => {
        objectAnimtion(codeContainer, 200, [
            {}, {transform: 'scale(1.25)'}
        ])
        objectAnimtion(codeLogoBorder, 1000, [
            {}, {transform: 'rotate(-180deg)'}
        ])
        objectAnimtion(blackBackground, 1000, [
            {}, {left: "0%", transform: "skew(0deg, 0deg)"}
        ])
        objectAnimtion(designContainer, 500, [
            {}, {opacity: "0%"}
        ])
        objectAnimtion(codeDesign[0], 2000, [
            {opacity: "0%", offset: 0.5}, {opacity: "25%"}
        ])
        objectAnimtion(codeDesign[1], 2000, [
            {opacity: "0%", offset: 0.5}, {opacity: "10%"}
        ])
        objectAnimtion(codeDescription, 2000, [
            {}, {opacity: "100%"}
        ])
        objectAnimtion(codeDescription, 1500, [
            {}, {transform: "rotateY(0deg) translate(50%, -50%)"}
        ], "ease-out")
        objectAnimtion(codeSvg, 2000, [
            {}, {transform: "rotateY(0deg)"}
        ])
        objectAnimtion(codeDescription, 1250, [
            {}, {filter: "blur(0px)"}
        ])
        objectAnimtion(bigBackground, 2000, [
            {}, {opacity: "100%"}
        ])
    })

    // exetute animation when mouse leaves html element space
    designContainer.addEventListener("mouseleave", () => {
        objectAnimtion(designContainer, 700, [
            {}, {transform: 'scale(1.0)'}
        ])
        objectAnimtion(designLogoBorder, 700, [
            {}, {transform: 'rotate(0deg)'}
        ])
        objectAnimtion(blackBackground, 1000, [
            {}, {left: "-50%", transform: "skew(-8deg, 0deg)"}
        ])
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
        objectAnimtion(designSvg, 500, [
            {}, {transform: "rotateY(50deg)"}
        ])
        objectAnimtion(whitebigBackground, 1000, [
            {}, {opacity: "0%"}
        ])
    })

    codeContainer.addEventListener("mouseleave", () => {
        objectAnimtion(codeContainer, 700, [
            {}, {transform: 'scale(1.0)'}
        ])
        objectAnimtion(codeLogoBorder, 700, [
            {}, {transform: 'rotate(0deg)'}
        ])
        objectAnimtion(blackBackground, 1000, [
            {}, {left: "-50%", transform: "skew(-8deg, 0deg)"}
        ])
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
        objectAnimtion(codeSvg, 500, [
            {}, {transform: "rotateY(-50deg)"}
        ])
        objectAnimtion(bigBackground, 1000, [
            {}, {opacity: "0%"}
        ])
    })

    // function for easily making animation to an object
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
}

module.exports = mainInit