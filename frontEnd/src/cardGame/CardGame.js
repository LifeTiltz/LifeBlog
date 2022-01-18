import { useState } from "react"
import "./CardGame.css"


const cardImages = [
    { "src": "/img/helmet-1.png" },
    { "src": "/img/potion-1.png" },
    { "src": "/img/ring-1.png" },
    { "src": "/img/scroll-1.png" },
    { "src": "/img/shield-1.png" },
    { "src": "/img/sword-1.png" },
]

export default function CardGame() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffledCards)
        setTurns(0)
    }
    console.log(cards + turns);
    return (
        <div className="cardgame">
            <h1>Connect 3 Cards</h1>
            <button onClick={shuffleCards}>New Game</button>
        </div>
    )
}