import React from 'react'
import '../../components/Playlists/index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'


const Playlists = () => {
    return (
        <div>
            <Navbar />

            <div id="play-section" class="container">

                <div>
                    <h1 className="playlist-header">Playlists</h1>

                    <p className="p-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>

                    <div class="container">
                        <div class="row company-thumb">

                            <div class="col-xs-12 col-md-4">
                                    <img src="https://via.placeholder.com/550x350" class="img-fluid" />
                            </div>


                            <div class="col-xs-12 col-md-4">
                                    <img src="https://via.placeholder.com/550x350" class="img-fluid" />
                            </div>


                            <div class="col-xs-12 col-md-4">
                                    <img src="https://via.placeholder.com/550x350" class="img-fluid" />
                            </div>

                        </div>

                    </div>


                    <div class="container">

                        <div class="text-center">
                            <h1 className="moments-title">Favorite Moments</h1>
                        </div>

                    </div>
                </div>

            </div>

        <Footer />

        </div>
    )
}

export default Playlists
