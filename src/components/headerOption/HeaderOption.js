import React from 'react'
import "./HeaderOption.css";


function HeaderOption({ Icon , title}) {

    return (
        <div className="HeaderOption">
            {Icon && <Icon name="HeaderOption__icon" />}
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
