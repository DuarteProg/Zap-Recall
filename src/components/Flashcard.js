import { useState } from "react";


export default function Flashcard(props) {
    const { frente, verso, indice } = props;
    const [etapa, setEtapa] = useState(1);

if(etapa === 1){
    return <h2 onClick={() => setEtapa(2)}>Pergunta {indice + 1}</h2>
}

if(etapa === 2){
    return <h2 onClick={() => setEtapa(3)}>{frente}</h2>
}

if(etapa === 3){
    return <h2 onClick={() => setEtapa(4)}>{verso}</h2>
}

if(etapa === 4){
    return <h2>acabou!!</h2>
}


}