import React from 'react'

export function Header({ onNewGame = () => {}, onPreviousGame = () => {}, onExplore = () => {} }) {
    return (
        <header className="bg-mauve-900 text-white p-4 flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:items-center border-b border-mauve-700">
            <h1 className="text-xl font-bold uppercase font-mono">Word Guess!</h1>
    
        </header>
    )
}

export default Header
