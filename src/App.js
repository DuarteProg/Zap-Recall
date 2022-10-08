import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react"
import HomePage from "./Components/HomePage.js"
import FlashCardsPage from "./Components/FlashCadsPage.js"



// import TokenContext from "./Contexts/AuthContext";

export default function App() {

//   const [click, setClick] = useState()


  return (
    // <TokenContext.Provider value={{ click, setClick}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/flashcards" element={<FlashCardsPage />} /> 
        </Routes>
      </BrowserRouter>
    // </TokenContext.Provider>
    // onClick={() => setClick(true)} usar pra ficar true
  );
}