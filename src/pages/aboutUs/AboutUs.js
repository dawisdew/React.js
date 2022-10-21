import React from "react";

function AboutUs (props) {
    return(
        <div>
            <h1>{props.text.title}</h1>
            <h2>{props.text.subtitle}</h2>
        </div>
    )
}

export default AboutUs