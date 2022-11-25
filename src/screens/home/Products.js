import React from 'react';
import {View} from 'react-native';
import tw from '../../../tailwind';
import {useSelector} from 'react-redux';
import {productsSelector} from '../../store/selectors/productsSelectors';
import SingleProduct from '../../components/SingleProduct';

const Products = () => {
  const products = useSelector(productsSelector);
  return (
    <View style={tw`w-full flex-row flex-wrap bg-gray-100 p-2 pt-1`}>
      {products.map(product => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </View>
  );
};
export default Products;
