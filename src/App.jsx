import React from 'react';
import Game from './Game.jsx'; // Import the Game component
import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* You can add more content here if you like */}
        <h1>Tic Tac Toe Game</h1>
      </header>
      <Game /> {/* Include the Game component */}
    </div>
  );
}

export default App;
