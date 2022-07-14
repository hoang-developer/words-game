import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incPos, setBoard } from '../../redux/boardSlice'
import { rootState } from '../interface'
import "./key.css"

interface IProps {
    letter: string
}
const Key: React.FC<IProps> = (props) => {
    const { letter } = props
    const board = useSelector((state: rootState)=> state.board.board)
    const positon = useSelector((state: rootState)=> state.board.pos)
    const dispatch = useDispatch()
    const chooseLetter = () => {
        if (positon >= 30) return;
        const newBoard = [...board]
        newBoard[positon] = letter
        dispatch(setBoard(newBoard))
        dispatch(incPos())
    }
  return (
    <div className="letter" onClick={chooseLetter}>{letter}</div>
  )
}

export default Key