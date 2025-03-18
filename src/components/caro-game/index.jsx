import React, { useEffect, useState } from 'react'
import './styles.css'
import Square from './square'
import { GiHeartWings } from 'react-icons/gi'

const CheckerBoard = ({ numberOfSquare = 3 }) => {
    const [isXTurn, setIsXTurn] = useState(true)
    const [squares, setSquares] = useState(Array(9).fill(''))
    const [status, setStatus] = useState('')

    const handleOnClick = (getCurrentIndex) => {
        console.log(getCurrentIndex)
        const cpySquares = [...squares]
        if (checkWinCondition(cpySquares) || cpySquares[getCurrentIndex]) return;

        cpySquares[getCurrentIndex] = isXTurn ? 'X' : 'O'
        setSquares(cpySquares)
        setIsXTurn(!isXTurn)
    }

    const checkWinCondition = (checkSquares) => {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]

            if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
                return squares[x]
            }
        }

        return null
    }

    const handleRestart = () => {
        setSquares(Array(9).fill(''))
        setIsXTurn(true)
    }

    useEffect(() => {
        if (!checkWinCondition(squares) && squares.every(item => item !== '')) {
            setSquares('This is a draw! Please restart the game')
        } else if (checkWinCondition(squares)) {
            setStatus(`Winner is ${checkWinCondition(squares)}`)
        } else {
            setStatus(`Next player is ${isXTurn ? 'X' : 'O'}`)
        }
    }, [squares, isXTurn])

    return (
        <div className='caro-container'>
            <div className="chessboard-layout">
                <div className="row">
                    <Square checkItem={() => handleOnClick(0)} value={squares[0]} />
                    <Square checkItem={() => handleOnClick(1)} value={squares[1]} />
                    <Square checkItem={() => handleOnClick(2)} value={squares[2]} />
                </div>
                <div className="row">

                    <Square checkItem={() => handleOnClick(3)} value={squares[3]} />
                    <Square checkItem={() => handleOnClick(4)} value={squares[4]} />
                    <Square checkItem={() => handleOnClick(5)} value={squares[5]} />
                </div>
                <div className="row">
                    <Square checkItem={() => handleOnClick(6)} value={squares[6]} />
                    <Square checkItem={() => handleOnClick(7)} value={squares[7]} />
                    <Square checkItem={() => handleOnClick(8)} value={squares[8]} />
                </div>
            </div>

            <div className="title">
                <h1>{status}</h1>
            </div>

            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default CheckerBoard
