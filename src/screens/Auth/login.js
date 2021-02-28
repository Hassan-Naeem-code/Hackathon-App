import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../Store/actions/auth';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidate, setCheckValidate] = useState(false);
  const passwordCheck = (text) => {
    if (password !== '') {
      setCheckValidate(true);
    } else {
      setCheckValidate(false);
    }
    setPassword(text);
  };
  const LoginUser = () => {
    if (email == '' || (password == '' && email && password == '')) {
      ToastAndroid.show('Please Fill The Required Fields First', 2000);
    } else {
      let user = {
        email,
        password,
      };
      dispatch(loginUser(user));
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}></View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://seeklogo.com/images/C/Campus-logo-8B4626EC2B-seeklogo.com.png',
            }}
            style={styles.logoImage}
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}></View>
        <View style={styles.logoSlogan}>
          <Text style={styles.logoSloganText}>Recrutement System</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}></View>
        <View style={styles.textFieldArea}>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textBox}
            placeholder="Enter Your Email"
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}></View>
        <View style={styles.textFieldArea}>
          <TextInput
            style={styles.textBox}
            value={password}
            onChangeText={passwordCheck}
            placeholder="Enter Your Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}></View>
        <View
          style={checkValidate ? styles.loginBtnAfter : styles.loginBtnBefore}>
          <TouchableOpacity style={styles.p15} onPress={LoginUser}>
            <Text
              style={
                checkValidate ? styles.loginTextAfter : styles.loginTextBefore
              }>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 1}}>
        <View style={{flex: 1}}></View>
        <View style={styles.signUpText}>
          <TouchableOpacity
            style={styles.p15}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            <Text style={styles.loginTextBefore}>
              Don't Have An Account Sign Up.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  logoImage: {
    width: 180,
    height: 90,
  },
  textFieldArea: {
    flex: 5,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  textBox: {
    borderRadius: 50,
    textAlign: 'center',
    color: '#0078FF',
  },
  p15: {
    padding: 15,
  },
  logoSlogan: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  logoSloganText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#0078FF',
  },
  signUpText: {
    flex: 5,
    borderRadius: 40,
  },
  loginBtnBefore: {
    flex: 5,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  loginBtnAfter: {
    flex: 5,
    backgroundColor: '#0078FF',
    borderRadius: 40,
  },
  loginTextBefore: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0078FF',
    textAlign: 'center',
  },
  loginTextAfter: {
    fontSize: 18,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
});
