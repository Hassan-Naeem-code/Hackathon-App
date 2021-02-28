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
// import {add} from 'react-native-reanimated';
import {useDispatch} from 'react-redux';
import {signUpUserEmailPassword} from '../../../Store/actions/auth';
import {Picker} from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photo,setPhoto] = useState('https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png');
  const [role,setRole] = useState('Select A Value');
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
        name,
        address,
        email,
        role,
        password,
        photo
      };
      dispatch(signUpUserEmailPassword(user,navigation));
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
            value={name}
            onChangeText={(text) => {
              setName(text);
            }}
            style={styles.textBox}
            placeholder="Enter Your Full Name"
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>

      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}></View>
        <View style={styles.textFieldArea}>
          <TextInput
            style={styles.textBox}
            value={address}
            onChangeText={(text) => {
              setAddress(text);
            }}
            placeholder="Enter Your Current Address"
          />
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}></View>
        <View style={styles.textFieldArea}>
          <Picker
            selectedValue={role}
            style={{height: 50, width:"100%",color:'lightgray',textAlign:'center'}}
            onValueChange={(itemValue, itemIndex) =>
              setRole(itemValue)
            }>
            <Picker.Item label="Select A Value" value="" />
            <Picker.Item label="Student" value="student"/>
            <Picker.Item label="Company Recruiter" value="company recruiter" />
          </Picker>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <View style={{flex: 1}}></View>
        <View style={styles.textFieldArea}>
          <TextInput
            style={styles.textBox}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="Enter Your Current Email"
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
              SIGN UP
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
              navigation.navigate('Login');
            }}>
            <Text style={styles.loginTextBefore}>Have An Account Login.</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
};
export default Signup;

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
