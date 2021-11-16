import React from "react";
import lingaugens from "../../data/linguagens";

function Repeticao(props){

    return( 
        lingaugens.map((lang) => {
            return(
                <p key={lang.id}>{lang.nome}</p>
            )
        })
    );
}   

export default Repeticao;