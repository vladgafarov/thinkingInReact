import React, { Component } from "react";

class SearchBar extends Component {
	handleCheckbox = (e) => {
		this.props.onCheckboxChange(e.target.checked);
	};

	render() {
		const { inStock } = this.props;
		return (
			<div>
				<input type="text" placeholder="Search..." /> <br />
				<input
					type="checkbox"
					checked={inStock}
					onChange={this.handleCheckbox}
				/>{" "}
				Only show products in stock
			</div>
		);
	}
}

export default SearchBar;
