import React, { useContext } from 'react'
import QuizContext from '../Helpers/Context'
function Result() {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)
  return (
    <>
    <div>Result</div>
    <h1>{score}</h1>
    </>
  )
}

export default Result