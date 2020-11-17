import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

function Contact(){
	return(
		<div>
		<Form>
			<FormGroup>
            	<Label for="Email">Email</Label>
        		<Input type="email" placeholder="Enter Your Email" />
      		</FormGroup>
      		<FormGroup>
        		<Label for="Select">Whats this about?..</Label>
        		<Input type="select" name="select">
          			<option>Query</option>
          			<option>Help</option>
          			<option>Enroll</option>
          			<option>Service</option>
          			
        		</Input>
      		</FormGroup>
      		<FormGroup>
        		
        		<Input type="textarea" placeholder="Go ahead! We Are Listening.." />
     		</FormGroup>
     		<Button color="primary">Submitt</Button>
		</Form>


		</div>
		)
};

export default Contact;