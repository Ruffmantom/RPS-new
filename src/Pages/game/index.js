import React, { useState } from 'react';
// adding the imports for the images
import rocks from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";



// game functionality
// score
const [aiScore, setAiScore] = useState(0);
const [userScore, setUserScore] = useState(0);

// countdown text
var gameText = ["Rock!", "Paper!", "Scissors!", "Shoot!"];

// timer for countdown
var secondsLeft = 4;
function timeLeft() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        // need to make this work with JSX
        $('#timer').text(secondsLeft);
        // -------------------------------
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);

        }
    }, 1000);  //milliseconds
}

export default function game() {
    return (
        <div>
            
        </div>
    )
}
