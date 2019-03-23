import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
	render(){
		return(
				<div className = "contact-body">
					<Grid className = "contact-grid">
						<Cell col={6}>
							<h2>Rahul Kumar Singh</h2>
							<img src="https://avatars3.githubusercontent.com/u/13588697?s=400&v=4" 
							alt="avatar"
							className = "avatar-img"
							style = {{height: '250px'}} />
							<p style= {{width: '75%', margin: 'auto', paddingTop: '1em'}}> Typ about yourself here</p>
						</Cell>
						<Cell col={6}>
							<h2>Contact Me</h2>
							<hr/>
							<div className="contact-list">
							<List>
  								<ListItem>
   								 <ListItemContent style={{fontsize: '30px', fontFamily: 'Anton'}}>
   								 <p><i className="fa fa-phone-square" aria-hidden="true"/> (+91) 9448103127</p>
   								 </ListItemContent>
 								 </ListItem>
								<ListItem>
   								 <ListItemContent style={{fontsize: '30px', fontFamily: 'Anton'}}>
   								 <p><i className="fa fa-envelope" aria-hidden="true"/>
   								 rsrajput.001@gmail.com</p>
   								 </ListItemContent>
 								</ListItem>
  								<ListItem>
   								 <ListItemContent style={{fontsize: '30px', fontFamily: 'Anton'}}>
   								 <p><i className="fa fa-skype" aria-hidden="true"/>
   								 rahul2703</p>
   								 </ListItemContent>
 								</ListItem>
							</List>
							</div>
						</Cell>
					</Grid>
				</div>
			)
	}
}

export default Contact;