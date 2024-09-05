import styles from './Keyboard.module.css'

const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

type KeyBoardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    onAddGuessedLetters: (letter: string) => void
    disabled?: boolean
}

function HangmanKeyboard({
    activeLetters,
    inactiveLetters,
    disabled = false,
    onAddGuessedLetters,
}: KeyBoardProps) {
    return (
        <div className='px-6 grid grid-cols-[repeat(auto-fit,_minmax(40px,_1fr))] gap-1 md:grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] md:gap-2'>
            {KEYS.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button
                        onClick={() => onAddGuessedLetters(key)}
                        disabled={isActive || isInactive || disabled}
                        key={key}
                        className={`${styles.btn} ${
                            isActive ? styles.active : ''
                        } ${
                            isInactive ? styles.inactive : ''
                        } shadow-lg`}>
                        {key}
                    </button>
                )
            })}
        </div>
    )
}

export default HangmanKeyboard
