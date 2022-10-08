import { useState } from "react"; //useContext
import styled from "styled-components";
// import TokenContext from "../Contexts/AuthContext";
import img from "../Assets/img/img1.png";
import data from "./data/dataBase.js"

export default function FlashCardsPage() {



  const [questoes, setQuestoes] = useState([]);
const flashcards

  return (
    <Container>
      <Header>
        <img src={img} alt="imagem-header" /> 
        <p>Zap Recall</p>
      </Header>
      <Main>
        {flashcards}
      </Main>
      <Footer>
<p>0/4 Concluídos</p>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Header = styled.div`
padding-top: 42px;
display: flex;
p{
  width: 203.17px;
height: 44px;
padding-top: 5px;
font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
letter-spacing: -0.012em;
color: #FFFFFF;

transform: rotate(0.58deg);
}
img{
    width: 52px;
height: 60px;
padding-right: 10px;
margin-left: 40px;
}
`;
const Titulo = styled.div`
width: 203.17px;
height: 44px;
padding-top: 30px;

font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
letter-spacing: -0.012em;

color: #FFFFFF;

transform: rotate(0.58deg);
`;
const Main = styled.div`
padding-top: 300px;
`
const Footer = styled.div`
position: fixed;
bottom: 20px;
z-index: 1;
`