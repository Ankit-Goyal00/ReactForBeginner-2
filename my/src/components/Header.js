import React from 'react';
import {Card , CardBody} from 'reactstrap';

function Header(){
	return(
		<div>
			<Card className="text-center" color="warning">
				<CardBody>
					<h1>Welcome to Courses Application</h1>
				</CardBody>

			</Card>
		</div>

		)
};

export default Header;
