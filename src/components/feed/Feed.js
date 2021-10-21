import { Create } from '@material-ui/icons';
import React from 'react'
import "./Feed.css";


function Feed() {
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create/>
                    <form>
                        <input type="text" className="" />
                        <button type="submit" className=" ">Send</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Feed
