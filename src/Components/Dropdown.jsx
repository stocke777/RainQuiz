import React, { useState } from "react";

function Dropdown() {

    const items = ["Item1", "Item2", "Item3", "Item4"]
    const [active, setActive] = useState(false)


    const handleDropdown = () => {
        if (active) {
            setActive(false)
        } else {
            setActive(true)
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => { handleDropdown() }}>Choose</div>
            {active && (
                <div className="dropdown-content">
                    {items.map((item, index) => {
                        return (
                            <div className="dropdown-item">
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