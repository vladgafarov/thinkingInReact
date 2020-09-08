import React from "react";
import "./styles.css";
import SearchBar from "./components/SearchBar";
import TableProducts from "./components/TableProducts";

const App = () => {
	return (
		<div className="App">
			<SearchBar />
			<TableProducts />
		</div>
	);
};

export default App;
