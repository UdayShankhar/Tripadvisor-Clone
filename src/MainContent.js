import React from "react";
import './MainContent.css';
import trip from './trip.png'

function MainContent(){
    return(
        <>
            <div className="cards">
                <h4>Top destinations for beach lovers</h4>
                <h5>Recommended based on your activity</h5></div>

            <div className="sam">
                <div className="card1">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/66/68/f6/caption.jpg?w=300&h=300&s=1&cx=988&cy=664&chk=v1_d1b5b3f4c384c764b7e1" alt="mahabalipuram"></img>
                    <h5 className="desc">Tulum,Mexico</h5>
            
                </div>
                <div className="card2">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/60/b0/bd/bora-bora.jpg?w=300&h=300&s=1" alt="mahabalipuram"></img>
                    <h5 className="desc">Bora Bora,French</h5><br></br>
                </div>

                <div className="card3">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f4/70/caption.jpg?w=300&h=300&s=1" alt="mahabalipuram"></img>
                    <h5 className="desc">Hawaii</h5>
                </div>

                <div className="card4">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5e/c2/caption.jpg?w=300&h=300&s=1" alt=""></img>
                    <h5 className="desc">Bali,Indonesia</h5>
                </div>

            </div>

            <div className="sam-two">
                <div className="card5">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cd/04/e4/caption.jpg?w=300&h=300&s=1" alt="mahabalipuram"></img>
                    <h5 className="desc">Miami,FL</h5>

                </div>
                <div className="card6">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/69/b0/caption.jpg?w=300&h=300&s=1" alt="mahabalipuram"></img>
                    <h5 className="desc">Myrtle Beach,FC</h5><br></br>
                </div>

                <div className="card7">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/bf/72/8e/caption.jpg?w=300&h=300&s=1" alt="mahabalipuram"></img>
                    <h5 className="desc">Cabo San Lucas,Mexico</h5>
                </div>

                <div className="card8">
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/ee/14/caption.jpg?w=300&h=300&s=1" alt=""></img>
                    <h5 className="desc">Aruba</h5>
                </div>
            </div>

            <div className="best-of-best">
                <img src={trip} width={1400} className="im" alt="tripad"></img>
            </div>


        </>
    )
}

export default MainContent;