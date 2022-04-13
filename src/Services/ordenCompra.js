export const getProducts = async () => {
	const token =
		"eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYyMDY2Mjk4NjIwM30.lhfzSXW9_TC67SdDKyDbMOYiYsKuSk6bG6XDE1wz2OL4Tq0Og9NbLMhb0LUtmrgzfWiTrqAFfnPldd8QzWvgVQ";
	try {
		const response = await fetch(
			"https://eshop-deve.herokuapp.com/api/v2/orders",
			{
				method: "GET",
				headers: {
					"Content-type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			}
		);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			return console.log("Respuesta de red OK pero respuesta HTTP no OK");
		}
	} catch (error) {
		console.error("There was an error!", error);
		throw error;
	}
};
