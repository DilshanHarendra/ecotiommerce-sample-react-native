import {createSlice} from '@reduxjs/toolkit';
const init = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState: init,
  reducers: {
    addProduct: state => {
      state.products.push('new product');
    },
  },
});

// Action creators are generated for each case reducer function
export const {addProduct} = productSlice.actions;

export default productSlice.reducer;
