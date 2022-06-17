
import './App.css';
import { React, useState } from "react";
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import QuizContext from "./Helpers/Context";
import { RainSoundContext } from './Helpers/Context';
import Dropdown from './Components/RainDropdown';
import RainSound from "./Components/RainSound"
import { Howl } from "howler";
import rain1 from "./Audio/1.mp3";
import rain2 from "./Audio/2.mp3";
import rain3 from "./Audio/3.mp3";
import rain4 from "./Audio/4.mp3";
import rain5 from "./Audio/5.mp3";



const rainSounds = [rain1, rain2, rain3, rain4, rain5]


function App() {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)
  const [audio, setAudio] = useState(1)
  const [play, setPlay] = useState(true)
  const obj = new Howl({
    src: rainSounds[audio - 1],
    html5: true,
    loop: true
  })
  const [sound, setSound] = useState(obj)

  return (
    <div className="App">

      <RainSoundContext.Provider value={{ audio, setAudio, play, setPlay, sound, setSound }}>
        <RainSound></RainSound>
        <Dropdown></Dropdown>
      </RainSoundContext.Provider>

      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "result" && <Result />}
      </QuizContext.Provider>

    </div>
  );
}

export default App;
