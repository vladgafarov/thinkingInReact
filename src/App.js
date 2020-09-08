import React, { Component } from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import TableProducts from "./components/TableProducts";

class App extends Component {
	state = {
		isStocked: false
	};

	handleCheckbox = (isStocked) => {
		this.setState({
			isStocked
		});
	};

	render() {
		const { isStocked } = this.state;

		return (
			<div className="App">
				<SearchBar
					inStock={isStocked}
					onCheckboxChange={this.handleCheckbox}
				/>
				<TableProducts />
			</div>
		);
	}
}

export default App;
