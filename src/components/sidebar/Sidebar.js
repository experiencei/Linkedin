import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img
                    src=""
                    alt=""
                />
                <Avatar className="sidebar__avatar"/>
                <h2>Experience</h2>
                <h4></h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,689</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,689</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
