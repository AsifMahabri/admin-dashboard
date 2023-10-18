
import React from "react";

// Example of a data array that
// you might receive from an API
const data = [
	{ "Product": "Abstract 3D", Stock: "32 in stock", Price: "$ 45.99", "Total": 20},
	{ "Product": "Sarphens Illustration", Stock: "32 in stock", Price: "$ 45.99", "Total": 20},
	
]

function Table() {
	return (
        <>
        
        
		<div>
        
			<table>
                <div><b>Product Sell</b> <div style={{float:"right"}} className="search-box">
                                <i class="material-icons"></i>
                                <input type="text" class="form-control" placeholder="Search&hellip;"/>
                            </div></div>
				<tr>
					<th>Product </th>
					<th>Stock</th>
                    <th>Price</th>
					<th>Total Sales</th>
				</tr>
				{data.map((val, key) => {
					return (
                       <> 
						<tr key={key}>
							<td>{val.Product}</td>
							<td>{val.Stock}</td>
							<td>{val.Price}</td>
                            <td>{val.Total}</td>
						</tr>
                        </>
					)
				})}
			</table>
		</div>
        </>
	);
}

export default Table;
