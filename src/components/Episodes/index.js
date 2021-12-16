import React from 'react'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'
import Kieh from '../../assets/kieh.jpeg'
import Clark from '../../assets/Clark-D.jpeg'
import Kei from '../../assets/Kei.jpeg'
import Footer from '../Footer'
import '../Episodes/index.css'



const Episodes = () => {
    return (
        <div>
            <Navbar />


	<div class="wide-container">

        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2 style={{paddingTop: 30, marginBottom: 30, fontSize: 34, fontWeight: 'bold'}}>Browse Epsisodes</h2>
            <Link to="/Browse-Episodes" style={{textDecoration: 'none', color: 'black'}}>
                <h2 style={{paddingTop: 44,fontSize: 18}}> Explore More &#8594;</h2>
            </Link>
        </div>
        <div class="row">
            <div id="artist-card"  class="col-xs-12 col-md-3">
                <img src={Kieh} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3 style={{textAlign: 'center'}}>Kieh</h3>
                <div className="episode-btn">
                    <span>Listen</span>
                </div>
            </div>
            <div id="artist-card"  class="col-xs-12 col-md-3">
                <img src={Clark} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
                <div className="episode-btn">
                    <span>Listen</span>
                </div>
            </div>
            <div  id="artist-card" class="col-xs-12 col-md-3">
                <img src={Kei} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}} >Kei</h3>
                <div className="episode-btn">
                    <span>Listen</span>
                </div>
            </div>
            <div id="artist-card"  class="col-xs-12 col-md-3">
                <img src={Kieh} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}}>Kieh</h3>
                <div className="episode-btn">
                    <span>Listen</span>
                </div>
            </div>

        </div>


        


</div>




<div id="episode-page" class="wide-container">

<div style={{display: 'flex', justifyContent: 'space-between'}}>
    <h2 style={{paddingTop: 30, marginBottom: 30, fontSize: 34, fontWeight: 'bold'}}>Browse Epsisodes</h2>
    <Link to="/Browse-Episodes" style={{textDecoration: 'none', color: 'black'}}>
        <h2 style={{paddingTop: 44,fontSize: 18}}> Explore More &#8594;</h2>
    </Link>
</div>
<div class="row">
    <div id="artist-card"  class="col-xs-12 col-md-3">
        <img src={Kieh} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3 style={{textAlign: 'center'}}>Kieh</h3>
        <div className="episode-btn">
            <span>Listen</span>
        </div>
    </div>
    <div id="artist-card"  class="col-xs-12 col-md-3">
        <img src={Clark} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
        <div className="episode-btn">
            <span>Listen</span>
        </div>
    </div>
    <div  id="artist-card" class="col-xs-12 col-md-3">
        <img src={Kei} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}} >Kei</h3>
        <div className="episode-btn">
            <span>Listen</span>
        </div>
    </div>
    <div id="artist-card"  class="col-xs-12 col-md-3">
        <img src={Kieh} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Kieh</h3>
        <div className="episode-btn">
            <span>Listen</span>
        </div>
    </div>

</div>






</div>



<Footer />

        </div>
    )
}

export default Episodes;
