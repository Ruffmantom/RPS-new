import React, { useState } from 'react';
import Header from "../../components/Header"
// adding the imports for the images
import rocks from "../../assets/rock.png";
import paper from "../../assets/paper.png";
import scissors from "../../assets/scissors.png";
// import the styles
import "./style.css";




// countdown text
var gameText = ["Rock!", "Paper!", "Scissors!", "Shoot!"];

// need to do a timer but with the text in gameText
// need a start game function also



export default function Game() {
    const [aiScore, setaiScore] = useState(0);
    const [userScore, setuserScore] = useState(0);
    let roshambo;
    function startRPS(){
        console.log("before roshambo gets ran thru")
        roshambo = setInterval(function(){
            for (var i = 0; i < gameText.length; i++){
                console.log(gameText[i])
            }
            console.log("after the loop")
        }, 1000);
        console.log("not working")
    }

    return (
        <div>
            <Header/>
            <div className="container">
                <div className="ai-container">
                    <h1 className="rps-countdown">{roshambo}</h1>
                    <div className="AI-imageBox">
                        <img src={rocks} alt="rock icon" />
                    </div>
                    <p className="ai-p">AI CHOSE <span id="ai-choice">"Rock!"</span></p>
                </div>
                {/* end of ai box */}
                <div className="users-choices">
                    <h3>CHOOSE YOUR MOVE</h3>
                    <div id="rps-coices-con">
                        <div className="choice-con" >
                            <img className="icon" src={rocks} alt="rock icon" onClick={startRPS} />
                        </div>
                        <div className="choice-con">
                            <img className="icon" src={paper} alt="paper icon" />
                        </div>
                        <div className="choice-con">
                            <img className="icon" src={scissors} alt="scissors icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
