import React from 'react';
import {Text, View} from 'react-native';
import tw from '../../../tailwind';
const Categories = () => {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  return (
    <View style={tw`w-full flex-row flex-wrap bg-white p-2`}>
      {categories.slice(0, 5).map(category => (
        <View style={tw`px-1 py-2`}>
          <Text>{category} |</Text>
        </View>
      ))}
    </View>
  );
};
export default Categories;
