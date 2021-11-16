import React from "react";
import * as S from "./style";

function Card(props){
    return(
        <S.Card style={{ borderColor: props.color || "#000" }}>
            <S.Content>
                {props.children}
            </S.Content>

            <S.Footer style={{ backgroundColor: props.color || '#000' }}>
                {props.title}
            </S.Footer>
        </S.Card>
    );  
}

export default Card;