import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/join.scss";

export default () => {
 
  return (
    <div>
      <h1>BETHEONE.IO</h1>
      <h1>Rules :</h1>
      <p>
        You will play with 100 people. Each one of you spend 1 credit. You have
        to choose between left or right.
      </p>
      <p>if you are in the MINORITY, you go step 2</p>
      <p>And here we go again until you are the one</p>
      <p>
        the winner take 98 credits, the 2nd keep his credit, and one is for us
      </p>
      <div className="joinbox">
        <div className="joinbox__button">
          <Link to="/play">
            <h2> JOIN THE ROOM </h2>
          </Link>
        </div>

        <div className="joinbox__form">
          <input type="text" name="name" placeholder="Choose your name" />
          <input type="text" name="name" placeholder="Choose your name" />
        </div>
      </div>
    </div>
  );
};
