import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class LandingPage extends Component{
	render(){
		return(
				<div style={{ width: '100%', margin: 'auto' }}>
					<Grid className = "landing-grid">
						<Cell col = {12}>
						<img
                          src="https://avatars3.githubusercontent.com/u/13588697?s=400&v=4"
                          alt = "avatar"
                          className = "avatar-img"
						/>
						<div className="banner-text">
							<h1>Infrastructure Automation Engineer | Data Migration | DevOps Engineer</h1>
							<hr />
							<p> Skill | Skill | Skill | Skill | Skill | Skill | Skill </p>

						<div className="social-links">

                            {/* Facebook */}
						    <a href="https://www.linkedin.com/in/rahulkumarsingh27/" target="_blank" rel="noopener noreferrer">
						    <i class="fa fa-facebook-square" aria-hidden="true" />
						    </a>

						    {/* Linkedin */}
						    <a href="https://www.linkedin.com/in/rahulkumarsingh27/" target="_blank" rel="noopener noreferrer">
						    <i class="fa fa-linkedin-square" aria-hidden="true" />
						    </a>

						    {/* Github */}
						    <a href="https://www.linkedin.com/in/rahulkumarsingh27/" target="_blank" rel="noopener noreferrer">
						    <i class="fa fa-github-square" aria-hidden="true" />
						    </a>

						    {/* Instagram */}
						    <a href="https://www.linkedin.com/in/rahulkumarsingh27/" target="_blank" rel="noopener noreferrer">
						    <i class="fa fa-instagram" aria-hidden="true" />
						    </a>
						</div>
						</div>
						</Cell>
					</Grid>
				</div>

			)
	}
}

export default LandingPage;