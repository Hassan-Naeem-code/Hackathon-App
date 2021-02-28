import React, {useState,useEffect} from 'react';
// import {Alert} from 'react-native';
// import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import Decision from '../screens/decision';
import Signup from '../screens/Auth/signUp';
import Login from '../screens/Auth/login';
import Home from '../screens/decision';
import AdminHome from '../screens/AdminHome/admin_home';
import AllUser from '../screens/RoleCompanyStudent/allUser';
import UserDetail from '../screens/RoleCompanyStudent/userDetail';
import UserProfile from '../screens/RoleCompanyStudent/profile/userProfile';
import EditProfile from '../screens/RoleCompanyStudent/profile/editProfile';

import Student from '../screens/AdminHome/student';
import Company from '../screens/AdminHome/company';
import StudentDetail from '../screens/AdminHome/studentDetail';
import CompanyDetail from '../screens/AdminHome/companyDetail';
import {fetchUserInfo} from '../../Store/actions/auth';

const Stack = createStackNavigator();
const {Screen, Navigator} = Stack;
const Navigation = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchUserInfo(user.uid));
      }
    });
  }, []);
  const getData = useSelector(({auth}) => {
    return auth.auth;
  });
  return (
    <NavigationContainer>
      {getData && getData !== null ? (
        <Navigator>
          <Screen
            name="Decision"
            component={Decision}
            options={{headerShown: false}}
          />
          <Screen name="Home" component={Home} options={{headerShown: false}} />
          <Screen name="AdminHome" component={AdminHome} options={{headerShown: false}} />
          <Screen name="AllUser" component={AllUser} options={{headerShown: false}} />
          <Screen name="UserDetail" component={UserDetail} options={{headerShown: false}} />
          <Screen name="UserProfile" component={UserProfile} options={{headerShown: false}} />
          <Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />

          <Screen name="Student" component={Student} options={{headerShown: false}} />
          <Screen name="Company" component={Company} options={{headerShown: false}} />
          <Screen name="StudentDetail" component={StudentDetail} options={{headerShown: false}} />
          <Screen name="CompanyDetail" component={CompanyDetail} options={{headerShown: false}} />
        </Navigator>
      ) : (
        <Navigator>
          <Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
        </Navigator>
      )}
    </NavigationContainer>
  );
};

export default Navigation;
