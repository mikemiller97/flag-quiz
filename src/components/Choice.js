import React from "react"

export default function Choice(props) {
    
    // Behavior for if answer is correct or not
    const checkCorrect = () => {
        if (props.choice !== props.correctChoice) {
            props.setGameOver(true)
        }
        else if (!props.gameOver && props.choice === props.correctChoice) {
            props.addPoint(props.point + 1)
            props.setKey(prevKey => prevKey + 1)
        }
    }

    return (
        <div className="choice">
            <button className="button-4" onClick={checkCorrect}>{props.choice}</button>
        </div>
    )
}