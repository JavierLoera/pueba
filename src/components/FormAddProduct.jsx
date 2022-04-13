import React from "react";
import "./FormAddProduct.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addProduct } from "../features/product/productSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const FormAddProduct = () => {
	const dispatch = useDispatch();

	const MySwal = withReactContent(Swal);

	const alerta = () => {
		MySwal.fire({
			title: "Añadido",
			text: "Un articulo se ha añadido con exito",
			icon: "success",
		});
	};

	const formik = useFormik({
		initialValues: {
			sku: "",
			name: "",
			quantity: "",
			price: "",
		},
		onSubmit: (values) => {
			alerta();
			dispatch(addProduct(values));
		},
		validationSchema: Yup.object({
			sku: Yup.string("Debe ser un string").required("Requerido"),
			name: Yup.string("Debe ser un string").required("Requerido"),
			quantity: Yup.number("Debe ser un número").required("Requerido"),
			price: Yup.number("Debe ser un número").required("Requerido"),
		}),
	});

	return (
		<div className="container">
			<form onSubmit={formik.handleSubmit} className="container-form">
				<TextField
					fullWidth
					name="sku"
					type="Text"
					label="SKU"
					value={formik.values.SKU}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.SKU && formik.errors.SKU ? (
					<p>{formik.errors.SKU}</p>
				) : null}
				<TextField
					fullWidth
					name="name"
					type="Text"
					label="Name"
					value={formik.values.Name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.Name && formik.errors.Name ? (
					<p>{formik.errors.SKU}</p>
				) : null}
				<TextField
					fullWidth
					name="quantity"
					type="Number"
					label="Quantity"
					value={formik.values.Quantity}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.Quantity && formik.errors.Quantity ? (
					<p>{formik.errors.SKU}</p>
				) : null}
				<TextField
					fullWidth
					name="price"
					type="Number"
					label="Price"
					value={formik.values.Price}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.Price && formik.errors.Price ? (
					<p>{formik.errors.SKU}</p>
				) : null}
				<Button type="submit" variant="contained">
					Añadir
				</Button>
			</form>

			<Link to="/">
				<Button className="btn_volver" variant="contained">
					Volver
				</Button>
			</Link>
		</div>
	);
};
