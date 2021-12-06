import React from 'react'
import '../../components/Contact/index.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import {Link} from 'react-router-dom'


const Contact = () => {
    return (
        <div>
            <Navbar />

            <div id="contact-section" class="container">
            
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

                    <img src="https://via.placeholder.com/600x400" class="img-fluid" />

                </div>

            </div>


            </div>

            <Footer />

            

            
        </div>
    )
}

export default Contact;