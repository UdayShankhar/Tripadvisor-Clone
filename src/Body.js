import React from "react";
import './Body.css';
import beachedit from './beach.png';


function Body(){
    return(
        <div>
           <div className="beach-image">
                <img src={beachedit} alt="beach"></img>
           </div>
        </div>
    )
}

export default Body;