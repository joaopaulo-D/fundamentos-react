import React from "react";
import * as S from "./GlobalStyles";
import Primeiro from "./components/basicos/Primeiro";
import ComFilho from "./components/basicos/ComFilhos";
import Condicional from "./components/basicos/Condicional";
import CondicionalIf from "./components/basicos/CondicionalComIf";
import Repeticao from "./components/basicos/Repeticao";
import Parametro from "./components/basicos/ComParamentro";
import Card from "./components/layout/Card";

function App(props){
    return(
        <S.App>
            <S.Cards>
                <Card title="#07 - CondicionalIf" color="#fa6900">
                    <CondicionalIf numero={13}/>
                </Card>
                <Card title="#05 - Condiconal" color="#e94c67">
                    <Condicional numero={10}/>
                </Card>
                <Card title="#04 - Repeticao" color="#008bba">
                    <Repeticao/>
                </Card>
                <Card title="#03 - Componente com Filhos" color="#d96459">
                    <ComFilho>
                        <ul>
                            <li>Teste 1</li>
                            <li>Teste 2</li>
                            <li>Teste 3</li>
                            <li>Teste 4</li>
                        </ul>
                    </ComFilho>
                </Card>
                <Card title="#02 - Componente com paremetro" color="#ff85cb">
                    <Parametro title="meu titulo" subtitle="meu subtitule"/>
                </Card>
                <Card title="#01 - Primeiro Componente" color="#92b06a">
                    <Primeiro/>
                </Card>
            </S.Cards>
        </S.App>
    )
}

export default App;