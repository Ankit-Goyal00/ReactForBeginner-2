import React from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';


function Menu(){
	return(
		<div>
			<ListGroup>
      			<ListGroupItem tag="a" href="/">Home</ListGroupItem>
      			<ListGroupItem tag="a" href="/Add Course">Add Course</ListGroupItem>
      			<ListGroupItem tag="a" href="/View Course">View Course</ListGroupItem>
      			<ListGroupItem tag="a" href="/About">About</ListGroupItem>
      			<ListGroupItem tag="a" href="/Contact">Contact</ListGroupItem>
    		</ListGroup>
		</div>

		)
};

export default Menu;
