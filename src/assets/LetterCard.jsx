function LetterCard({ letter, isRevealed }) {
    return (
        <div className={`w-16 h-16 bg-mauve-700 flex items-center justify-center border-2 ${isRevealed ? 'border-mauve-500' : 'border-gray-300'} rounded-md`}>
            {isRevealed && <span className="text-4xl text-mauve-50 font-bold">{letter}</span>}
        </div>
    )
}

export default LetterCard;
