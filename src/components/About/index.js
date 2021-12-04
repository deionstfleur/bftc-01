import React from 'react'
import Navbar from '../Navbar'
import '../About/index.css'
import Tomo from '../../assets/Tomo.jpeg'
import Nate from '../../assets/Nate.jpeg'
import Rob from '../../assets/Rob.jpeg'
import Yves from '../../assets/Yves.jpeg'
import { Container, Row, Col } from 'bootstrap-4-react';


const About = () => {
    return (
        <div>
            <Navbar />
        <div className="section-2">

            <div class="container">

                <div class="row">

                    <div class="col-6">

                        <div class="text-left">
                            <h2 className="pod-squad">Meet the <p style={{color: 'red'}}>Team</p></h2>

                        <div id="dt-only">

                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>
                        </div>
                        

                        </div>
                    </div>

                    <div class="col-6">

                        <div className="social-right">
                             <p>Listen on - </p>

                             <ul style={{listStyle: 'none', textDecoration: 'underline', cursor: 'pointer', color: 'red'}}>
                                 <li>Tidal</li>
                                 <li>Spotify</li>
                                 <li>Apple Podcasts </li>
                                 <li>Google Podcasts </li>
                             </ul>
                        </div>

                    </div>

                </div>


            </div>

            
        </div>


        <div id="spacing" id="podder-container" class="container">

            <div class="row">

                <div class="col-md-6 col-xs-12">

                    <img src={Rob} height="500" width="500" />

                </div>

                <div class="col-md-6 col-xs-12">

                    <h1 className="podder">Young Rob</h1>

                    <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                    <h3>Follow Me</h3>

                    <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', textDecoration: 'underline', cursor: 'pointer'}}>

                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Instagram</p>

                    </div>

                </div>

            </div>


        <div id="spacing" class="row">

            <div class="col-md-6 col-xs-12">

                <img src={Yves} height="500" width="500" />

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Saint Yves</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Instagram</p>

                </div>

            </div>

        </div>


        <div id="spacing" class="row">

            <div class="col-md-6 col-xs-12">

                <img src={Tomo} height="500" width="500" />

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Tomo</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Instagram</p>

                </div>

            </div>

        </div>




        <div  id="spacing" class="row" style={{marginBottom: 200}}>

            <div class="col-md-6 col-xs-12">

                <img src={Nate} height="500" width="500" />

            </div>

            <div class="col-md-6 col-xs-12">

                <h1 className="podder">Nate Nics</h1>

                <p className="podder-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                <h3>Follow Me</h3>

                <div style={{display: 'flex', justifyContent: 'space-between', width: '60%', textDecoration: 'underline', cursor: 'pointer'}}>

                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Instagram</p>

                </div>

            </div>

        </div>



        </div>


            <footer>
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
            </footer>


        </div>
    )
}

export default About
