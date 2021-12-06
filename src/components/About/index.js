import React from 'react'
import Navbar from '../Navbar'
import '../About/index.css'
import Tomo from '../../assets/Tomo.jpeg'
import Tomo2 from '../../assets/Tomo-2.jpeg'
import Nate from '../../assets/Nate.jpeg'
import Nate2 from '../../assets/Nate-2.jpeg';
import Rob from '../../assets/Rob.jpeg'
import Rob2 from '../../assets/Rob-2.jpeg'
import {Link} from 'react-router-dom'
import Yves from '../../assets/Yves.jpeg'
import Yves2 from '../../assets/Yves-2.jpeg'
import Footer from '../Footer'
import { Container, Row, Col } from 'bootstrap-4-react';


const About = () => {
    return (
        <div>
            <Navbar />
        <div className="section-2-about">

            <div class="container">

                <div class="row">

                    <div class="col-6">

                        <div class="text-left">
                            <h2 className="pod-squad">Meet the <p style={{color: 'red'}}>Team</p></h2>
                            <p className="about-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>
                        </div>

                        <div className="youtube-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://www.youtube.com/c/BadForTheCommunity"> <span> Watch on Youtube </span> </a>
						</div>
                    </div>

                    <div class="col-6">

                        <div className="social-right">
                             <p>Listen on - </p>

                             <ul style={{listStyle: 'none', textDecoration: 'underline', cursor: 'pointer', color: 'red'}}>
                                 <a href="https://open.spotify.com/show/1evrNWwBQsLVUZX0MiHZjZ" target="_blank">
                                      <li>Spotify</li>
                                 </a>  
                                 <a href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413" target="_blank">
                                    <li>Apple Podcasts </li>
                                 </a>
                                 <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNzc4MjgwLnJzcw==" target="_blank">
                                      <li>Google Podcasts </li>
                                 </a>
                                 <a href="https://music.amazon.com/podcasts/1e73552a-0a77-4a01-9dce-83ae5f179b60" target="_blank"> 
                                     <li>Amazon Podcasts</li>
                                 </a>
                             </ul>
                        </div>

                    </div>

                </div>


            </div>

            
        </div>


        <div id="spacing" id="podder-container" class="container">

            <div class="row">

                <div class="col-md-6 col-xs-12">

                    <img src={Rob2} class="img-fluid"  />

                </div>

                <div class="col-md-6 col-xs-12">

                    <h1 className="podder">Young Rob</h1>

                    <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                    <h3>Follow Me</h3>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '30%', textDecoration: 'underline', cursor: 'pointer'}}>
                            <p>Instagram</p>
                            <p>Twitter</p>
                    </div>

                </div>

            </div>


        <div id="spacing" class="row">

            <div class="col-md-6 col-xs-12">

                <img src={Yves2} class="img-fluid" />

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Saint Yves</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '30%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Twitter</p>

                </div>

            </div>

        </div>


        <div id="spacing" class="row">

            <div class="col-md-6 col-xs-12">
                <div>
                <img src={Tomo2} class="img-fluid" />
                </div>

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Tomo</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '30%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Twitter</p>

                </div>

            </div>

        </div>




        <div  id="spacing" class="row" style={{marginBottom: 200}}>

            <div class="col-md-6 col-xs-12">

                <img src={Nate2} class="img-fluid" />

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Nate Nics</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '30%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Twitter</p>

                </div>

            </div>

        </div>



        </div>


<Footer />
            {/* <footer>
                <div id="footer-container" class="container">

                    <div class="row">

                        <div  class="col-md-4 col-xs-12 left-footer">
                            <p>Follow Us</p>
                            <p className="footer-links">Instagram</p>
                            <p className="footer-links">Twitter</p>
                            <p className="footer-links">Tiktok</p>
                        </div>


                        <div class="col-md-4 col-xs-12 middle-footer">
                            <p >Where to Listen</p>
                            <p className="footer-links">Apple</p>
                            <p className="footer-links">Spotify</p>
                            <p className="footer-links">Tidal</p>
                        </div>

                        <div class="col-md-4 col-xs-12 right-footer">
                           <h1>BAD FOR THE COMMUNITY</h1>

                           <p style={{color: 'red'}}>2021</p>
                            
                        </div>




                    </div>

                </div>
            </footer> */}


        </div>
    )
}

export default About