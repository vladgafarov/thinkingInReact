import React from "react";

const CategoryProductRow = (props) => {
	return (
		<tr>
			<th colSpan="2">{props.categoryName}</th>
		</tr>
	);
};

export default CategoryProductRow;
