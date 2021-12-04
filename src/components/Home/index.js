import React from 'react'
import Navbar from '../Navbar'
import '../Home/index.css'
import Tomo from '../../assets/Tomo.jpeg'
import Nate from '../../assets/Nate.jpeg'
import Rob from '../../assets/Rob.jpeg'
import Yves from '../../assets/Yves.jpeg'
import Clark from '../../assets/Clark-D.jpeg'
import Bori from '../../assets/Borirock.jpeg'
import Kei from '../../assets/Kei.jpeg'

const Home = () => {
    return (
        <div>
	<Navbar />
	<div id="top-section">
		<div id="main" class="container">
			<h2 className="hp-title"> Bad For the Community</h2>
			<div style={{paddingTop: 20}} className="episode-btn">
				<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Watch Latest Episode </span> </a>
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
					<div class="col-md-4 col-xs-12"> <img src={Clark} height="330" width="350" />
						<p className="artist-title"> GuyClaude &amp; Clark D Interview - Episode 20 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Listen Now </span> </a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12"> <img src={Kei} height="330" width="350" />
						<p className="artist-title">Kei Interview - Episode 19 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rXnYSkwQ36w"> <span> Listen Now </span> </a>
						</div>
					</div>
					<div class="col-md-4 col-xs-12"> <img src={Bori} height="330" width="350" />
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
						<div class="col-12">
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
										<li class="carousel__navigation-item"> <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a> </li>
										<li class="carousel__navigation-item"> <a href="#carousel__slide4" class="carousel__navigation-button">Go to slide 4</a> </li>
									</ol>
								</aside>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="last-level" class="container">
		<div class="row">
			<div class="col-md-6 col-xs-12"> {/* <img src="https://via.placeholder.com/400x500" /> */} </div>
			<div class="col-md-6 col-xs-12">
				<div className="mt-hosts">
					<div class="container">
						<h1>Meet the Hosts</h1>
						<p> Follow along with our hosts, Young Rob and Saint Yves, Tomo and Nate Nics as they discuss a broad range of topics and interview the top leaders in their respective industries.</p>
						<div className="episode-btn-4">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Explore </span> </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer>
		<div id="footer-container" class="container">
			<div class="row">
				<div class="col-md-4 col-xs-12 left-footer">
					<p>Follow Us</p>
					<p className="footer-links">Instagram</p>
					<p className="footer-links">Twitter</p>
					<p className="footer-links">Tiktok</p>
				</div>
				<div class="col-md-4 col-xs-12 middle-footer">
					<p>Where to Listen</p>
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

export default Home;
