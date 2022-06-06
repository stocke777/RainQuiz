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
        <StyledButton 
        background-color={currentOption===Questions[currentQuestionIndex].a? "pink": undefined} 
        color={currentOption===Questions[currentQuestionIndex].a? "theme": undefined} 
        onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].a)}}>
          {Questions[currentQuestionIndex].a}
        </StyledButton>

        <StyledButton 
        background-color={currentOption===Questions[currentQuestionIndex].b? "pink": undefined} 
        color={currentOption===Questions[currentQuestionIndex].b? "theme": undefined} 
        onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].b)}}>
          {Questions[currentQuestionIndex].b}
        </StyledButton>

        <StyledButton 
        background-color={currentOption===Questions[currentQuestionIndex].c? "pink": undefined} 
        color={currentOption===Questions[currentQuestionIndex].c? "theme": undefined} 
        onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].c)}}>
          {Questions[currentQuestionIndex].c}
        </StyledButton>

        <StyledButton 
        background-color={currentOption===Questions[currentQuestionIndex].d? "pink": undefined} 
        color={currentOption===Questions[currentQuestionIndex].d? "theme": undefined} 
        onClick={()=>{setCurrentOption(Questions[currentQuestionIndex].d)}}>
          {Questions[currentQuestionIndex].d}
        </StyledButton>
        
      </ButtonGroup>
      <div>
        <StyledNextButton  onClick={()=>{result()}}>NEXT QUESTION</StyledNextButton>
      </div>
    </StyledContainer>

    
    </>
  )
}

export default Quiz