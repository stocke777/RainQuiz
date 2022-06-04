import React, {useContext} from 'react'
import QuizContext from "./../Helpers/Context"


function Menu() {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div>
        <div>Menu</div>
        <button onClick={()=>{setGameState("quiz")}}>Click ME</button>
    </div>
  )
}

export default Menu