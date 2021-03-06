import React from 'react'
import '../Footer/index.css'
const Footer = () => {
    return (
        <footer>
		<div id="footer-container" class="container">


			<div class="row">
				<div class="col-md-4 col-xs-12 left-footer">
					<p style={{fontWeight: 'bold'}}>Follow Us</p>

					<a style={{textDecoration: 'none'}} href="https://instagram.com/bftcpodcast?utm_medium=copy_link" target="_blank">
						<p className="footer-links">Instagram</p>
					</a>
					<a style={{textDecoration: 'none'}}   href="https://mobile.twitter.com/bftcpodcast" target="_blank">
						<p className="footer-links">Twitter</p>
					</a>
					<a style={{textDecoration: 'none'}}  href="" target="_blank">
						<p className="footer-links">Youtube</p>
					</a>
				</div>
				<div class="col-md-4 col-xs-12 middle-footer">
					<p style={{fontWeight: 'bold'}}>Where to Listen</p>
                    <a  style={{textDecoration: 'none'}} href="https://podcasts.apple.com/us/podcast/bad-for-the-community/id1570889413" target="_blank">
				    	<p className="footer-links">Apple</p>
                    </a>
                    <a style={{textDecoration: 'none'}}  href="https://open.spotify.com/show/1evrNWwBQsLVUZX0MiHZjZ" target="_blank">
					        <p className="footer-links">Spotify</p>
                    </a>
                    <a style={{textDecoration: 'none'}}  href="https://music.amazon.com/podcasts/1e73552a-0a77-4a01-9dce-83ae5f179b60" target="_blank">
					    <p className="footer-links">Aamazon</p>
                    </a>
				</div>
				<div class="col-md-4 col-xs-12 right-footer">
					<h1>BAD FOR THE COMMUNITY &#8482;</h1>
					<p style={{color: 'red'}}>2021</p>
				</div>
			</div>

		</div>
	</footer>
    )
}

export default Footer
