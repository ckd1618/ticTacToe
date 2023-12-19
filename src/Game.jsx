import React, { useState } from 'react';
import './Game.css';

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function GameBoard({ squares, onClick }) {
  return (
    <div>
      <div className="board-row">
        {squares.slice(0, 3).map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((square, i) => (
          <Square key={i + 3} value={square} onClick={() => onClick(i + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((square, i) => (
          <Square key={i + 6} value={square} onClick={() => onClick(i + 6)} />
        ))}
      </div>
    </div>
  );
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="game">
      <div className="game-board">
        <GameBoard squares={squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Reset Game</button> {/* Reset button */}
      </div>
    </div>
  );
}

// Helper function to calculate the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;
