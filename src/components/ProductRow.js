import React from "react";

const ProductRow = (props) => {
	const { price, stocked } = props;
	let { name } = props;
	name = stocked ? (
		name
	) : (
		<span style={{ textDecoration: "line-through" }}> {name}</span>
	);

	return (
		<tr>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	);
};

export default ProductRow;
