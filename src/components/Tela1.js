import React, { useState } from "react"

import Logo from "../assets/img/logo.png";
import Tela2 from "./Tela2"

import "../assets/Tela1.css"

export default function Tela1() {
    const [visivel, setVisivel] = useState(true);

    if (visivel) {
        return (
            <>
                <div className="inicio">
                    <img src={Logo} alt="imagem zap" />
                    <h1>ZapRecall</h1>

                    <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>

                </div>

            </>
        )
    }

    return <> <Tela2 /></>

    //     return visivel ? 
    //     <div className="inicio">
    //                     <img src={Logo} alt="imagem zap"/>
    //                     <h1>ZapRecall</h1>

    //                     <button onClick={() => setVisivel(false)}>Iniciar Recall!</button>   

    //                 </div> : <></>


}