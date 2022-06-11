import React, { useContext } from 'react'
import QuizContext from '../Helpers/Context'
import {StyledNextButton} from "../Components/Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRefresh } from '@fortawesome/free-solid-svg-icons' 

function Result() {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }

  return (
    <>

    <h1 style={{"font-size":"50px"}}>SCORE: {score}</h1>
    <h1>Take Quiz Again?</h1>
    <StyledNextButton onClick={()=>{restartQuiz()}}><FontAwesomeIcon icon={faRefresh} /></StyledNextButton>
    </>
  )
}

export default Result