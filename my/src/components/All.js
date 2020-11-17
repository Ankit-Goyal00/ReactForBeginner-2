import React ,{useState} from 'react';
import Course from './Course.js'




function All(){
	const[data,setData]=useState([
	{title:"Java Course", description:"This is a demo course"},
	{title:"Python Course", description:"This is a demo course"},
	{title:"Reactjs Course", description:"This is a demo course"},
	{title:"Angular Course", description:"This is a demo course"}

	]);



	return(
		<div>
			<h1>All Course</h1>
			<h3>List of courses are as follows</h3>
			{
				data.length>0? data.map((item)=> <Course course={item} />):<div><p>"no data"</p></div>

			}
		</div>
		)
};

export default All;
