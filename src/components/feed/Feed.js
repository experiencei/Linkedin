import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useState} from 'react'
import InputOption from '../inputoption/InputOption';
import Post from '../post/Post';
import "./Feed.css";


function Feed() {
    const [posts , setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();
        
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <Create/>
                    <form>
                        <input type="text" className="" />
                        <button type="submit" className=" " onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E"/>
                </div>
            </div>
         {
             posts.map((post) =>
             <Post/> )
         }
            <Post name="experience" description="heelok"
            message="wow it works" />
        </div>
    )
}

export default Feed
