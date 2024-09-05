const HEAD = (
    <div className='h-[40px] w-[40px] border-[5px] top-[24px] right-[-17px] md:h-[80px] md:w-[80px] md:border-[10px] border-black rounded-full absolute md:top-[45px] md:right-[-35px]' />
)

const BODY = (
    <div className='h-[60px] w-[5px] top-[62px] right-0 md:h-[120px] md:w-[10px] bg-black absolute md:top-[121px] md:right-0 ' />
)

const RIGHT_ARM = (
    <div className='h-[5px] w-[50px] top-[80px] right-[-50px] md:h-[10px] md:w-[100px] bg-black absolute md:top-[150px] md:right-[-100px] rotate-[-30deg] origin-bottom-left' />
)

const LEFT_ARM = (
    <div className='h-[5px] w-[50px] top-[80px] right-[5px] md:h-[10px] md:w-[100px] bg-black absolute md:top-[150px] md:right-[10px] rotate-[30deg] origin-bottom-right' />
)

const RIGHT_LEG = (
    <div className='h-[5px] w-[50px] top-[114px] right-[-45px] md:h-[10px] md:w-[100px] bg-black absolute md:top-[225px] md:right-[-90px] rotate-[60deg] origin-bottom-left' />
)
const LEFT_LEG = (
    <div className='h-[5px] w-[50px] top-[114px] right-0 md:h-[10px] md:w-[100px] bg-black absolute md:top-[225px] md:right-0 rotate-[-60deg] origin-bottom-right' />
)

const BODY_PARTS = [
    HEAD,
    BODY,
    RIGHT_ARM,
    LEFT_ARM,
    RIGHT_LEG,
    LEFT_LEG,
]

type HangmanDeawingProps = {
    numberOfGuesses: number
}

function HangmanDrawing({ numberOfGuesses }: HangmanDeawingProps) {
    return (
        <div className='relative'>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className='h-[25px] w-[5px] md:h-[50px] md:w-[10px] bg-black top-0 right-0 absolute' />
            <div className='h-[5px] w-[100px] md:h-[10px] md:w-[200px] bg-black ml-[120px]' />
            <div className='h-[200px] w-[5px] md:h-[400px] md:w-[10px] bg-black ml-[120px]' />
            <div className='h-[5px] w-[125px] md:h-[10px] md:w-[250px] bg-black right-[35px] absolute' />
        </div>
    )
}

export default HangmanDrawing
