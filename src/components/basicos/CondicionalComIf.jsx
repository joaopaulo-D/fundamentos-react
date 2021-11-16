import React from "react";
import If from "./If";

function CondicionalIf(props){
    return(
        <React.Fragment>
            <h2>O numero é: {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <p>Par</p>
            </If>
            <If test={props.numero % 2 === 1}>
                <p>Impar</p>
            </If>
        </React.Fragment>
    );
}

export default CondicionalIf;