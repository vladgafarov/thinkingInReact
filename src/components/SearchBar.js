import React from "react";

const SearchBar = (props) => {
	const handleInput = (e) => {
		props.onInputChange(e.target.value);
	};

	const handleCheckbox = (e) => {
		props.onCheckboxChange(e.target.checked);
	};

	const { inStock } = props;
	return (
		<div>
			<input type="text" placeholder="Search..." onChange={handleInput} />
			<br />
			<input
				type="checkbox"
				checked={inStock}
				onChange={handleCheckbox}
			/>{" "}
			Only show products in stock
		</div>
	);
};

export default SearchBar;
