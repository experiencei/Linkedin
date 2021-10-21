import React from 'react'
import "./HeaderOption.css";


function HeaderOption({ Icon , title}) {

    return (
        <div className="headerOption">
            {Icon && <Icon name="headerOption__icon" />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
