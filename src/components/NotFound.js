import React from "react";
import "./NotFound.css";
import img_404 from "../img/Page_not_found.png";

export function NotFound() {
	return (
		<div className="container">
			<img alt="404 not found" src={img_404} />
			<h3>No se encontro la pagína</h3>
		</div>
	);
}
