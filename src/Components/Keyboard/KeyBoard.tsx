import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decPos, incRow, setBoard } from "../../redux/boardSlice";
import { rootState } from "../interface";
import wordList from "../../words.json";
import Key from "../Key/Key";
import "./keyboard.css";

const KeyBoard: React.FC = () => {
  const position = useSelector((state: rootState) => state.board.pos);
  const board = useSelector((state: rootState) => state.board.board);
  const dispatch = useDispatch();
  const row = useSelector((state: rootState) => state.board.row);
  const toCheckCorrectWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  let allWords: string[] = wordList.words
  let boardWords: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();
  const clickBack = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  };
  const clickEnter = () => {
    console.log(toCheckCorrectWord)
    console.log(boardWords)
    if (allWords.includes(boardWords) === false) {
      alert("Please enter a valid word");
    }
    if(allWords.includes(boardWords)) {
      if (position % 5 === 0 && position !== 0) {
       dispatch(incRow());
    }
  }
    if(position === 30 && allWords.includes(boardWords)) {
      alert("The word is: " + toCheckCorrectWord);
    }
    if(boardWords.toUpperCase() === toCheckCorrectWord){
      alert("You Win!");
    }
  };
  return (
    <div className="keyboard-container">
      {rows.map((row, i) => {
        return (
          <div className="row" key={i}>
            {i === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, i) => {
              return (
                <div className="letter-row" key={i}>
                  <Key letter={letter.toUpperCase()} data-testid={`letter-${letter}`}/>
                  {letter === "m" && <span onClick={clickBack}> Back </span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
