import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import '../Home/index.css'
import Tomo from '../../assets/Tomo.jpeg'
import Nate from '../../assets/Nate.jpeg'
import Rob from '../../assets/Rob.jpeg'
import Yves from '../../assets/Yves.jpeg'
import Clark from '../../assets/Clark-D.jpeg'
import Bori from '../../assets/Borirock.jpeg'
import Kei from '../../assets/Kei.jpeg'
import Group from '../../assets/group.jpeg'
import Trio from '../../assets/trio.jpeg'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import RobHome from '../../assets/berto-home.jpeg'
import YvesHome from '../../assets/yves-home-1.jpeg'
import YvesHome2 from '../../assets/yves-home-2.jpeg'
import TomoHome from '../../assets/tomo-home-1.jpeg'
import NateHome from '../../assets/nate-nics-home-1.jpeg'
import Duo from '../../assets/duo.jpeg'






const Home = () => {
    return (
        <div>
	<Navbar id="nav" />
	<div id="top-section">
		<div id="main" class="container">
            <div class="row">
            </div>

                <div class="col-xs-12 col-md-6">
                </div>
                    <h2 className="hp-title"> Bad For the Community</h2>
                    <div style={{paddingTop: 20}} className="episode-btn">
                        <a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Watch Latest Episode </span> </a>
                    </div>

                <div class="col-xs-12 col-md-6">
                    {/* <img src={Logo} class="img-fluid" /> */}

                </div>

		</div>
	</div>
	<div id="lower-section">
		<div class="container">
			<div>
				<p className="terms"> A podcast about young entreprenurs</p>
			</div>
		</div>
	</div>
	<div>
		<div class="container">

            <div id="dt-none">

			<h3 className="rg-title">Recent Guests</h3>
			<div class="container">
				<div class="row">
					<div class="col-md-4 col-xs-12"> <img className="artist-hover" src={Clark}  class="img-fluid"   height="330" width="350" />
						<p className="artist-title"> GuyClaude &amp; Clark D Interview - Episode 20 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Listen Now </span> </a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12"> <img className="artist-hover" src={Kei}   class="img-fluid" height="330" width="350" />
						<p className="artist-title">Kei Interview - Episode 19 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rXnYSkwQ36w"> <span> Listen Now </span> </a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12"> <img className="artist-hover" src={Kei} class="img-fluid" height="330" width="350" />
						<p className="artist-title"> BoriRock - Episode 18 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/Si846Fe1huE"> <span> Listen Now</span> </a>
						</div>
					</div>
				</div>
			</div>
            </div>
			<div className="mob-section">
				<div class="container">

		        	<h3 className="rg-title">Recent Guests</h3>
					<div class="row">
						<div class="col-md-12">
							<section class="carousel" aria-label="Gallery">
								<ol class="carousel__viewport">
									<li id="carousel__slide1" tabindex="0" class="carousel__slide">
										<div class="carousel__snapper"> <a href="#carousel__slide4" class="carousel__prev">Go to last slide</a> <a href="#carousel__slide2" class="carousel__next">Go to next slide</a> </div>
									</li>
									<li id="carousel__slide2" tabindex="0" class="carousel__slide">
										<div class="carousel__snapper"></div> <a href="#carousel__slide1" class="carousel__prev">Go to previous slide</a> <a href="#carousel__slide3" class="carousel__next">Go to next slide</a> </li>
									<li id="carousel__slide3" tabindex="0" class="carousel__slide">
										<div class="carousel__snapper"></div> <a href="#carousel__slide2" class="carousel__prev">Go to previous slide</a> <a href="#carousel__slide4" class="carousel__next">Go to next slide</a> </li>
									<li id="carousel__slide4" tabindex="0" class="carousel__slide">
										<div class="carousel__snapper"></div> <a href="#carousel__slide3" class="carousel__prev">Go to previous slide</a> <a href="#carousel__slide1" class="carousel__next">Go to first slide</a> </li>
								</ol>
								<aside class="carousel__navigation">
									<ol class="carousel__navigation-list">
										<li class="carousel__navigation-item"> <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide </a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide </a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide </a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide </a> </li>
									</ol>
								</aside>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>


		<div id="scroll" style={{paddingTop: 90}} class="container">

				<h1 style={{fontSize: 62, width: '72%', margin: 'auto', fontWeight: 'bold'}} class="text-center">Meet The Hosts</h1>
			<div className="scroll-container" class="row">
			<div class="col-md-3 col-xs-12"> 
			<img className="artist-hover" src={RobHome}  class="img-fluid"   height="330" width="350" />
						{/* <p className="artist-title"> GuyClaude &amp; Clark D Interview - Episode 20 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Listen Now </span> </a>
						</div> */}
				</div>
					<div id="switch" class="col-md-3 col-xs-12"> 
					<img className="artist-hover" src={YvesHome}   class="img-fluid" height="130" width="850" />
					{/* <img className="artist-hover" src={YvesHome2}   class="img-fluid" id="img-top" height="330" width="350" /> */}
						{/* <p className="artist-title">Kei Interview - Episode 19 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rXnYSkwQ36w"> <span> Listen Now </span> </a>
						</div> */}
					</div>
					<div class="col-md-3 col-xs-12"> <img className="artist-hover" src={TomoHome} class="img-fluid" height="330" width="350" />
						{/* <p className="artist-title"> BoriRock - Episode 18 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/Si846Fe1huE"> <span> Listen Now</span> </a>
						</div> */}
					</div>

					<div class="col-md-3 col-xs-12"> <img className="artist-hover" src={NateHome} class="img-fluid" height="330" width="350" />
						{/* <p className="artist-title"> BoriRock - Episode 18 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/Si846Fe1huE"> <span> Listen Now</span> </a>
						</div> */}

					
					</div>


			</div>

		</div>

	</div>

	<div id="last-level" class="container">
		<div class="row">
			<div class="col-md-6 col-xs-12">
				<div className="mt-hosts">
					<div class="container">
						<p style={{marginBottom: -4}}> Our Choices For </p>
						<h1> Good For The Community </h1>
						<p> Follow along with our hosts, Young Rob and Saint Yves, Tomo and Nate Nics as they discuss a broad range of topics and interview the top leaders in their respective industries.</p>
						<div style={{paddingTop: 12}} className="episode-btn-4">
                            <Link to="/About" style={{textDecoration: 'none'}}>
							    <p style={{textDecoration: 'none'}} target="_blank"> <span> Explore </span> </p>
                            </Link>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xs-12"> 
                 <img  src={Trio} class="img-fluid" /> 
            </div>
		</div>
	</div>



	{/* <div class="container">

	</div>
		<div class="row">

			<div class="col-xs-12 col-md-6">

				<div style={{backgroundColor:'white', maxWidth: '100%'}}>

					<div class="container">

						<p>GFTC</p>
					</div>


				</div>

			</div>

			<div class="col-xs-12 col-md-6">

				<div style={{backgroundColor:'#ececec',  maxWidth: '100%'}}>

					<div class="container">
						<p>BFTC</p>
					</div>
				</div>

			</div>

		</div> */}
	



    <Footer />
	
</div>
     
    )
}

export default Home;
