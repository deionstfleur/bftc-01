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
import Kieh from '../../assets/kieh.jpeg'
import Tamera from '../../assets/tamera.jpeg'
import Group from '../../assets/group.jpeg'
import Trio from '../../assets/trio.jpeg'
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Footer from '../Footer'
import RobHome from '../../assets/berto-home.jpeg'
import RobHome2 from '../../assets/berto-home-2.jpeg'
import YvesHome from '../../assets/yves-home-1.jpeg'
import YvesHome2 from '../../assets/yves-home-2.jpeg'
import TomoHome from '../../assets/tomo-home-1.jpeg'
import TomoHome2 from '../../assets/tomo-home-2.jpeg'
import NateHome from '../../assets/nate-nics-home-1.jpeg'
import NateHome2 from '../../assets/nate-nics-home-2.jpeg'
import Duo from '../../assets/duo.jpeg'
import Arrow from '../../assets/arrow-forward-outline.svg'






const Home = () => {
    return (
        <div>
	<Navbar id="nav" />
	<div id="top-section">
		<div id="main" class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6">
				<div data-aos="fade-up">

                    <h2 className="hp-title"> Bad For the Community</h2>
                    <div style={{paddingTop: 20}} className="episode-btn">
                        <a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Watch Latest Episode </span> </a>
                    </div>
				</div>
                </div>


                <div class="col-xs-12 col-md-6">
				<div data-aos="fade-up">
                    <img id="photo-mob-padding" src={Logo} class="img-fluid" />

				</div>

                </div>
            </div>


		</div>
	</div>
	<div id="lower-section">
		<div class="wide-container">
			<div>
				<p className="terms"> A podcast about young entrepreneurs</p>
			</div>
		</div>
	</div>

	<div class="wide-container">

		<div style={{display: 'flex', justifyContent: 'space-between'}}>
			<h2 style={{paddingTop: 30, marginBottom: 30, fontSize: 34, fontWeight: 'bold'}}>Browse Episodes</h2>
			<Link to="/Browse-Episodes" style={{textDecoration: 'none', color: 'black'}}>
				<h2 style={{paddingTop: 44,fontSize: 18}}> Explore More &#8594;</h2>
			</Link>
		</div>
		<div class="row">
		<div id="artist-card"  class="col-xs-12 col-md-3">
			<img src={Tamera} style={{borderRadius: 20}} class="img-fluid" />
			<p className="episode-titles">Episode</p>
			<h3 style={{textAlign: 'center'}}>Tamera</h3>
			<div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Soundcloud</a>
						<a class="dropdown-item" href="#">Apple</a>
						<a class="dropdown-item" href="#">Youtube</a>
					</div>
			</div>
		</div>
		<div id="artist-card"  class="col-xs-12 col-md-3">
			<img src={Clark} style={{borderRadius: 20}} class="img-fluid" />
			<p className="episode-titles">Episode</p>
			<h3  style={{textAlign: 'center'}}>Guy and Clark D</h3>
			<div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Soundcloud</a>
						<a class="dropdown-item" href="#">Apple</a>
						<a class="dropdown-item" href="#">Youtube</a>
					</div>
			</div>
		</div>
		<div  id="artist-card" class="col-xs-12 col-md-3 card-gone">
			<img src={Kei} style={{borderRadius: 20}} class="img-fluid" />
			<p className="episode-titles">Episode</p>
			<h3  style={{textAlign: 'center'}} >Kei</h3>
			<div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Soundcloud</a>
						<a class="dropdown-item" href="#">Apple</a>
						<a class="dropdown-item" href="#">Youtube</a>
					</div>
			</div>
		</div>
		<div id="artist-card"  class="col-xs-12 col-md-3 card-gone">
			<img src={Kieh} style={{borderRadius: 20}} class="img-fluid" />
			<p className="episode-titles">Episode</p>
			<h3  style={{textAlign: 'center'}}>Kieh</h3>
			<div  class="dropdown-show">
				<a  class="btn btn-secondary dropdown-toggle episode-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span>Listen</span>
				</a>

					<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<a class="dropdown-item" href="#">Soundcloud</a>
						<a class="dropdown-item" href="#">Apple</a>
						<a class="dropdown-item" href="#">Youtube</a>
					</div>
			</div>
		</div>

		</div>
		


	</div>

	<div data-aos="fade-up">


		<div id="scroll" style={{paddingTop: 90, marginBottom: 90}} class="wide-container">

				<h1 style={{fontSize: 62, width: '72%', margin: 'auto', fontWeight: 'bold', marginBottom: 30}} class="text-center">Meet The Hosts</h1>
			<div className="scroll-container" class="row">
			<div class="col-md-3 col-xs-12"> 
			<img className="artist-hover" src={RobHome} data-toggle="modal" data-target="#exampleModalCenter"  class="img-fluid"   style={{height: '100%'}} width="350" />
						{/* <p className="artist-title"> GuyClaude &amp; Clark D Interview - Episode 20 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rpefP3ludzY"> <span> Listen Now </span> </a>
						</div> */}

									<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Young Rob</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														{/* <img src={RobHome2} class="img-fluid" /> */}
														<iframe width="100%" height="200" src="https://www.youtube.com/embed/OTjcJK0rlU4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

													</div>


													<div class="col-xs-12 col-md-6">

														<p>IG</p>
														<p>TWITTER</p>

														<p style={{textAlign: 'center', border: '1px solid black', padding: 10}}>Bio</p>

													

													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
				</div>
					<div id="switch" class="col-md-3 col-xs-12"> 
					<img className="artist-hover" src={YvesHome} data-toggle="modal" data-target="#exampleModalCenter2"   class="img-fluid" height="130" width="850" />
					{/* <img className="artist-hover" src={YvesHome2}   class="img-fluid" id="img-top" height="330" width="350" /> */}
						{/* <p className="artist-title">Kei Interview - Episode 19 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/rXnYSkwQ36w"> <span> Listen Now </span> </a>
						</div> */}


<div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Yves</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={YvesHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">


													<p>IG</p>
														<p>TWITTER</p>

														<p style={{textAlign: 'center', border: '1px solid black', padding: 10}}>Bio</p>
													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
					</div>
					<div class="col-md-3 col-xs-12"> <img className="artist-hover" src={TomoHome} style={{height: '100%'}} data-toggle="modal" data-target="#exampleModalCenter3"  class="img-fluid" height="330" width="350" />
						{/* <p className="artist-title"> BoriRock - Episode 18 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/Si846Fe1huE"> <span> Listen Now</span> </a>
						</div> */}


<div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Tomo</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={TomoHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">


													<p>IG</p>
														<p>TWITTER</p>

														<p style={{textAlign: 'center', border: '1px solid black', padding: 10}}>Bio</p>
													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
					</div>

					<div class="col-md-3 col-xs-12"> <img className="artist-hover" src={NateHome} style={{height: '100%'}} data-toggle="modal" data-target="#exampleModalCenter4" class="img-fluid" height="330" width="350" />
						{/* <p className="artist-title"> BoriRock - Episode 18 </p>
						<div className="guest-btn">
							<a style={{textDecoration: 'none'}} target="_blank" href="https://youtu.be/Si846Fe1huE"> <span> Listen Now</span> </a>
						</div> */}



<div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Nate</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={NateHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">


													<p>IG</p>
														<p>TWITTER</p>

														<p style={{textAlign: 'center', border: '1px solid black', padding: 10}}>Bio</p>
													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>

					
					</div>


			</div>

		</div>

		</div>



					

					
<div id="phone-only">

			<h1 className="mt-mob"> Meet the Hosts </h1>
			<p className="swipe"> Swipe &#8594; </p>
		<div class="mob-scroll">


			<img height="200" data-toggle="modal" data-target="#exampleModalCenter5" src={RobHome} />

<div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Young Rob</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={RobHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">

														<p>Bio</p>

													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
			<img height="200" data-toggle="modal" data-target="#exampleModalCenter6" src={YvesHome} />
			<div class="modal fade" id="exampleModalCenter6" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Saint Yves</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={YvesHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">

														<p>bio</p>

													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
			<img height="200"  data-toggle="modal" data-target="#exampleModalCenter7" src={TomoHome} />
			<div class="modal fade" id="exampleModalCenter7" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Tomo</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={TomoHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">

														<p>Bio</p>

													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>
			<img height="200"  data-toggle="modal" data-target="#exampleModalCenter8" src={NateHome} />
			<div class="modal fade" id="exampleModalCenter8" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered" role="document">
										<div class="modal-content">
										<div class="modal-header">
											<h5 class="modal-title" id="exampleModalLongTitle">Nate</h5>
											<button type="button" class="close" data-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="modal-body">
											
											<div class="container">

												<div class="row">

													<div class="col-xs-12 col-md-6">

														<img src={NateHome2} class="img-fluid" />

													</div>


													<div class="col-xs-12 col-md-6">

														<p>Bio</p>

													</div>

												</div>

											</div>
											
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
										</div>
										</div>
									</div>
									</div>

		</div>
		<div>
			<a href="https://www.instagram.com/bftcpodcast/" target="_blank" style={{textDecoration:'none'}}>
				<p style={{marginBottom: '0rem'}} className="mob-learn">Instagram</p>
			</a>
		</div>



	</div>


	<div id="logos-section">

		<div id="inner-logo" class="text-center">

		<div class="text-center">

			<div>
				<h1>Stay Connected and join our Newsletter</h1>
			</div>

			<div style={{display: 'inline-block'}}>
			<form>
  <div class="form-row align-items-center">
  
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Email</label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Email" />
      </div>
    </div>

    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>

			</div>

		</div>

		</div>

	</div>



	<div id="new-section">

		<div class="wide-container">

			<div class="row">

			

			</div>

		</div>

	</div>



	<div id="last-level">
<div data-aos="fade-up">

<div id="ct-padding" class="container">

		<div class="row">
			<div class="col-md-6 col-xs-12">
				<div className="mt-hosts">
					<div class="container">
						<p style={{marginBottom: -4, marginLeft: 10}}> Our Choices For </p>
						<h1> Good For The Community </h1>
						<p> Follow along with our hosts, Young Rob and Saint Yves, Tomo and Nate Nics as they discuss a broad range of topics and interview the top leaders in their respective industries.</p>
						<div style={{paddingTop: 12}} className="episode-btn-4">
                            <Link to="/" style={{textDecoration: 'none'}}>
							    <p style={{textDecoration: 'none'}} target="_blank"> <span> Explore </span> </p>
                            </Link>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-xs-12"> 
                 <img id="mob-pad"  src={Trio} class="img-fluid" /> 
            </div>
		</div>
</div>
</div>
	</div>





	

<Footer />




	
</div>
     
    )
}

export default Home;
