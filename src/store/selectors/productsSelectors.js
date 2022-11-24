import {get} from 'lodash';
export const productsSelector = state => get(state, 'products.products', []);
