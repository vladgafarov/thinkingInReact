import React from "react";
import ProductRow from "./ProductRow";
import CategoryProductRow from "./CategoryProductRow";
import PRODUCTS from "../samples";

const TableProducts = (props) => {
	const { filteredText, isStocked } = props;
	const rows = [];
	let lastCategory = null;

	PRODUCTS.forEach((product) => {
		const { category, price, name, stocked } = product;
		if (name.toLowerCase().indexOf(filteredText.toLowerCase()) === -1) {
			return;
		}

		if (isStocked === true && stocked === false) {
			return;
		}
		if (category !== lastCategory) {
			rows.push(
				<CategoryProductRow categoryName={category} key={category} />
			);
		}
		rows.push(
			<ProductRow name={name} price={price} key={name} stocked={stocked} />
		);

		lastCategory = category;
	});
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
};

export default TableProducts;
