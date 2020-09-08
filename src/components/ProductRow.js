import React, { Component } from "react";

class ProductRow extends Component {
	render() {
		const { price, stocked } = this.props;
		let { name } = this.props;
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
	}
}

export default ProductRow;
