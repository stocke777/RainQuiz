import React, { useState, useContext } from "react";
import { RainSoundContext } from "../Helpers/Context";

import { Howl } from "howler";
import rain1 from "./../Audio/1.mp3";
import rain2 from "./../Audio/2.mp3";
import rain3 from "./../Audio/3.mp3";
import rain4 from "./../Audio/4.mp3";
import rain5 from "./../Audio/5.mp3";



const rainSounds = [rain1, rain2, rain3, rain4, rain5]

function Dropdown() {

    const items = ["Window", "Thunder", "Splashing", "Bird", "Urban"]
    const [active, setActive] = useState(false)
    const { audio, setAudio, sound, setSound } = useContext(RainSoundContext)


    const handleDropdown = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    const changeAudio = (index) => {
        setAudio(index + 1, ()=>{})
        console.log("inside dropdown", audio, sound)
        setSound(new Howl({
            src: rainSounds[audio - 1],
            html5: true,
            loop: true
          }))
        console.log(sound)
    }

    return (
        <div className="dropdown">
            <div className="bn632-hover bn20" onClick={() => { handleDropdown() }}>Rain Types</div>
            {active && (
                <div className="dropdown-content">
                    {items.map((item, index) => {
                        return (
                            <div className="dropdown-item" style={audio === index + 1 ? { "background-color": "lightblue", "border-radius": "20px" } : undefined} key={item} onClick={() => {
                                changeAudio(index)
                            }}>
                                {item}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Dropdown