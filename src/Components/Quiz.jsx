import React, { useContext, useState } from 'react'
import Questions from '../Helpers/QuestionBank'
import QuizContext from '../Helpers/Context'

function Quiz() {
  const {gameState, setGameState} = useContext(QuizContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState("")
  const [score, setScore] = useState(0)

  const result = () => {
    if(currentQuestionIndex === Questions.length-1){
      setGameState("result")
    }else{
      setScore(score + 10)
      setCurrentQuestionIndex(currentQuestionIndex+1)
    }
  }

  return (
    <>
    <div>Quiz</div>
    <h1>{Questions[currentQuestionIndex].question}</h1>
    <button onClick={()=>{setCurrentOption("a")}}>{Questions[currentQuestionIndex].a}</button>
    <button onClick={()=>{setCurrentOption("b")}}>{Questions[currentQuestionIndex].b}</button>
    <button onClick={()=>{setCurrentOption("c")}}>{Questions[currentQuestionIndex].c}</button>
    <button onClick={()=>{setCurrentOption("d")}}>{Questions[currentQuestionIndex].d}</button>

    <div>
      
      <button onClick={()=>{result()}}>Next Question</button>
    </div>
    </>
  )
}

export default Quiz