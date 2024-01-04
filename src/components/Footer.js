import React from 'react'
import '../style/Footer.css'
import PlaceIcon from '@mui/icons-material/Place';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div>
            <footer>
                <div class="row primary">
                    <div class="column about">
                        <h3>Connect</h3>
                        <p>
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <PlaceIcon/>
                            Kovaipudhur, Coimbatore, TamilNadu.
                        </p>
                        <div class="social" style={{width:"60%"}}>
                            <FacebookRoundedIcon fontSize='large'/>
                            <TwitterIcon fontSize='large'/>
                            <YouTubeIcon fontSize='large'/>
                            <InstagramIcon fontSize='large'/>
                            <LinkedInIcon fontSize='large'/>
                        </div>
                    </div>

                    <div class="column link">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#blogs">Blogs</a></li>
                            <li><a href="#support">Support</a></li>
                        </ul>
                    </div>

                    <div class="column subscribe">
                        <h3>Newsletter</h3>
                        <div>
                            <input type="email" placeholder="Your email id here" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}