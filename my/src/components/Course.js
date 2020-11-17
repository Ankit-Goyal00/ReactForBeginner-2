import React from 'react';
import {Card, CardBody, CardTitle, CardText, Button} from 'reactstrap';

function Course({course}){
	return(
		<div className="text-center">
			<Card>
				<CardBody>
					<CardTitle>{course.title}</CardTitle>
					<CardText className="text-muted">{course.description}</CardText>
					<Button onClick={()=>{
						alert("Course is deleted")
					}}color="danger">Delete</Button>
					<Button onClick={()=>{
						alert("Course is updated")
					}} color="warning" className="ml-3">Update</Button>
				</CardBody>
			</Card>
		</div>
		)
};

export default Course;