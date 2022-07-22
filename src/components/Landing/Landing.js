import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing_container">
      <div className="header">
        <div className="join_game">Join Game</div>
        <div className="create_game">Create Game</div>
      </div>
      <div className="username">
        <input type="text" placeholder=" username" />
      </div>
      <div className="room_name">
        <input type="text" placeholder="room name" />
      </div>
    </div>
  );
}

export default Landing;
