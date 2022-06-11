import React, { useContext, useState } from 'react'
import Questions from '../Helpers/QuestionBank'
import QuizContext from '../Helpers/Context'
import { StyledContainer, StyledButton, ButtonGroup, StyledTitle, StyledNextButton } from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons' 

function Quiz() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOption, setCurrentOption] = useState("")


  const result = () => {
    // if answer correct, increase score
    if (currentOption === Questions[currentQuestionIndex].answer) {
      setScore(score + 10)
    }
    // if on last question, go to results else go to next question
    if (currentQuestionIndex === Questions.length - 1) {
      setGameState("result")
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return (
    <>
      <StyledContainer>

        <StyledTitle>{Questions[currentQuestionIndex].question}</StyledTitle>
        <div className="selection" style={{"display": "flex"}}>
          <div className="options" style={{"display":"flex", "flex-direction": "column"}}>
            <ButtonGroup>
              <StyledButton
                background-color={currentOption === Questions[currentQuestionIndex].a ? "pink" : undefined}
                color={currentOption === Questions[currentQuestionIndex].a ? "theme" : undefined}
                onClick={() => { setCurrentOption(Questions[currentQuestionIndex].a) }}>
                {Questions[currentQuestionIndex].a}
              </StyledButton>

              <StyledButton
                background-color={currentOption === Questions[currentQuestionIndex].b ? "pink" : undefined}
                color={currentOption === Questions[currentQuestionIndex].b ? "theme" : undefined}
                onClick={() => { setCurrentOption(Questions[currentQuestionIndex].b) }}>
                {Questions[currentQuestionIndex].b}
              </StyledButton>
            </ButtonGroup>


            <ButtonGroup>
              <StyledButton
                background-color={currentOption === Questions[currentQuestionIndex].c ? "pink" : undefined}
                color={currentOption === Questions[currentQuestionIndex].c ? "theme" : undefined}
                onClick={() => { setCurrentOption(Questions[currentQuestionIndex].c) }}>
                {Questions[currentQuestionIndex].c}
              </StyledButton>

              <StyledButton
                background-color={currentOption === Questions[currentQuestionIndex].d ? "pink" : undefined}
                color={currentOption === Questions[currentQuestionIndex].d ? "theme" : undefined}
                onClick={() => { setCurrentOption(Questions[currentQuestionIndex].d) }}>
                {Questions[currentQuestionIndex].d}
              </StyledButton>
            </ButtonGroup>
          </div>

          <div style={{"display": "flex", "alignItems":"center", "padding": "0 15px"}}>
            <StyledNextButton onClick={() => { result() }}><FontAwesomeIcon icon={faAngleRight} /></StyledNextButton>
          </div>
          
        </div>
      </StyledContainer>
    </>
  )
}

export default Quiz