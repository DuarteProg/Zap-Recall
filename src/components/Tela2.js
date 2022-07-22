import dados from "./dados"

import "../assets/Tela2.css"
import LogoPequeno from "../assets/img/logo-pequeno.png"
import { useState } from "react"
import Flashcard from "./Flashcard";

export default function Tela2() {
    function montarFlashCards() {
        if (questoes.length === 0) {
            dados.sort((a, b) => Math.random() - 0.5);
            setQuestoes([...dados]);
            return <></>
        } else {
            return questoes.map((questao, indice) => {
                const { frente, verso } = questao;
                return <Flashcard
                    key={frente + indice}
                    frente={frente}
                    verso={verso}
                    indice={indice}
                />
            })
        }
    }



    const [questoes, setQuestoes] = useState([]);
    const flashcards = montarFlashCards();
    return (
        <div className="FlashCards">
            <header>
                <img src={LogoPequeno} alt="imagem pequena" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {flashcards}
            </main>
            <footer>
                <p>0/4 CONCLUÍDOS</p>
            </footer>
        </div>
    )
}

