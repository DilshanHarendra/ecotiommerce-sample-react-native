import {combineReducers} from 'redux';

import productsSlice from './productsSlice';

const rootReducer = combineReducers({
  products: productsSlice,
});
export default rootReducer;
