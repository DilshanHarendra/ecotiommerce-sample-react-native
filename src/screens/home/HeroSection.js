import React from 'react';
import Swiper from 'react-native-swiper';
import {View, Image, Text} from 'react-native';
import tw from '../../../tailwind';
import heroImage1 from '../../asserts/images/heroImage1.jpg';
import heroImage2 from '../../asserts/images/heroImage2.jpg';
import heroImage3 from '../../asserts/images/heroImage3.png';
import heroImage4 from '../../asserts/images/heroImage4.png';
import heroImage5 from '../../asserts/images/heroImage5.png';
const HeroSection = ({onIndexChanged}) => {
  return (
    <View style={tw`h-40`}>
      <Swiper
        loop
        autoplay
        dotColor="white"
        activeDot={
          <View
            style={{
              backgroundColor: 'white',
              width: 20,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        showsButtons={false}
        onIndexChanged={onIndexChanged}
        autoplayTimeout={4}>
        {[heroImage1, heroImage2, heroImage3, heroImage4, heroImage5].map(
          item => (
            <View>
              <Image style={tw`w-full h-36 object-cover`} source={item} />
            </View>
          ),
        )}
      </Swiper>
    </View>
  );
};
export default HeroSection;
