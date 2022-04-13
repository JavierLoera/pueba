import React, { useEffect } from "react";
import "./ProductsTable.css";
import { useSelector, useDispatch } from "react-redux";
import { thunkProducts } from "../features/product/productSlice";
import { RowTable } from "./RowTable";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function ProductsTable() {
	const { products, loading } = useSelector((state) => state.product);
	const dispatch = useDispatch();

	console.log(products);

	const MySwal = withReactContent(Swal);

	const alerta = () => {
		MySwal.fire({
			title: "Transaccion Exitosa",
			text: "Genial, tu pago se ha realizado con exito",
			icon: "success",
		});
	};

	useEffect(() => {
		dispatch(thunkProducts());
	}, [dispatch]);

	console.log(products);

	const handlePay = () => {
		alerta();
	};

	return (
		<div>
			<Link to="/add">
				<Button variant="contained" color="success">
					Añadir Producto
				</Button>
			</Link>

			<Button
				style={{ float: "right" }}
				onClick={handlePay}
				variant="contained"
				color="success"
			>
				Pagar
			</Button>
			<div className="container_table">
				{loading ? (
					<CircularProgress />
				) : (
					<TableContainer component={Paper}>
						<Table aria-label="collapsible table">
							<TableHead>
								<TableRow>
									<TableCell></TableCell>
									<TableCell>SKU</TableCell>
									<TableCell>Name</TableCell>
									<TableCell align="right">Quantity</TableCell>
									<TableCell align="right">Price</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{products.map((product) => (
									<RowTable key={product.id} product={product} />
								))}
							</TableBody>
						</Table>
					</TableContainer>
				)}
			</div>
		</div>
	);
}
