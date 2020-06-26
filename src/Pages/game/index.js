import React, { useState, useEffect } from 'react';
import Header from "../../components/Header"
// adding the imports for the images
import rocks from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";
// import the styles
import "./style.css";

export default function Game() {
    // countdown text
    var gameText = ["Rock!", "Paper!", "Scissors!", "Shoot!"];
    // need to do a timer but with the text in gameText
    // need a start game function also
    let [aiScore, setaiScore] = useState(0);
    let [userScore, setuserScore] = useState(0);
    let roshambo;

    // got the functionality for getting the name of the icon chosen "users Choice"
    function getData(e) {
        const usersPick = e.target.getAttribute("data-name");
        console.log("You chose " + usersPick);
        startRPS(usersPick)
    }
    // actual rps game
    function rpsGame(usersChoice){
        const rpsChoices = ["rock", "paper", "scissors"];
        const aiChoices = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
        console.log("Ai chose "+aiChoices);
        // picking the winner
        if (usersChoice === aiChoices){
            console.log("tie!")
        } else if (usersChoice === "rock" && aiChoices === "paper"){
            console.log("Ai won!")
            setaiScore++
        } else if (usersChoice === "paper" && aiChoices === "scissors"){
            console.log("Ai won!")
            setaiScore++
        } else if (usersChoice === "scissors" && aiChoices === "rock"){
            console.log("Ai won!")
            setaiScore++
        } else{
            console.log("You Won!")
            setuserScore++
        }
    }
    // click event to grab choice start count down and start game 

    function startRPS(usersChoice) {
        rpsGame(usersChoice)
        // console.log("before roshambo gets ran thru")
        // roshambo = setInterval(function () {
        //     for (var i = 0; i < gameText.length; i++) {
        //         console.log(gameText[i])
        //     }
        //     console.log("after the loop")
        // }, 1000);
        // console.log("not working")
    }

    return (
        <div>
            <Header 
            aiScore={aiScore}
            userScore={userScore}
            />
            <div className="container">
                <div className="ai-container">
                    <h1 className="rps-countdown">{roshambo}</h1>
                    <div className="AI-imageBox">
                        {/* this image will change when the ai gets a choice */}
                        <img src={rocks} alt="rock icon" />
                    </div>
                    <p className="ai-p">AI CHOSE <span id="ai-choice">"Rock!"</span></p>
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
