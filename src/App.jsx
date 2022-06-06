
import './App.css';
import {React, useState, useEffect} from "react";
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import QuizContext from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)

  return (
    <div className="App">
        <h1>QUIZ</h1>

        
        <QuizContext.Provider value = {{gameState, setGameState, score, setScore}}>
          {gameState === "menu" && <Menu/>}
          {gameState === "quiz" && <Quiz/>}
          {gameState === "result" && <Result/>}
        </QuizContext.Provider>

    </div>
  );
}

export default App;
