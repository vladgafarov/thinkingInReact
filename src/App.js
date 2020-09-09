import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import TableProducts from "./components/TableProducts";

class App extends Component {
	state = {
		filteredText: "",
		isStocked: false
	};

	handleInput = (filteredText) => {
		this.setState({
			filteredText
		});
	};

	handleCheckbox = (isStocked) => {
		this.setState({
			isStocked
		});
	};

	render() {
		const { filteredText, isStocked } = this.state;

		return (
			<div className="App">
				<SearchBar
					onInputChange={this.handleInput}
					inStock={isStocked}
					onCheckboxChange={this.handleCheckbox}
				/>
				<TableProducts filteredText={filteredText} isStocked={isStocked} />
			</div>
		);
	}
}

export default App;
