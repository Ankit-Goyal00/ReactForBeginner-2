import React from 'react';
import {Form, FormGroup, Button, Label, Input ,Row} from 'reactstrap';

function Add(){
	return(
		<div>
			<h1>Fill Course Detail</h1>
			<Form>
				<FormGroup>
					<Label for="id">Course ID</Label>
					<Input type="text" placeholder="Enter id" />
				</FormGroup>
				<FormGroup>
					<Label for="title">Course Title</Label>
					<Input type="text" placeholder="Enter Title" />
				</FormGroup>
				<FormGroup>
					<Label for="desc">Course Description</Label>
					<Input type="textarea" placeholder="Enter description here" />
				</FormGroup>
				<Row >
					<Button onClick={()=>{
						alert("Course is added:")
					}}color="success" className="mr-3">Add Course</Button>
					<Button onClick={()=>{
						alert("Course is cleared:")
					}}color="warning">Clear</Button>
				</Row>



			</Form>
		</div>

		)
};

export default Add;