export default function GameOver({ winner, handleRestart }) {
  return (
    <div id="game-over">
      <h1>Game Over!</h1>
      {winner && <p>{winner} WON!</p>}
      {!winner && <p> Game has Draw!</p>}
      <button onClick={handleRestart}>Rematch</button>
    </div>
  );
}
