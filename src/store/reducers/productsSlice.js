import {createSlice} from '@reduxjs/toolkit';
import products from '../../asserts/data/productsData.json';
const init = {
  products: products,
};

const productSlice = createSlice({
  name: 'products',
  initialState: init,
  reducers: {
    addProduct: state => {
      state.products = products;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
