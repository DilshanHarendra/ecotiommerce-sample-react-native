import React from 'react';
import {View, Text} from 'react-native';
import tw from '../../../tailwind';

function Splash() {
  return (
    <View style={tw`bg-white`}>
      <Text style={tw`text-center text-3xl mt-10`}>App Name here</Text>
    </View>
  );
}
export default Splash;
