import React, { useContext } from 'react'
import QuizContext from '../Helpers/Context'

function Result() {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }

  return (
    <>
    <div>Result</div>
    <h1>{score}</h1>
    <button onClick={()=>{restartQuiz()}}>Restart</button>
    </>
  )
}

export default Result