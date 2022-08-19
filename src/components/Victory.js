import React from "react"
import "../styles/victory.css"

export default function Victory() {
    return (
        <div className="victory">
            <div className="title">
                <h1>Flag Quiz</h1>
            </div>

            <h2>You win!!</h2>
            <p>That's all the flags in the game. You really know your vexillology!</p>
        </div>
    )
}