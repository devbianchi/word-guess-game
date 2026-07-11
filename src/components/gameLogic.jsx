import React, { useState, useEffect } from 'react';
import { WORD_LIST } from './words';

export default function WordGame() {
  const [selectedWord, setSelectedWord] = useState('');
  const [gameBoard, setGameBoard] = useState([]);
  const [maxAttempts, setMaxAttempts] = useState(10);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * WORD_LIST.length);
    const word = WORD_LIST[randomIndex].toUpperCase();

    setSelectedWord(word);
    setGameBoard(Array(word.length).fill('-'));
    setMaxAttempts(10);
    setGameStatus('playing');
    setCurrentGuess('');
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (gameStatus !== 'playing' || !currentGuess.trim()) return;

    const guess = currentGuess.toUpperCase().charAt(0);
    let isGuessCorrect = false;
    const newBoard = [...gameBoard];

    // Verifica se a letra existe na palavra sorteada
    for (let i = 0; i < selectedWord.length; i++) {
      if (guess === selectedWord.charAt(i)) {
        newBoard[i] = guess;
        isGuessCorrect = true;
      }
    }

    setGameBoard(newBoard);

    // Lógica de acerto ou erro
    if (!isGuessCorrect) {
      setMaxAttempts((prev) => prev - 1);
    }

    // Verifica fim de jogo
    if (!newBoard.includes('-')) {
      setGameStatus('won');
    } else if (maxAttempts - (!isGuessCorrect ? 1 : 0) === 0) {
      setGameStatus('lost');
    }

    // Limpa o input
    setCurrentGuess('');
  };

  return (
    <div className="py-10 bg-mauve-900 flex items-center justify-center text-mauve-50 font-mono">
      <div className="w-full max-w-6xl rounded-xl p-6 text-center">

        <h1 className="text-3xl font-bold mb-2 text-mauve-300">Word Guess</h1>
        <p className="text-mauve-300 mb-8 text-sm">Guess the hidden word</p>

        {/* Exibição da Palavra */}
        <div className="flex justify-center mb-8">
          {gameBoard.map((letter, index) => (
            <div
              key={index}
              className="w-20 h-20 flex items-center justify-center text-4xl font-bold border border-mauve-600 bg-mauve-800 uppercase"
            >
              {letter !== '-' ? letter : ''}
            </div>
          ))}
        </div>

        {/* Status e Tentativas */}
        <div className="mb-6 flex justify-between text-sm font-medium">
          <span className="text-mauve-200">Length: {selectedWord.length} letter(s)</span>
          <span className={`${maxAttempts <= 3 ? 'text-red-400' : 'text-mauve-300'}`}>
            Attempts: {maxAttempts}
          </span>
        </div>

        {/* Área de Jogo (Input ou Mensagens de Fim) */}
        {gameStatus === 'playing' ? (
          <form onSubmit={handleGuess} className="flex gap-2">
            <input
              type="text"
              maxLength={1}
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value.replace(/[^A-Za-z]/g, ''))} // Aceita só letras
              className="w-full text-center text-xl bg-mauve-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-mauve-400 p-3"
              placeholder="Insert a letter..."
              autoFocus
            />
            <button
              type="submit"
              className="bg-mauve-600 hover:bg-mauve-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              submit
            </button>
          </form>
        ) : (
          <div className="mt-4 animate-fade-in">
            {gameStatus === 'won' ? (
              <p className="text-2xl text-mauve-300 font-bold mb-4">You guessed it!</p>
            ) : (
              <p className="text-xl text-red-400 mb-4">
                Game over! The word was:<br/>
                <span className="font-bold text-white text-2xl">{selectedWord}</span>
              </p>
            )}

            <button
              onClick={startNewGame}
              className="w-full bg-mauve-600 hover:bg-mauve-700 text-white font-bold py-3 rounded-lg transition-colors mt-2"
            >
              Play Again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
