import React from 'react';
import { Link } from 'react-router-dom'

function RenderingArrayOfObjects(){
const data=[
	{
		"Name":"John",
		"Age":"26",
		"Course":"MERN",
		"Batch":"May",
		"Change":"Edit"

	},
	{
		"Name":"Doe",
		"Age":"27",
		"Course":"MERN",
		"Batch":"June",
		"Change":"Edit"

	},
	{
		"Name":"Baraar",
		"Age":"30",
		"Course":"MERN",
		"Batch":"July",
		"Change":"Edit"

	},
	{
		"Name":"Biden",
		"Age":"29",
		"Course":"MERN",
		"Batch":"Sepetember",
		"Change":"Edit"

	},
	{
		"Name":"Criest",
		"Age":"23",
		"Course":"MERN",
		"Batch":"Octobor",
		"Change":"Edit"
		
	},
	{
		"Name":"Elen",
		"Age":"25",
		"Course":"MERN",
		"Batch":"November",
		"Change":"Edit"
		
	}


]
const tableRows=data.map(
	(element)=>{
		return(
			<tr>
			<td>{element.Name}</td>
			<td>{element.Age}</td>
			<td>{element.Course}</td>
			<td>{element.Batch}</td>
			<td><Link to="/edit">{element.Change}</Link></td>
			</tr>
		)
	}
)
return(
	<div id='tableHead'>
		<table >
			<tr style={{fontSize : "1.3em", fontWeight:"bolder"}}>	
				<td styele={{textAlign:"end"}}> Name</td>
				<td styele={{textAlign:"end"}}>Age</td>
				<td styele={{textAlign:"end"}}>Course</td>
				<td styele={{textAlign:"end"}}>Batch</td>
				<td styele={{textAlign:"end"}}>Change</td>
			</tr>
			<tbody>
			{tableRows}
			</tbody>
		</table>	
			
	</div>
)
}


function Table1() {
return (
	<div>
		<RenderingArrayOfObjects />
	</div>
);
}

export default Table1;