import React, { useState } from "react";
import { Howl } from "howler";
import rain1 from "./../Audio/rain1.mp3";

const RainButton = () => {
    const sound = new Howl({
        src: rain1,
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