import React from "react"

export default function Choice(props) {
    
    // Behavior for if answer is correct or not
    const checkCorrect = () => {
        props.setClicks(prevClicks => prevClicks + 1)
        props.setKey(prevKey => prevKey + 1)

        if (props.choice !== props.correctChoice) {
            document.getElementById("body").style.background = "#800020"
            setInterval(() => document.getElementById("body").style.background = "#FAF9F6", 500)
        }

        if (props.choice !== props.correctChoice && props.lives > 0) {
            props.setLives(prevLives => prevLives - 1)
        }
        
        if (props.choice !== props.correctChoice && props.lives === 0) {
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