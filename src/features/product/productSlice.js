import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../Services/ordenCompra";

const initialState = {
	products: [],
	loading: false,
};

export const thunkProducts = createAsyncThunk(
	"products/fetchAsyncProducts",
	async () => {
		const response = await getProducts();
		const prod = response.orders.map((e) => e.items[0]);
		return prod;
	}
);

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProduct: (state, action) => {
			state.products.push(action.payload);
		},
	},
	extraReducers: {
		[thunkProducts.pending]: (state) => {
			state.loading = true;
		},
		[thunkProducts.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.products = payload;
		},
		[thunkProducts.rejected]: (state) => {
			state.loading = false;
		},
	},
});

export const { addProduct } = productsSlice.actions;

export const productReducer = productsSlice.reducer;
