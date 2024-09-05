import { useCallback, useEffect, useState } from 'react'
import words from './wordList.json'

import HangmanDrawing from './components/HangmanDrawing'
import HangmanWord from './components/HangmanWord'
import Keyboard from './components/Keyboard'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 6
    const isWinner = wordToGuess
        .split('')
        .every(letter => guessedLetters.includes(letter))

    let text = <div>Guess the word! Good luck!</div>

    if (isWinner) {
        text = (
            <div className='text-green-700'>
                You won! Refresh or hit "Enter" to start again!
            </div>
        )
    }

    if (isLoser) {
        text = (
            <div className='text-red-500'>
                You lost! Refresh or hit "Enter" to start again!
            </div>
        )
    }

    // functions are down here

    const addGuessedLetters = useCallback(
        (letter: string) => {
            if (
                guessedLetters.includes(letter) ||
                isWinner ||
                isLoser
            )
                return
            setGuessedLetters(currentLetters => [
                ...currentLetters,
                letter,
            ])
        },
        [guessedLetters, isWinner, isLoser]
    )

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetters(key)
        }

        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener('keypress', handler)
        }
    }, [guessedLetters, addGuessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key

            if (key !== 'Enter') {
                return
            }

            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }

        document.addEventListener('keypress', handler)

        return () => {
            document.removeEventListener('keypress', handler)
        }
    })

    return (
        <div className='max-w-[800px]  flex flex-col gap-8 mx-auto my-0 items-center'>
            <div className='mt-10 md:text-4xl text-center md:mt-20 '>
                {text}
            </div>
            <div className='md:text-xl text-center italic'>
                Hit "Enter" to change the word!
            </div>
            <HangmanDrawing
                numberOfGuesses={incorrectLetters.length}
            />
            <HangmanWord
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
                reveal={isLoser}
            />

            <div className='self-stretch md:px-8 md:py-8'>
                <Keyboard
                    activeLetters={guessedLetters.filter(letter =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    onAddGuessedLetters={addGuessedLetters}
                    disabled={isWinner || isLoser}
                />
            </div>
        </div>
    )
}

export default App
