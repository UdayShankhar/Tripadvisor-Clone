import React from "react";
import './Body.css';
// import beachedit from './beach.png';
import Travel from './img/travel.png';

function Body(){
    return(
        <div>
           <div className="beach-image">
                <img src={Travel} alt="beach"></img>
           </div>
        </div>
    )
}

export default Body;