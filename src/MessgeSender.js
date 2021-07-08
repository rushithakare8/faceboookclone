import React from 'react';
import './MessgeSender.css';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useState } from "react";

function MessgeSender() {
    const [input,setInput] = useState("");
    const [imageUrl, setImageUrl] =useState("");
    const handleSubmit = (e)=>{
       e.preventDefault();

       setInput("");
       setImageUrl("");
    };
    return (
        <div className="messagesender">
            <div className="messagesender_top">
                <Avatar />
                <form>

                    <input
                    value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    className="messagesender_input" placeholder={`what is on your mind`}/>
                    <input 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value)}
                    
                    placeholder="Image Url (optional)" />
                    <button onClick={handleSubmit} type ="submit">
                       Hidden submit 
                     </button>
                </form>
            </div>


            <div className="messagesender_bottom">

                <div className="messagesender_option">
                    <VideocamIcon style ={{color:"red"}}/>
                    <h3>Live Video</h3>
                <div className="messagesender_option">
                    <PhotoLibraryIcon style ={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messagesender_option">
                    <InsertEmoticonIcon style ={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default MessgeSender
