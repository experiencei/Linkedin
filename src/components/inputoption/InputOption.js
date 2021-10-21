import React from 'react'
import "./InputOption.css";

function InputOption({ Icon , title }) {
    return (
        <div className="inputOption">
            <Icon style={styles.icon} />
        </div>
    )
}

export default InputOption
