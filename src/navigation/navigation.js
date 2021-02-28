import React from 'react';
// import {Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;
const Navigation = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
