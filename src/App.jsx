
import './App.css';
import {React, useState, useEffect} from "react";
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import QuizContext from "./Helpers/Context";
import { RainSoundContext } from './Helpers/Context';
import RainButton from "./Components/RainButton";
import Dropdown from './Components/RainDropdown';

function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [audio, setAudio] = useState(1)

  return (
    <div className="App">
        <h1>RAIN QUIZ</h1>

        <RainSoundContext.Provider value = {{audio, setAudio}}>
          <RainButton></RainButton>
          <Dropdown></Dropdown>
        </RainSoundContext.Provider>

        <QuizContext.Provider value = {{gameState, setGameState, score, setScore}}>
          {gameState === "menu" && <Menu/>}
          {gameState === "quiz" && <Quiz/>}
          {gameState === "result" && <Result/>}
        </QuizContext.Provider>

    </div>
  );
}

export default App;
