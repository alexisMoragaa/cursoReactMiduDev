
import { useState } from 'react'
import './App.css'
import { TURNS, WINNER_COMBOS } from './constants'
import {Square} from './components/Square'
import {WinnerModal} from './components/WinnerModal'
import confetti from 'canvas-confetti'

export default function App() {
  
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ? JSON.parse(savedTurn) : TURNS.X
  })
  
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    
    if(board[index] || winner){
      return
    }


    const newBoard = [...board]
    newBoard[index] = turn 
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
      confetti()
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }


  //revisa de entre todas las opciones ganadoras cuando coincide el mismo valor en las tres posiciones
  const checkWinner = (boardToCheck) => {
    for(const combo of WINNER_COMBOS){
      const [a,b,c] = combo
      if(
        boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((cell) => cell != null)
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='board'>

      <h1>Tic Tac Toe</h1>
      
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square 
                key={index} 
                index={index}
                updateBoard={updateBoard}
              > 
              {board[index]}
              </Square> 
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}> {TURNS.X} </Square>
        <Square isSelected={turn === TURNS.O}> {TURNS.O} </Square>  
      </section>

      <WinnerModal winner={winner} restartGame={restartGame} />

    </main>    
  )
}


