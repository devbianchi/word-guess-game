import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx';
import LetterCard from './assets/LetterCard.jsx';
import GameDashboard from './components/GameDashboard.jsx';
import WordGame from "./components/gameLogic.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <WordGame />
      <Footer />
    </>
  )
}

export default App
