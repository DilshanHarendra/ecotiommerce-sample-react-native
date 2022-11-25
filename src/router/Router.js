import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';
import Cart from '../screens/cart/Cart';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text} from 'react-native';

export default function Router() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            } else if (route.name === 'Account') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Message') {
              iconName = focused
                ? 'chatbubble-ellipses'
                : 'chatbubble-ellipses-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Message"
          component={Cart}
          options={{tabBarBadge: 3}}
        />
        <Tab.Screen name="Cart" component={Cart} options={{tabBarBadge: 3}} />
        <Tab.Screen name="Account" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
