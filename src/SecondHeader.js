import React from "react";
import './SecondHeader.css';
import BedIcon from '@mui/icons-material/Bed';
import CottageIcon from '@mui/icons-material/Cottage';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';

function SecondHeader(){
    return(
       <div className="Second-header">
        <div>
            <button type="button" className="hotels">
             <span className="p">Hotels</span>
                    <BedIcon />
            </button>

                <button type="button" className="holiday-homes">
                    <span className="p">Holiday Homes</span>
                    <CottageIcon />
                </button>

                <button type="button" className="Things-to-Do">
                    <span className="p">Things to Do</span>
                    <ConfirmationNumberIcon />
                </button>


                <button type="button" className="Things-to-Do">
                    <span className="p">Restaurants</span>
                    <RestaurantIcon />
                </button>


                <button type="button" className="Things-to-Do">
                    <span className="p">Golf Course</span>
                    <GolfCourseIcon />
                </button>

        </div>
        
        
        
        </div>
    )
}

export default SecondHeader;