import { useState } from "react";

export default function GameBoard({ playerChange, board }) {
  //   const [gameState, setGameState] = useState(initialGameBoard);

  //   function handleGameBoxClick(rowIndex, colIndex) {
  //     setGameState((previousGameState) => {
  //       const updatedGameState = [
  //         ...previousGameState.map((innerArray) => [...innerArray]),
  //       ];
  //       updatedGameState[rowIndex][colIndex] = playerSymbol;
  //       return updatedGameState;
  //     });
  //     playerChange();
  //   }

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
