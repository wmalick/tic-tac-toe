import { useState } from "react";

export default function GameBoard({ playerChange, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((gameBox, gameBoxIndex) => (
              <li key={gameBoxIndex}>
                <button
                  onClick={() => playerChange(rowIndex, gameBoxIndex)}
                  disabled={gameBox !== null}
                >
                  {gameBox}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
