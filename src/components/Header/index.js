import React from 'react';
import "./style.css";

export default function Header(props) {
    return (
        <div>
            <div className="header">
                <div className="aiScore score-sec">
                    <h2 id="ai-score" className="score">{props.aiScore}</h2>
                    <p className="score-title">AI Score</p>
                </div>
                <div className="userScore score-sec">
                    <h2 id="user-score" className="score">{props.userScore}</h2>
                    <p className="score-title">Your Score</p>
                </div>
            </div>
        </div>
    )
}
