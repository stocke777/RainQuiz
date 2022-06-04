import React, { useContext, useState } from 'react'
import Questions from '../Helpers/QuestionBank'
import QuizContext from '../Helpers/Context'
import { StyledContainer, StyledButton, ButtonGroup, StyledTitle, StyledNextButton } from './Styles'

function Quiz() {
  const {gameState, setGameState, score, setScore} = useContext(QuizContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState("")
  

  const result = () => {
    // if answer correct, increase score
    if(currentOption === Questions[currentQuestionIndex].answer){
      setScore(score + 10)
    }
    // if on last question, go to results else go to next question
    if(currentQuestionIndex === Questions.length-1){
      setGameState("result")
    }else{
      setCurrentQuestionIndex(currentQuestionIndex+1)
    }
  }

  return (
    <>
    <div>Quiz</div>

    <StyledContainer>

      <StyledTitle>{Questions[currentQuestionIndex].question}</StyledTitle>
      <ButtonGroup>
        <StyledButton onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].a)}}>{Questions[currentQuestionIndex].a}</StyledButton>
        <StyledButton onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].b)}}>{Questions[currentQuestionIndex].b}</StyledButton>
        <StyledButton onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].c)}}>{Questions[currentQuestionIndex].c}</StyledButton>
        <StyledButton onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].d)}}>{Questions[currentQuestionIndex].d}</StyledButton>
      </ButtonGroup>
      <div>
        <StyledNextButton  onClick={()=>{result()}}>NEXT QUESTION</StyledNextButton>
      </div>
    </StyledContainer>

    
    </>
  )
}

export default Quiz