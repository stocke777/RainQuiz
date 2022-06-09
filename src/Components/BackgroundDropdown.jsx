import React, { useState, useContext } from "react";
import { RainSoundContext } from "../Helpers/Context";

function Dropdown() {

    const items = ["Window", "Thunder", "Splashing", "Bird", "Urban"]
    const [active, setActive] = useState(false)
    const {audio, setAudio} = useContext(RainSoundContext)


    const handleDropdown = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => { handleDropdown() }}>Rain Types</div>
            {active && (
                <div className="dropdown-content">
                    {items.map((item, index) => {
                        return (
                            <div className="dropdown-item" style={audio===index+1?{"background-color": "lightblue", "border-radius":"20px"}:undefined} key={item} onClick={()=>{
                                setAudio(index+1)
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