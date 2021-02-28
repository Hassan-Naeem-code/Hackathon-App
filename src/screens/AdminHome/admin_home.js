import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import StudentCom from './student';
import Compnay from './company';
import StudentDetail from './studentDetail';
import CompanyDetail from './companyDetail';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const {Screen, Navigator} = Tab;

const Company = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Compnay"
        component={Compnay}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CompanyDetail"
        component={CompanyDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Student = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StudentCom"
        component={StudentCom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StudentDetail"
        component={StudentDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const adminHome = ()=> {
    return (
        <Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Company') {
          iconName = focused ? 'home' : 'home';
        }  else if (route.name === 'Student') {
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
    <Screen name="Company" component={Company} />
    <Screen name="Student" component={Student} />
  </Navigator>
    )
}
export default adminHome;