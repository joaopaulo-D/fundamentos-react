import React from "react";

function Flihos(props){
    return(
        <React.Fragment>
            <h2>Os Flhos: </h2>
            <div>
                {props.chilfren}
            </div>
        </React.Fragment>
            
    );
}

export default Flihos;