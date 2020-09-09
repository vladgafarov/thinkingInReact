import React, { Component } from "react";

class SearchBar extends Component {
	handleInput = (e) => {
		this.props.onInputChange(e.target.value);
	};

	handleCheckbox = (e) => {
		this.props.onCheckboxChange(e.target.checked);
	};

	render() {
		const { inStock } = this.props;
		return (
			<div>
				<input
					type="text"
					placeholder="Search..."
					onChange={this.handleInput}
				/>
				<br />
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
