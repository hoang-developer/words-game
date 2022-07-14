import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Board from './Components/Board/Board';
import Heading from './Components/Heading/Heading';
import { rootState } from './Components/interface';

function App() {
  const board = useSelector((state: rootState) => state.board.board)
  return (
    <div className="App">
      <Heading type="h1" text="Words Game"/>
      <Heading type="subtitle" text="Hello Hà My"/>
      <div className="board-container">
        <Board board={board} />
      </div>
    </div>
  );
}

export default App;
