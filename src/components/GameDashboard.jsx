import React from 'react';
import LetterCard from "../assets/LetterCard.jsx";

function GameDashboard() {
    return (
        <div className="game-page">
            <section className="py-10 px-20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-mauve-50 font-mono">Welcome to Word Guess!</h2>
                <p className="text-lg mb-6 text-mauve-200">Guess the word by revealing letters. Click on a letter to reveal it.</p>
                <div className="flex justify-center gap-4">
                    <LetterCard letter="A" isRevealed={false} />
                    <LetterCard letter="B" isRevealed={true} />
                    <LetterCard letter="C" isRevealed={false} />
                    <LetterCard letter="D" isRevealed={true} />
                </div>

            </section>
        </div>
    );

}

export default GameDashboard;
