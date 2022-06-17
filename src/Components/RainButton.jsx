import React, { useContext, useState, useEffect } from "react";
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

const rainSounds = [rain1, rain2, rain3, rain4, rain5]

const RainButton = () => {

    const { audio, setAudio, play, setPlay, sound, setSound } = useContext(RainSoundContext)

    useEffect(() => {
        console.log("play button rendered")
        setSound(new Howl({
            src: rainSounds[audio - 1],
            html5: true,
            loop: true
        }));
    }, []);

    console.log(sound)
    const handleclick = () => {
        if (play) {
            setPlay(false)
            sound.play()
        } else {
            setPlay(true)
            sound.pause()
        }
    }

    return (
        <>
            <ButtonGroup style={{ "margin": "0px" }}>
                <div style={{ "display": "flex", "justify-content": "center" }}>
                    {play && < PlayButton onClick={() => { handleclick() }}><FontAwesomeIcon icon={faPlay} /></PlayButton >}
                    {!play && < PlayButton onClick={() => { handleclick() }}><FontAwesomeIcon icon={faPause} /></PlayButton >}
                </div>
            </ButtonGroup>
        </>
    )
}

export default RainButton