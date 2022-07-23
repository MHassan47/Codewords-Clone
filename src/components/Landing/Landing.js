import React from "react";
import "./Landing.css";
import { useState } from "react";

function Landing() {
  const [gameType, setGameType] = useState();
  console.log(gameType);
  return (
    <div>
      <div className="logo">
        <p>Codewords</p>
        <div>Clone</div>
      </div>
      <div className="landing_container">
        <div className="header">
          <h2 className="join_game" onClick={() => setGameType("Join Game")}>
            Join Game
          </h2>
          <h2
            className="create_game"
            onClick={() => setGameType("Create Game")}
          >
            Create Game
          </h2>
        </div>
        <div className="username">
          <input type="text" placeholder=" username" />
        </div>
        <div className="room_name">
          <input type="text" placeholder="room name" />
        </div>
        <div className="join_btn">{gameType}</div>
      </div>
    </div>
  );
}

export default Landing;
