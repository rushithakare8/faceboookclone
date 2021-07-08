import React from 'react';
import './Storyreel.css';
import Story from "./Story";


function Storyreel() {
    return (
        <div className="storyreel">
            <Story 
            image="/image/1.jpg" 
            profileSrc="/image/aa.png" 
            title="This is me" />

            <Story 
            image="/image/2.jpg" 
            profileSrc="/image/aa.png" 
            title="This is me" />

            <Story 
            image="/image/3.jpg" 
            profileSrc="/image/aa.png" 
            title="This is me" />

            <Story 
            image="/image/4.jpg" 
            profileSrc="/image/aa.png" 
            title="This is me" />
            <Story 
            image="/image/5.jpg" 
            profileSrc="/image/aa.png" 
            title="This is me" />


        </div>
    )
}

export default Storyreel
