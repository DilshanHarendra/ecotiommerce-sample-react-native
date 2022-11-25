import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from '../../tailwind';

const SingleProduct = ({product}) => {
  return (
    <View key={product.id} style={tw`bg-white m-1 w-44 rounded-md`}>
      <Image
        source={{uri: product.image}}
        style={tw`w-full h-50 object-cover`}
      />
      <View style={tw`p-2`}>
        <Text lineBreakMode={true} numberOfLines={2}>
          {product.title}
        </Text>
        <View style={tw`mt-2 `}>
          {product.rating && (
            <View style={tw`flex-row items-center`}>
              <Icon name="star" size={15} style={tw`text-yellow-400`} />
              <Text style={tw`ml-1  text-gray-400`}>
                {product.rating?.rate}/5 ({product.rating.count})
              </Text>
            </View>
          )}
        </View>
        <Text style={tw`text-red-500 mt-1 font-semibold`}>
          Rs {product.price}
        </Text>
      </View>
    </View>
  );
};
export default SingleProduct;
