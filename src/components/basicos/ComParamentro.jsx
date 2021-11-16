import React from "react";

function Paramentro(props){
    return(
        <React.Fragment>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </React.Fragment>
    )
}

export default Paramentro;