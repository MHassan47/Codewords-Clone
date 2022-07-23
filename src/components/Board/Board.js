import React from "react";
import WORDS from "./WordList";
import "./Board.css";

function Board() {
  const words = [];
  const colors = ["red", "blue", "yellow", "black"];
  while (words.length < 20) {
    const word = WORDS[Math.floor(Math.random() * WORDS.length - 1)];
    if (!words.includes(word)) {
      words.push(word);
    }
  }
  console.log(words);
  return (
    <div>
      <div className="board_container">
        <div className="board_grid">
          {words.map((word) => {
            return (
              <div className="cards" key={word}>
                {word}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Board;
