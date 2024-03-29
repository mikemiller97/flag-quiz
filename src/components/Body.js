import React, { useEffect } from "react";
import codes from "../data/codes"
import Choice from "./Choice"
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import "../styles/body.css"
import Lives from "./Lives"

export default function Body(props) {
    const [flag, setFlag] = React.useState("https://countryflagsapi.com/png/826")
    const [usedFlags, setUsedFlags] = React.useState([])
    const [choice1, setChoice1] = React.useState([])
    const [choice2, setChoice2] = React.useState([])
    const [choice3, setChoice3] = React.useState([])
    const [choice4, setChoice4] = React.useState([])
    const [gameOver, setGameOver] = React.useState(false)
    const [correctChoice, setCorrectChoice] = React.useState("")
    const [score, setScore] = React.useState(0)
    const [showStart, setShowStart] = React.useState(true)
    const [highScore, setHighScore] = React.useState(localStorage.getItem("highScore") ? JSON.parse(localStorage.getItem("highScore")) : 0)
    const [key, setKey] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false)
    const [lives, setLives] = React.useState(3)
    const [clicks, setClicks] = React.useState(0)

    const allData = codes

    // Make a time left component that counts down from 7, changes colors, and resets on a right answer

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
    }
    
    // function to change the flag when needed
    const changeFlag = () => {
        // Selects random flag from data and applies it to image
        let randomFlag = (Math.floor(Math.random() * allData.codes.length).toString())

        while (usedFlags.includes(randomFlag)) {
            randomFlag = (Math.floor(Math.random() * allData.codes.length).toString())
        }

        usedFlags.push(randomFlag)

        // Populates choices to pick from
        let flagChoices = []

        while (flagChoices.length < 3) {
            let falseFlag = Math.floor(Math.random() * allData.codes.length).toString()

            if (falseFlag === randomFlag) continue
            if (flagChoices.includes(allData.codes[falseFlag].name)) continue

            flagChoices.push(allData.codes[falseFlag].name)
        }

        flagChoices.push(allData.codes[randomFlag].name)
        setCorrectChoice(allData.codes[randomFlag].name)

        shuffle(flagChoices)

        setChoice1(flagChoices[0])
        setChoice2(flagChoices[1])
        setChoice3(flagChoices[2])
        setChoice4(flagChoices[3])


        let newLink = "https://countryflagsapi.com/png/" + allData.codes[randomFlag].code.toString()
    

        setFlag(newLink)
    }

    const startGame = () => {
            setScore(0)
            setShowStart(false)
            setGameOver(false)
            changeFlag()
            setKey(prevKey => prevKey + 1)
            setLives(3)
            setClicks(prevClicks => prevClicks + 1)
    }

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // Detects when to add points, when game is started/finished
    useEffect(() => {
        window.addEventListener("resize", handleResize)

        if (usedFlags.length === allData.codes.length) {
            props.setVictory(true)
        }

        if (highScore < score) {
            setHighScore(score)
            localStorage.setItem("highScore", JSON.stringify(score))
        }
        
        if (gameOver === true) {
            setShowStart(true)
            return
        }

        if (score >= 0) {
            changeFlag()
        }
    }, [score, gameOver, clicks])

    return (
        <div className="body" id="body">
            <div className="title">
                <h1>Flag Quiz</h1>
            </div>

            <div className="timer">
                <CountdownCircleTimer
                    key={key}
                    onComplete={() => {
                        document.getElementById("body").style.background = "#800020"
                        setInterval(() => document.getElementById("body").style.background = "#FAF9F6", 500)
                        setGameOver(true)}}
                    isPlaying={!showStart}
                    duration={7}
                    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                    colorsTime={[7, 5, 2, 0]}
                    size={isMobile ? 80 :120}
                    >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </div>

            {gameOver ? 
                <div className="game-over-message">
                    <p>Game Over!</p> 
                    <p>The correct answer was {correctChoice}</p>
                </div> : null}
            <img src={flag} alt="A flag that must be guessed" id="flag" crossorigin="anonymous"/>
            {!showStart ? <div className="choices">
                <Choice 
                    choice={choice1} 
                    correctChoice={correctChoice}
                    setGameOver={setGameOver}
                    gameOver={gameOver}
                    addPoint={setScore}
                    point={score}
                    setKey={setKey}
                    setLives={setLives}
                    lives={lives}
                    setClicks={setClicks}
                />
                <Choice 
                    choice={choice2}
                    correctChoice={correctChoice}
                    setGameOver={setGameOver}
                    gameOver={gameOver}
                    addPoint={setScore}
                    point={score}
                    setKey={setKey}
                    setLives={setLives}
                    lives={lives}
                    setClicks={setClicks}
                />
                <Choice 
                    choice={choice3}
                    correctChoice={correctChoice}
                    setGameOver={setGameOver}
                    gameOver={gameOver}
                    addPoint={setScore}
                    point={score}
                    setKey={setKey}
                    setLives={setLives}
                    lives={lives}
                    setClicks={setClicks}
                />
                <Choice
                    choice={choice4}
                    correctChoice={correctChoice}
                    setGameOver={setGameOver}
                    gameOver={gameOver}  
                    addPoint={setScore} 
                    point={score}
                    setKey={setKey}
                    setLives={setLives}
                    lives={lives}
                    setClicks={setClicks}
                />
            </div> : null}
            {showStart ? <button className="button-4" onClick={startGame}>Start</button> : null}
            
            <Lives 
                lives={lives}
                setLives={setLives}
                clicks={clicks}
            />
            <div className="scores">
                <p>Score: {score}</p>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    )
}