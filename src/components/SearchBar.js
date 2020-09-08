import React, { Component } from "react";

class SearchBar extends Component {
	render() {
		return (
			<div>
				<input type="text" placeholder="Search..." /> <br />
				<input type="checkbox" /> Only show products in stock
			</div>
		);
	}
}

export default SearchBar;
