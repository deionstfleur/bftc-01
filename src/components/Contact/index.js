import React from 'react'
import '../../components/Contact/index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'
import Group from '../../assets/group.jpeg'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'


function Map() {
    return (
        <GoogleMap defaultZoom={10} 
        defaultCenter={{ lat: 42.3601, lng: 71.0589}} 
        />
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));


const Contact = () => {
    return (
        <div>
            <Navbar />

            <div id="contact-section" class="container">

            <div data-aos="fade-up">

            <div class="row">

                <div class="col-xl-6 col-sm-12">
                        <div>
                            <h1 className="contact-title">Boston</h1>
                            <p className="contact-sub">123 Boston, MA</p>
                            <p className="contact-sub">P.O. Box 123</p>
                        </div>

                        <div>
                            <h1 className="contact-title">Contact</h1>
                            <p className="contact-sub">bftc@gmail.com</p>
                        </div>
                </div>


                <div class="col-xl-6 col-sm-12">

                    <img src={Group} class="img-fluid" />
                    
                </div>

            </div>
            </div>

            


            </div>

            <Footer />

            

            
        </div>
    )
}

export default Contact;