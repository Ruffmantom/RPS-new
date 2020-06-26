import React from 'react';
import "./style.css";

export default function Header() {
    return (
        <div>
            <div className="header">
                <div className="aiScore score-sec">
                    <h2 id="ai-score" className="score">1</h2>
                    <p className="score-title">AI Score</p>
                </div>
                <div className="userScore score-sec">
                    <h2 id="user-score" className="score">3</h2>
                    <p className="score-title">Your Score</p>
                </div>
            </div>
        </div>
    )
}
