import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  View,
  TextInput,
  Text,
} from 'react-native';
import tw from '../../../tailwind';
import Products from './Products';
import {PRIMARY_COLOR} from '../../shared/constant';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeroSection from './HeroSection';
import Categories from './Categories';

const colors = ['#40043a', '#40043a', '#f25608', '#65389e', '#c2fffa'];
const Home = () => {
  const [heroIndex, setHeroIndex] = useState(0);
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors[heroIndex]} />
      <ScrollView style={tw`bg-gray-50`}>
        <View
          style={{...tw`w-full py-2 px-4`, backgroundColor: colors[heroIndex]}}>
          <View
            style={tw`bg-white flex-row border border-gray-400 rounded-md px-1 py-2 items-center`}>
            <Icon name="search" size={20} style={tw`text-gray-400`} />
            <TextInput style={tw` ml-2 w-11/12`} placeholder="Search" />
          </View>
        </View>
        <HeroSection onIndexChanged={setHeroIndex} />
        <View style={tw`bg-gray-50`}>
          <Text style={tw`text-center text-xl py-2`}>Just For You</Text>
          <Categories />
          <Products />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
