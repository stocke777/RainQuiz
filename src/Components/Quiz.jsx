import React, { useContext, useState } from 'react'
import Questions from '../Helpers/QuestionBank'
import QuizContext from '../Helpers/Context'

function Quiz() {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState("")
  

  const result = () => {

    if(currentOption === Questions[currentQuestionIndex].answer){
      setScore(score + 10)
    }

    if(currentQuestionIndex === Questions.length-1){
      setGameState("result")
    }else{
      setCurrentQuestionIndex(currentQuestionIndex+1)
    }
  }

  return (
    <>
    <div>Quiz</div>
    <h1>{Questions[currentQuestionIndex].question}</h1>
    <button onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].a)}}>{Questions[currentQuestionIndex].a}</button>
    <button onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].b)}}>{Questions[currentQuestionIndex].b}</button>
    <button onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].c)}}>{Questions[currentQuestionIndex].c}</button>
    <button onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].d)}}>{Questions[currentQuestionIndex].d}</button>

    <div>
      
      <button onClick={()=>{result()}}>Next Question</button>
    </div>
    </>
  )
}

export default Quiz