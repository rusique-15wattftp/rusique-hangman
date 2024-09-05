type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

function HangmanWord({
    guessedLetters,
    wordToGuess,
    reveal = false,
}: HangmanWordProps) {
    return (
        <div className='flex gap-3 text-2xl md:text-8xl font-bold uppercase font-mono'>
            {wordToGuess.split('').map((letter, index) => (
                <span
                    key={index}
                    className='border-b-2 md:border-b-8 border-black hover:scale-110 duration-500'>
                    <span
                        key={index}
                        className={`${
                            guessedLetters.includes(letter) || reveal
                                ? 'text-black'
                                : 'text-white'
                        } ${
                            !guessedLetters.includes(letter) && reveal
                                ? 'text-red-500'
                                : 'text-black'
                        }`}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    )
}

export default HangmanWord
