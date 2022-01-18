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
				<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 23: #DropTheArchive</p>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/Qw1p8Pk0Kec" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode22} style={{borderRadius: 20}} class="img-fluid" />
				<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 22: One For The Books (feat. Echezona)</p>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/q4f190yQMD8" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div  id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode21} style={{borderRadius: 20}} class="img-fluid" />
				<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 21: Free The Man Dem</p>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/9tpb-NrWhiE" target="_blank" >Youtube</a>
					</div>
			</div>
            </div>
            <div id="episode-card"  class="col-xs-12 col-md-3">
                <img src={Episode20} style={{borderRadius: 20}} class="img-fluid" />
				<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 20: You No Black (feat. Kieh)</p>
                <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/Vf6_9Vj-on8" target="_blank" >Youtube</a>
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
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 18: F- The Club Up!</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/jJfq-T9PZlg" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode17} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 17: Bricked Up (feat. Bree$h Mob)</p>

        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/6bLFP4qdxsU" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode15} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 15: Off Your Rocker</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/nhIarYX4Pbg" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode13} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 13: She's Bad Tho</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/qecfiRUdtbQ" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode12} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 12: Donda &amp; Certified Lover Boy Review</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/iq02WMFCB2s" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode10} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 10: Roger That!</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/O0t2PXoQjLo" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode9} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 9: Students of the Game (feat. TREVO)</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/2y1oLTGqijk" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode8} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 8: Fronto Backpack (feat. MonaVeli)</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/8XonosKpP-M" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode7} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 7: Myth Into Reality (feat. Myth Boston)</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/tOszmo-rYlQ" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode6} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 6: Top Shottas (feat. Rocka)</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/pBV-BeMe_5Y" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div  id="episode-card" class="col-xs-12 col-md-3">
        <img src={Episode5} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 5: How to Do a BBL!</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/W9wlgKBF4oQ" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode4} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 4: Clark D &amp; Family Famous</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/NPYt28z3a1A" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>

</div>

<div className="ep-row">
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode3} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 3: Bad Rhymes for Community Reasons?? (ft. Rhyme or Reason)</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/aiIcqr6URE4" target="_blank" >Youtube</a>
					</div>
			</div>
    </div>
    <div id="episode-card"  class="col-xs-12 col-md-3">
        <img src={Episode2} style={{borderRadius: 20}} class="img-fluid" />
		<p style={{marginBottom: 30}} className="episode-titles">Bad For The Community Podcast | Episode 2: Internalized Oppression</p>
        <div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{/* <a class="dropdown-item" href="#">Soundcloud</a> */}
						<a class="dropdown-item" href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413?i=1000534152686" target="_blank">Apple Music</a>
						<a class="dropdown-item" href="https://youtu.be/jMgdrJlAIzs" target="_blank" >Youtube</a>
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
