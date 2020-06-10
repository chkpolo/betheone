import React from 'react';
import { Link } from "react-router-dom";
import '../styles/game.scss'

export default () => {


    return(
        <div>
            <h1>betheone.io</h1>
            <div class = "gamebox">
                <div class = "gamebox__left">
                    <button><Link to="/results">Left</Link></button>
                </div>
                <div class = "gamebox__center" id="user-information">
                    <p>Louis La brocante</p>
                    <p>🐎</p>
                </div>
                <div class = "gamebox__right">
                <button><Link to="/results">Right</Link></button>
                </div>
            </div>
        </div>
    )
}