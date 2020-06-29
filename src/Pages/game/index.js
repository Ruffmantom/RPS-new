import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
// adding the imports for the images
import rocks from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";
// import the styles
import "./style.css";
// choices for game
const rpsChoices = ["rock", "paper", "scissors"];
// countdown text
var gameText = ["Rock!", "Paper!", "Scissors!", "Shoot!"];



export default function Game() {
    // need to do a timer but with the text in gameText
    var [aiScore, setaiScore] = useState(0);
    var [userScore, setuserScore] = useState(0);
    var [aiChoice, setAiChoice] = useState();
    var [aiImgChoice, setAiImgChoice] = useState(rocks);
    let roshambo;

    // got the functionality for getting the name of the icon chosen "users Choice"
    function getData(e) {
        const usersPick = e.target.getAttribute("data-name");
        console.log("You chose " + usersPick);
        startRPS(usersPick)
    }
    // function for chhosing ai image choice
    function aiImage(aichoice) {
        if (aichoice === "rock") {
            setAiImgChoice(aiImgChoice = rocks)
        } else if (aichoice === "paper") {
            setAiImgChoice(aiImgChoice = paper)
        } else {
            setAiImgChoice(aiImgChoice = scissors)
        }
    }
    // actual rps game function
    function rpsGame(usersChoice) {
        const aiChoices = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
        console.log("Ai chose " + aiChoices);
        setAiChoice(aiChoice = '"' + aiChoices.toLocaleUpperCase() + '"');
        aiImage(aiChoices);
        // picking the winner
        if (usersChoice === aiChoices) {
            console.log("tie!")
        } else if ((usersChoice === "rock" && aiChoices === "paper") ||
            (usersChoice === "paper" && aiChoices === "scissors") ||
            (usersChoice === "scissors" && aiChoices === "rock")) {
            console.log("AI Won!")
            setaiScore(aiScore + 1)
            // aiScore++
            console.log("AI score " + aiScore)
        } else {
            console.log("You Won!")
            setuserScore(userScore + 1)
            // userScore++
            console.log("your score " + userScore)
        }
    }
    // main function to read through the array
    var i = 0;
    function readRPS() {
        var h1El = document.getElementById('rps-countdown');
        var aiImgBox = document.getElementById('AI-imageBox');
        var gameTextInterval = setInterval(() => {
            if (gameText[i] === undefined) {
                clearInterval(gameTextInterval);
                var resetinterval = setInterval(() => {
                    clearInterval(resetinterval);
                    h1El.innerHTML = "Ready?";
                    setAiImgChoice(aiImgChoice = rocks);
                    setAiChoice(aiChoice = "")
                    aiImgBox.classList.remove("bounce");
                }, 3500);
            } else {
                h1El.innerHTML = gameText[i];
                i++
                aiImgBox.classList.add("bounce");
            }
        }, 550);
    }
    // click event to grab choice, start count down, and start game 
    function startRPS(usersChoice) {
        console.log("GAME STARTED!")
        // need to start the RPS text countdown
        readRPS()
        // passing users choice into the game to evaluate winner
        // I will need to make this function an await since it needs to have answer before the countdown ends
        var displayscoreInterval = setInterval(() => {
            rpsGame(usersChoice)
            clearInterval(displayscoreInterval);
        }, 3150);

    }

    return (
        <div>
            <Header
                aiScore={aiScore}
                userScore={userScore}
            />
            <div className="container">
                <div className="ai-container">
                    {/* might need to switch this to be state */}
                    <h1 id="rps-countdown">Ready?</h1>
                    <div id="stage">
                        <div id="AI-imageBox">
                            {/* this image will change when the ai gets a choice */}
                            <img src={aiImgChoice} alt="rps icon" />
                        </div>
                    </div>

                    <p className="ai-p">AI CHOSE <span id="ai-choice">{aiChoice}</span></p>
                </div>
                {/* end of ai box */}
                <div className="users-choices">
                    <h3>CHOOSE YOUR MOVE</h3>
                    <div id="rps-coices-con">
                        <div className="choice-con">
                            <img className="icon" src={rocks} alt="rock icon" onClick={getData} data-name="rock" />
                        </div>
                        <div className="choice-con">
                            <img className="icon" src={paper} alt="paper icon" onClick={getData} data-name="paper" />
                        </div>
                        <div className="choice-con">
                            <img className="icon" src={scissors} alt="scissors icon" onClick={getData} data-name="scissors" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

