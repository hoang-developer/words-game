import React from 'react'

interface IProps {
    board: string[]
}
const Board: React.FC<IProps> = (props) => {
    const {board} = props
  return (
    <>
    <div className="board">
        
    </div>
    </>
  )
}

export default Board