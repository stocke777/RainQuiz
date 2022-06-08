import React, { useState } from "react";

function Dropdown() {
    const [active, setActive] = useState(false)

    const handleDropdown = () => {
        if(active){
            setActive(false)
        }else{
            setActive(true)
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={()=>{handleDropdown()}}>Choose</div>
            {active && (
                <div className="dropdown-content">
                    <div className="dropdown-item">
                        Item 1
                    </div>
                    <div className="dropdown-item">
                        Item 2
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dropdown