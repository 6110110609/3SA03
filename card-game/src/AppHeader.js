import React from 'react';

import './AppHeader.css';
import logo from './hangman1.png';

export default function AppHeader() {
  return (
    <div className="App-header">
      <h1>Word Card Game</h1>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );

}
