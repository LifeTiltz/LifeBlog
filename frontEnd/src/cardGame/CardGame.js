import { useEffect, useState } from "react"
import "./CardGame.css"
import SingleCard from "./SingleCard"


const cardImages = [
    { "src": "./images/king.jpg", matched: false },
    { "src": "./images/boredape1.png", matched: false },
    { "src": "./images/ape2.jpg", matched: false },
    { "src": "./images/ape3.png", matched: false },
    { "src": "./images/bored-ape.gif", matched: false },
]

export default function CardGame() {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choices, setChoices] = useState([])
    const [won, setWon] = useState(false);
    // won checking isnt yet implemented 

    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card, id: Math.random() }))
        setCards(shuffledCards)
        setTurns(0)
        setChoices([])
        setWon(false)
    }

    const handleChoice = (card) => {
        if (choices[0] !== undefined && choices[1] == undefined) {
            setChoices(arr => [...arr, card])
            return
        }
        if (choices[0] !== undefined && choices[1] !== undefined) {
            setChoices(arr => [...arr, card])
            return
        }
        setChoices(arr => [...arr, card])
    }

    useEffect(() => {
        shuffleCards()
    }, [])

    useEffect(() => {
        if (choices[0] !== undefined) {
            if (choices[0].src === choices[1].src && choices[1].src === choices[2].src) {
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if (card.src === choices[0].src) {
                            return { ...card, matched: true }
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            }
            else {
                setTimeout(() => resetTurn(), 750)
            }
        }


    }, [choices[2]])

    const resetTurn = () => {
        setChoices([])
        setTurns(turns => turns + 1)
    }



    return (
        <div className="cardgame">
            <h1>Connect 3 Cards</h1>
            <button onClick={shuffleCards}>New Game</button>
            {won && <div>YOU WONN in {turns} turns!</div>}
            <div className="card-grid">
                {cards.map(card => (
                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choices[0] || card === choices[1] || card === choices[2] || card.matched}
                    />
                ))}
            </div>
            <h1>Turn {turns}</h1>
        </div>
    )
}
