import React from 'react';
import {Jumbotron,Button} from 'reactstrap';

function Home(){
	return(
		<div className="text-center">
			<Jumbotron >
				<h1>Learn Code With WhiteHatJr. </h1>
				<p>Here You Will Learn How to Create a Single Page Application 
				   Using React js</p>
				
				<Button color="primary" >Start Learning</Button>
				

			</Jumbotron>

		</div>

		)
};

export default Home;