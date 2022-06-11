import React, { useContext, useState } from "react";
import { Howl } from "howler";
import rain1 from "./../Audio/1.mp3";
import rain2 from "./../Audio/2.mp3";
import rain3 from "./../Audio/3.mp3";
import rain4 from "./../Audio/4.mp3";
import rain5 from "./../Audio/5.mp3";
import { RainSoundContext } from "../Helpers/Context";
import { ButtonGroup, StyledButton, PlayButton } from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons' 

const RainButton = () => {
    const rainSounds = [rain1, rain2, rain3, rain4, rain5]
    const { audio, setAudio } = useContext(RainSoundContext)

    const sound = new Howl({
        src: rainSounds[audio - 1],
        html5: true
    })
    return (
        <>
            <ButtonGroup style={{"margin": "0px"}}>
                <div style={{"display": "flex", "justify-content": "center"}}>
                < PlayButton onClick={() => { sound.play() }}><FontAwesomeIcon icon={faPlay} /></PlayButton >
                < PlayButton onClick={() => { sound.pause() }}><FontAwesomeIcon icon={faPause} /></PlayButton >
                </div>
            </ButtonGroup>
        </>
    )
}

export default RainButton