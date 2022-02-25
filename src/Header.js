import React from "react";
import './Header.css';
import CreateIcon from '@mui/icons-material/Create';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(){
    return(
        <div className="head">
         <div className="header">
                <img src="https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo-2020-present.jpg" alt="logo"></img>
        
         
         
         <div className="props">
            <button type="button" className="button1">
            <CreateIcon/>
                        <span className="icon-name">Review</span> </button>
         </div>
           
           
            <div>
                    <button type="button" className="button2">
                        <FavoriteIcon />
                        <span className="icon-name">Trips</span> </button>
            </div>
            
            
            <div>
                    <button type="button" className="button3">
                        <NotificationsIcon />
                        <span className="icon-name">Alerts</span> </button>

            </div>

            <div>
                    <button type="button" className="button4">
                        
                        <span className="icon-name">Sign-in</span> </button>

            </div>
            
            </div>
        
        
        
        </div>
    )
}

export default Header;