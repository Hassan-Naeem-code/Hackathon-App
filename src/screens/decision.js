import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import Home from './Home';
import AdminHome from '../screens/AdminHome/admin_home';

const Decision = ({navigation}) => {
  const getData = useSelector(({auth}) => {
    return auth.auth;
  });
  console.log('Data is ', getData);
  return (
    <View style={{flex:1}}>
      {getData || getData == null || getData.role == 'company' || getData.role == 'student'
        ? <Home />
        : <AdminHome />}
    </View>
  );
};
export default Decision;
