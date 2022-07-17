import React, { Fragment } from 'react'
import KeyBoard from '../Keyboard/KeyBoard'
import Square from '../Square/Square'
import "./board.css"

interface IProps {
    board: string[]
}
const Board: React.FC<IProps> = (props) => {
    const {board} = props
  return (
    <>
    <div className="board">
        {board.map((square, i) =>{
            return (
                <Fragment key={i}>
                <Square val={square} squareIdx={i}/>
                </Fragment>
            )
        })}
    </div>

    <div className="keyboard">
        <KeyBoard />
    </div>
    </>
  )
}

export default Board