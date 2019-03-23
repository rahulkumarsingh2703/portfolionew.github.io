import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl';

class Projects extends Component{
	constructor(props){
		super(props);
		this.state = { activeTab: 0 };
	}

toggleCategories(){
	if(this.state.activeTab === 0){
    return(    

<div className="projects-grid">

{/* Project 1*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 2*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 3*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

</div>)}

    else if(this.state.activeTab === 1){
    return(
    	<div className="projects-grid">

{/* Project 1*/}

    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 2*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 3*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

</div>
    )}
    else if(this.state.activeTab === 2){
    return(
    	<div className="projects-grid">

{/* Project 1*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 2*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 3*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

</div>
    )}
    else if(this.state.activeTab === 3){
    return(
    	<div className="projects-grid">

{/* Project 1*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 2*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

{/* Project 3*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>Description</Button>
        <Button colored>Document</Button>
        <Button colored>Code</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
    </Card>

</div>
    )}
}

    

	render(){
		return(
				<div className="category-tabs">
				<Tabs activeTab = {this.state.activeTab} onChange = {(tabID) => this.setState({activeTab: tabID})} ripple>
					<Tab>Project 1</Tab>
					<Tab>Project 2</Tab>
					<Tab>Project 3</Tab>
					<Tab>Project 4</Tab>
				</Tabs>

                <Grid>
                	<Cell col={12}>
                		<div className="content">{this.toggleCategories()}</div>
                	</Cell>
				</Grid>

				</div>
			)
	}
}

export default Projects;