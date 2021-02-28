import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut} from '../../../Store/actions/auth';

const UserDetail = ({navigation, route}) => {
  const {data} = route.params;
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.container}>
        <View style={styles.second_view}>
          <View style={styles.inner_view_under_second_view}>
            <View style={{flex: 1}}></View>
            <View style={styles.image_view}>
              <Image
                source={{
                  uri:
                    'https://seeklogo.com/images/C/Campus-logo-8B4626EC2B-seeklogo.com.png',
                }}
                style={styles.main_image}
              />
            </View>
            <View style={{flex: 2}}></View>
          </View>
        </View>
        <View style={styles.centerContentStyle}>
          <View style={styles.main_view}>
            <View style={styles.inner_view_under_second_view_margin}>
              <View style={styles.flex_2_center}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AllUser');
                  }}>
                  <MaterialCommunityIcon
                    name={'keyboard-backspace'}
                    size={27}
                    color={'white'}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.flex_3_center}>
                <Text style={styles.titleStyle}>Recruitement App </Text>
              </View>
              <View style={styles.flex_2_center}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(signOut());
                  }}>
                  <Text style={styles.color_white}>
                    {' '}
                    {'  '}
                    <AntDesign name={'logout'} size={20} color={'white'} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <View style={styles.area_for_donor_card}>
                <View style={styles.container}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{
                        uri:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dPTEUEhAPyv79rL7fxnD33_6n6EB1aZUJA&usqp=CAU',
                      }}
                      style={styles.coverImage}
                    />
                  </View>
                  <View style={styles.profileImage}>
                    <Image
                      source={{
                        uri: data.photo,
                      }}
                      style={{width: 100, height: 100, borderRadius: 50}}
                    />
                  </View>
                </View>

                <View style={styles.area_for_donor_card_detail}>
                  <View style={styles.inner_view_under_second_view}>
                    <View style={styles.flex_2}>
                      <Image
                        source={{uri: data.photo}}
                        style={{width: '70%', height: 60, borderRadius: 100}}
                      />
                    </View>
                    <View style={styles.flex_3}>
                      <View style={styles.flex_row}>
                        <View style={styles.flex_7}>
                          <Text style={styles.nameStyle}>{data.name}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex_2_center}>
                      <Text style={styles.bloodStyle}>
                        <MaterialCommunityIcon
                          name={'home-map-marker'}
                          size={20}
                          color={'white'}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.area_for_donor_card_detail}>
                  <View style={styles.inner_view_under_second_view}>
                    <View style={styles.flex_2}>
                      <Image
                        source={{
                          uri:
                            'https://i.pinimg.com/originals/f0/a4/17/f0a4170e43fae6a84ff990b6df105199.png',
                        }}
                        style={{width: '70%', height: 60, borderRadius: 100}}
                      />
                    </View>
                    <View style={styles.flex_3}>
                      <View style={styles.flex_row}>
                        <View style={styles.flex_7}>
                          <Text style={styles.numberStyle}>
                            {data.address
                              ? data.address
                              : 'Address Not Verified'}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.flex_2_center}>
                      <Text style={styles.bloodStyle}>
                        <MaterialCommunityIcon
                          name={'home-map-marker'}
                          size={20}
                          color={'white'}
                        />
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default UserDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: 'white',
  },
  bloodStyle: {
    fontSize: 16,
    fontWeight: '900',
  },
  centerContentStyle: {
    flex: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  main_view: {
    flex: 3,
    backgroundColor: '#254670',
    elevation: 5,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  second_view: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner_view_under_second_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_view_under_second_view_margin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  area_for_donor_card: {
    backgroundColor: 'white',
    padding: 10,
  },
  area_for_donor_card_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#254670',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    marginVertical: 5,
  },
  empty_view: {
    flex: 2,
  },
  image_view: {
    flex: 3,
  },
  main_image: {
    width: '130%',
    height: 140,
    marginVertical: 10,
  },
  login_image: {
    width: '60%',
    height: 150,
  },
  w_100: {
    width: '100%',
  },
  btn: {
    backgroundColor: '#254670',
    borderRadius: 25,
    width: '50%',
    padding: 13,
    marginVertical: 15,
  },
  btn_text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
    textAlign: 'center',
  },
  route_text: {
    color: '#254670',
    fontSize: 19,
    fontWeight: 'bold',
  },
  color_white: {
    color: 'white',
    fontSize: 15,
    fontWeight: '800',
  },
  flex_5_center: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_3_center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex_2_start: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flex_2: {
    flex: 2,
  },
  flex_3: {
    flex: 3,
  },
  flex_7: {
    flex: 7,
  },
  flex_row: {
    flexDirection: 'row',
  },
  firstArea: {
    flex: 1,
    backgroundColor: 'black',
  },
  secondArea: {
    flex: 5,
    backgroundColor: '#FFFEDF',
  },
  innerAreaOfSecond: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  thirdArea: {
    flex: 1,
    backgroundColor: 'green',
  },
  imageContainer: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 150,
    borderRadius: 15,
  },
  profileImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
