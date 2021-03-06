import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AllUser from './RoleCompanyStudent/allUser';
import UserDetail from './RoleCompanyStudent/userDetail';
import UserProfile from './RoleCompanyStudent/profile/userProfile';
import EditProfile from './RoleCompanyStudent/profile/editProfile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const {Screen, Navigator} = Tab;

const Homepage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllUser"
        component={AllUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserDetail"
        component={UserDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const User = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Homepage') {
          iconName = focused ? 'home' : 'home';
        }  else if (route.name === 'User') {
          iconName = focused ? 'user' : 'user-o';
        }

        // You can return any component that you like here!
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#254670',
      inactiveTintColor: '#000',
      tabStyle: {
        backgroundColor: 'white',
        borderColor: 'white',
      },
    }}>
    <Screen name="Homepage" component={Homepage} />
    <Screen name="User" component={User} />
  </Navigator>
  );
};
export default Home;
