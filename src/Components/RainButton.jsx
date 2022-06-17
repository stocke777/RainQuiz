import React, { useContext } from "react";
import { RainSoundContext } from "../Helpers/Context";
import { ButtonGroup, PlayButton } from "./Styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


const RainButton = () => {

    const { play, setPlay, sound } = useContext(RainSoundContext)

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