import React from 'react';
import './Sidebarrow.css';
import { Avatar } from '@material-ui/core';
function Sidebarrow({src, Icon, title}) {
    return (
        <div className="sidebarrow">
            {src && <Avatar src={src}/>}

            {Icon && <Icon/>}
            
            <h4>{title}</h4>

        </div>
    )
}

export default Sidebarrow
