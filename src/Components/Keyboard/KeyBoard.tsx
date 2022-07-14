import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decPos, setBoard } from "../../redux/boardSlice";
import { rootState } from "../interface";
import Key from "../Key/Key";
import "./keyboard.css";

const KeyBoard: React.FC = () => {
    const positon = useSelector((state: rootState)=> state.board.pos);
    const board = useSelector((state: rootState)=> state.board.board);
    const dispatch = useDispatch()
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  const clickBack = () => {
    if(positon <= 0) return;
    const newBoard = [...board];
    newBoard[positon-1] = "";
    dispatch(decPos());
    dispatch(setBoard(newBoard));
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, i) => {
        return (
          <div className="row">
            {i === 2 && <span className="letter-row">Enter</span>}
            {row.split(" ").map((letter, i) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} />
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
