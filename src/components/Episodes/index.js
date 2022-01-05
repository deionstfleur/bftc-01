import React from 'react'
import Navbar from '../Navbar'
import {Link} from 'react-router-dom'
import Kieh from '../../assets/kieh.jpeg'
import Clark from '../../assets/Clark-D.jpeg'
import Kei from '../../assets/Kei.jpeg'
import Footer from '../Footer'
import Tamera from '../../assets/tamera.jpeg'
import Episode23 from '../../assets/Episode23.png'
import Episode2 from '../../assets/Episode2.png'
import Episode22 from '../../assets/Episode22.png'
import Episode21 from '../../assets/Episode21.png'
import Episode20 from '../../assets/Episode20.png'
import Episode18 from '../../assets/Episode18.png'
import Episode17 from '../../assets/Episode17.png'
import Episode15 from '../../assets/Episode15.png'
import Episode13 from '../../assets/Episode13.png'
import Episode12 from '../../assets/Episode12.png'
import Episode10 from '../../assets/Episode10.png'
import Episode9 from '../../assets/Episode9.png'
import Episode8 from '../../assets/Episode8.png'
import Episode7 from '../../assets/Episode7.png'
import Episode6 from '../../assets/Episode6.png'
import Episode5 from '../../assets/Episode5.png'
import Episode4 from '../../assets/Episode4.png'
import Episode3 from '../../assets/Episode3.png'

import '../Episodes/index.css'






const Episodes = () => {
    const [isShow, setIsShow] = React.useState(false);
    const handleClick = () => setIsShow((prev) => !prev);
    return (
        <div>
            <Navbar />


	<div class="wide-container">

        <h1 style={{fontWeight: 'bold', paddingTop: 30, marginBottom: 30, fontSize: 50}} class="text-center"> Browse our Catalog</h1>
{/* 
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h2 style={{paddingTop: 30, marginBottom: 30, fontSize: 34, fontWeight: 'bold'}}>Browse Epsisodes</h2>
            <Link to="/Browse-Episodes" style={{textDecoration: 'none', color: 'black'}}>
                <h2 style={{paddingTop: 44,fontSize: 18}}> Explore More &#8594;</h2>
            </Link>
        </div> */}
        <div className="ep-row">
            <div id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode23} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3 style={{textAlign: 'center'}}>Kieh</h3>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode22} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div  id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode21} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}} >Kei</h3>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode20} style={{borderRadius: 20}} class="img-fluid" />
                <p className="episode-titles">Episode</p>
                <h3  style={{textAlign: 'center'}}>Kieh</h3>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>

        </div>


        


</div>

<div className="episodes-btn">
    <span onClick={handleClick}>+</span>
</div>
{/* <button onClick={handleClick}>toggle show</button> */}


<div  id="episode-page" class="wide-container">

<div className={isShow ? "show" : "hide"}>
<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode18} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3 style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode17} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode15} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}} >Kei</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode13} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode12} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3 style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode10} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode9} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}} >Kei</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode8} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode7} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3 style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode6} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode5} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}} >Kei</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode4} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode3} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3 style={{textAlign: 'center'}}>Kieh</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode2} style={{borderRadius: 20}} class="img-fluid" />
        <p className="episode-titles">Episode</p>
        <h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://www.youtube.com/watch?v=2_IjvtpqkG4&t=1232s" target="_blank" >Youtube</a>
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

export default Episodes;
