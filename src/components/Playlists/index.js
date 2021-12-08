import React from 'react'
import '../../components/Playlists/index.css'
import Navbar from '../Navbar'
import Thumbnail from '../../assets/playlist-01.jpeg'
import Thumbnail2 from '../../assets/playlist-02.jpeg'
import AppleMusic from '../../assets/apple-music.png'
import Spotify from '../../assets/spotify.png'
import Footer from '../Footer'
import {Link} from 'react-router-dom'


const Playlists = () => {
    return (
        <div>
            <Navbar />

            <div id="play-section" class="container">

                <div>
                    <div style={{paddingTop: 50}} class="row">
                      
                        <div class="order-sm-12 col-md-6">

                            <div>
                              <img src={Thumbnail2} class="img-fluid" />
                            </div>
                        </div>

                        <div id="play-hack" class="order-sm-1 col-md-6">
                            <h1 className="playlist-header">Playlists</h1>
                             <p className="p-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. </p>

                             {/* <p style={{paddingTop: 12, fontSize: 14}} className="p-sub">Learn More </p> */}

                             <div className="big-biz">
                                 
                                    <img src={AppleMusic} class="img-fluid" />
                                
                                    <img src={Spotify} class="img-fluid" />
                             </div>
                        </div>


                    </div>

                </div>

            </div>

            <div id="different-section">

                <div class="container">

                    <div class="row">
                        <div class="col-xs-12 col-md-6">
                            <div className="ds-inner">
                                <p className="ds-title">2021 Clips</p>

                                <h1>Come see our Favorite Moments</h1> 
                                <p className="ds-sub" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. </p>
                               <a href="https://www.youtube.com/playlist?list=PLqpjW58LUV3wH4I2w6itZgtunKm_i7Zfy" target="_blank">
                                <p>Learn More</p>
                                </a>
                            </div>
                        </div>


                        <div id="vid" class="col-xs-12 col-md-6">
                        <div class="embed-responsive embed-responsive-16by9">
                           <iframe class="embed-responsive-item" width="640" height="345" src="https://www.youtube.com/embed/WNDsTj7W8VU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
