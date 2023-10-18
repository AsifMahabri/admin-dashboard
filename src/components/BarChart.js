import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';

const Bars = () => {

	// Sample data
	const data = [
		{ name: 'Jan', students: 600 },
		{ name: 'Feb', students: 500 },
		{ name: 'Mar', students: 900 },
		{ name: 'Apr', students: 700 },
        { name: 'May', students: 800 },
        { name: 'Jun', students: 400 },
        { name: 'Jul', students: 800 },
        { name: 'Aug', students: 1000 },
        { name: 'Sep', students: 900 },
        { name: 'Oct', students: 700 },
        { name: 'Nov', students: 700 },
        { name: 'Dec', students: 800 },

	];


	return (
		<BarChart width={650} height={300} data={data}>
			<CartesianGrid/>
			<XAxis dataKey="name" />
			<YAxis />
            <Bar dataKey="students" fill="green" />
		</BarChart>
	);
}

export default Bars;
