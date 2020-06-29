import React from 'react';
import "./style.css";

export default function Winner(props) {
    return (
        <div>
            <div id="winnerDiv" className="winnerClosed">
                <p id="winner-text"> {props.winnerText}</p>
            </div>
        </div>
    )
}
