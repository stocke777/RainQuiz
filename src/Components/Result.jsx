import React, { useState, useContext } from 'react'
import QuizContext from '../Helpers/Context'
import { StyledNextButton } from "../Components/Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faRefresh } from '@fortawesome/free-solid-svg-icons'
import Message from './Message';

function Result() {
  const { gameState, setGameState, score, setScore } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState("menu")
  }

  const [alert, setAlert] = useState(false);
  const handleShare = () => {
    navigator.clipboard.writeText("https://62ac54ba13ddcc00073be17b--stunning-druid-280762.netlify.app/")
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  return (
    <>
      <div className="share">
        {alert && <Message></Message>}
        <button className='share-button' onClick={() => { handleShare() }}>Share</button>
      </div>
      <h1 style={{ "font-size": "50px" }}>SCORE: {score}</h1>
      <h1>Take Quiz Again?</h1>
      <StyledNextButton onClick={() => { restartQuiz() }}><FontAwesomeIcon icon={faRefresh} /></StyledNextButton>
    </>
  )
}

export default Result