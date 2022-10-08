 import { Link } from "react-router-dom";  
import styled from "styled-components";
import img from "../Assets/img/img1.png"

export default function HomePage() {
    return (
<Container>
    
    <Img><img src={img} alt="Logo" /></Img>
<Frase>
<p>ZapRecall</p>
</Frase>
<Link to={`/flashcards`}> 
<Frase2>
<p>Iniciar Recall!</p>
</Frase2>
</Link>
</Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Img = styled.div`
width: 136px;
height: 161px;
padding-top: 148px;
`

const Frase= styled.div`
width: 257px;
height: 59px;

font-family: 'Righteous';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 45px;
letter-spacing: -0.012em;
padding-left: 100px;
padding-top: 16px;
color: #FFFFFF;
`
const Frase2 = styled.div`
margin-top: 30px;
width: 246px;
height: 54px;
background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #D70900;
`