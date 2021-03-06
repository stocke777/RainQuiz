import React, {useContext} from 'react'
import QuizContext from "./../Helpers/Context"
import {StartButton} from "./Styles"


function Menu() {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div>
        <h1>RAIN QUIZ</h1>
        <StartButton onClick={()=>{setGameState("quiz")}}>Start Quiz</StartButton>
    </div>
  )
}

export default Menu