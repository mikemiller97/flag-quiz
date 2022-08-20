import React, { useEffect } from "react"
import "../styles/lives.css"

export default function Lives(props) {
    // Reduces lives if answer is wrong

    useEffect(() => {
        if (props.lives === 3) {
            document.getElementById("three").style.visibility = "visible"
            document.getElementById("two").style.visibility = "visible"
            document.getElementById("one").style.visibility = "visible"
        }

        if (props.lives === 2) {
            document.getElementById("three").style.visibility = "hidden"
        }
        if (props.lives === 1) {
            document.getElementById("two").style.visibility = "hidden"
        }
        if (props.lives === 0) {
            document.getElementById("one").style.visibility = "hidden"
        }
    },[props.clicks])
    
    return (
        <div className="lives">
            <p>Lives:</p>
            <ul className="life">
                <li id="one">⬤</li>
                <li id="two">⬤</li>
                <li id="three">⬤</li>
            </ul>
        </div>
    )
}