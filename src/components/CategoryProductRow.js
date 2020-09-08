import React, { Component } from "react";

class CategoryProductRow extends Component {
	render() {
		const { categoryName } = this.props;

		return (
			<tr>
				<th colSpan="2">{categoryName}</th>
			</tr>
		);
	}
}

export default CategoryProductRow;
