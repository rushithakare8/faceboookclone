import React from 'react';
import './Feed.css';
import Storyreel from './Storyreel';
import MessgeSender from './MessgeSender';
import Post from "./Post"
function Feed() {
    return (
        <div className="feed">
        <Storyreel />
        <MessgeSender />
        <Post 
            profilePic="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg"
            message="this is AMazing 🚀"
            timestamp="This is mY Timesttamp"
            username='Rushi Thakare'
            image="https://images.unsplash.com/photo-1575881875475-31023242e3f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"

        
        />
           <Post 
            profilePic="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"
            message="this is AMazing 🚀"
            timestamp="This is mY Timesttamp"
            username='Rushi Thakare'
            image="https://i.ytimg.com/vi/p7TDpx0hsn4/maxresdefault.jpg"

        
        />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
    )
}

export default Feed
