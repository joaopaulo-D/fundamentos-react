import React from "react";

function Condicional(props){
    return(
        <React.Fragment>
            <h2>O numero é: {props.numero}</h2>
            {props.numero % 2 === 0 ?
                <p>Par</p> 
                    :
                <p>Impar</p>
            }
        </React.Fragment>
    );
}

export default Condicional;