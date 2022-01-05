import React from 'react'
import '../../components/Playlists/index.css'
import Navbar from '../Navbar'
import Thumbnail from '../../assets/playlist-01.jpeg'
import Thumbnail2 from '../../assets/playlist-02.jpeg'
import AppleMusic from '../../assets/apple-music.png'
import Spotify from '../../assets/spotify.png'
import Footer from '../Footer'
import Trio from '../../assets/trio.jpeg'

import {Link} from 'react-router-dom'


const Playlists = () => {
    return (
        <div>
            <Navbar />






            <div id="play-section">

                <div>
                    <div style={{paddingTop: 93}} >
                      
                        <div class="container">

                            <div class="row">

                                <div class="order-sm-12 col-md-6">
                                        <img src={Trio} class="img-fluid" />
                                </div>

                                <div class="order-sm-1 col-md-6">
                                   <h1 style={{color: 'white', fontSize: 54, fontWeight: 'bold'}}>The BFTC Playlist</h1>
                                     <p style={{color: 'white', fontSize: 25}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. </p>


                                     <div style={{display: 'flex', width: '19%'}}>
                                         <a href="#" target="_blank">
                                             <img src={AppleMusic} class="img-fluid" />
                                         </a>
                                         <a href="#" target="_blank">
                                             <img style={{marginLeft: 10}} src={Spotify} class="img-fluid" />
                                         </a>
                                     </div>
                                </div>


                            </div>

  

                        </div>


                    </div>


                </div>

            </div>

{/* 
                    <div id="middle-section">


                        <div>

                            <h1 className="middle-title">Listen on</h1>

                            <div className="mob-button-container">
                                <p style={{border: '1px solid black'}} className="mob-filter-button">Apple</p>
                                <p style={{border: '1px solid black'}} className="mob-filter-button">Amazon</p>
                                <p style={{border: '1px solid black'}} className="mob-filter-button">SoundCloud</p>
                                <p style={{border: '1px solid black'}} className="mob-filter-button">Youtube</p>
                            </div>

                            <div style={{display: 'flex', justifyContent: 'space-between', overflowX: 'auto', width: '120%', maxWidth: '100%'}}>

                     
                          

                            </div>

                        </div>



                    </div> */}


            <div id="different-section">

                <div style={{paddingTop: 60}} class="container">
                <div data-aos="fade-up">
                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                        <div class="embed-responsive embed-responsive-16by9">
                           <iframe class="embed-responsive-item" width="640" height="345" src="https://www.youtube.com/embed/WNDsTj7W8VU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        </div>


                        <div  id="vid" class="col-xs-12 col-md-6">
                  


                        <div className="ds-inner">
                                <p className="ds-title">2021 Clips</p>

                                <h1>Come see our Favorite Moments</h1> 
                                <p className="ds-sub" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. </p>
                                <div>
                                        <a style={{textDecoration: 'none'}} href="https://www.youtube.com/playlist?list=PLqpjW58LUV3wH4I2w6itZgtunKm_i7Zfy" target="_blank">
                                              <p style={{marginBottom: '0rem'}} className="mob-learn">Learn More</p>
                                         </a>
                                </div>
                            </div>
                       </div>

                    </div>
                </div>

                </div>

               

            </div>

        <Footer />

        </div>
    )
}

export default Playlists
