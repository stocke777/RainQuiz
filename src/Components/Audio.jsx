import React, { useContext, useState } from "react";
import { Howl } from "howler";
import rain1 from "./../Audio/1.mp3";
import rain2 from "./../Audio/2.mp3";
import rain3 from "./../Audio/3.mp3";
import rain4 from "./../Audio/4.mp3";
import rain5 from "./../Audio/5.mp3";
import { RainSoundContext } from "../Helpers/Context";

const RainButton = () => {
    const rainSounds = [rain1, rain2, rain3, rain4, rain5]
    const {audio, setAudio} = useContext(RainSoundContext)

    const sound = new Howl({
        src: rainSounds[audio-1],
        html5: true
    })
    return (
        <>
            < button onClick={() => { sound.play() }}> Play </button >
            < button onClick={() => { sound.pause() }}> Pause </button >
        </>
    )
}

export default RainButton