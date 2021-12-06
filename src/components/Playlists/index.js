import React from 'react'
import '../../components/Playlists/index.css'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'


const Playlists = () => {
    return (
        <div>
            <Navbar />

            <div class="container">

                <div>
                    <h1 className="playlist-header">Playlists</h1>

                    <p className="p-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet dignissim urna. Nulla consequat facilisis ante, quis scelerisque ligula consectetur a. Cras ut fringilla tellus.</p>
                </div>

            </div>


        </div>
    )
}

export default Playlists
