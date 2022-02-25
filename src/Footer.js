import React from "react";
import './Footer.css';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
    return (
        <>
        <div className="footer">
            <div className="about"><p className="about-tripadvisor">About Tripadvisor</p>
               <div className="ab">
                <div><p className="about">About Us</p></div>
                <div><p>Press</p></div>
                    <div><p>Resourses & Policies</p></div>
                    <div><p>Careers</p></div>
                        <div><p>Trust & Safety</p></div></div>
            </div>
           
           <div>
                    <div className="about"><p className="about-tripadvisor">Explore</p>
                        <div className="ab">
                            <div><p className="about">Write a review</p></div>
                            <div><p>Add a place</p></div>
                            <div><p>Join</p></div>
                            <div><p>Traveller's Choice</p></div>
                            <div><p>Help Centre</p></div></div>
                    </div>
           </div>
           
                <div>
                    <div className="about"><p className="about-tripadvisor">Do Business With Us</p>
                        <div className="ab">
                            <div><p className="about">Owners & DMO/CVB</p></div>
                            <div><p>Business Advantage</p></div>
                            <div><p>Sponsored Placements</p></div>
                    </div>
                </div></div>
            
                <div>
                    <div className="about"><p className="about-tripadvisor">Get the App</p>
                        <div className="ab">
                            <div><p className="about">iPhone App<span className="apple"><AppleIcon /></span></p></div>
                            <div><p>Android App<span className="android"><AndroidIcon/></span></p>
                            </div>
                        </div>
                    </div></div>
                     
                     <div className="social-icons">
                         <p>Follow us on</p>
                    <a href="https://www.facebook.com/Tripadvisor/" target="_blank"> 
                        <p className="fb"><FacebookIcon /></p>
                    </a>
                    <a href="https://www.instagram.com/tripadvisor/?hl=en" target="_blank">
                        <p className="insta"><InstagramIcon /></p>
                         </a>
                    <a href="https://twitter.com/Tripadvisor?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">
                        <p className="twitter"><TwitterIcon /></p>
                         </a>
                         
                     </div>
                     
                     </div>



        </>
    )
}

export default Footer;