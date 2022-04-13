import "./App.css";
import React from "react";
import { ProductsTable } from "./components/ProductsTable";
import { FormAddProduct } from "./components/FormAddProduct";
import { NotFound } from "./components/NotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route exact path="/" element={<ProductsTable />} />
					<Route exact path="/add" element={<FormAddProduct />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
