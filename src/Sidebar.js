import { ExpandMoreOutlined } from '@material-ui/icons';
/*import userEvent from '@testing-library/user-event';*/
import React from 'react';
import './Sidebar.css';
import Sidebarrow from './Sidebarrow';
import LocalHospitalIcon  from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon  from '@material-ui/icons/People';
import ChatIcon  from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

function Sidebar() {
    return (
        <div className="sidebar">
            <Sidebarrow src="/image/aa.png" title=" Rushi Thakare" />

            <Sidebarrow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>

            <Sidebarrow Icon={EmojiFlagsIcon} title="Pages" />
            <Sidebarrow Icon={PeopleIcon} title="Friends" />

            <Sidebarrow Icon={ChatIcon} title="Messanger" />
            <Sidebarrow Icon={StoreFrontIcon} title="Marketplace" />
            <Sidebarrow Icon={VideoLibraryIcon} title="Videos" />
            <Sidebarrow Icon={ExpandMoreOutlined} />
   
        </div>
    )
}

export default Sidebar
