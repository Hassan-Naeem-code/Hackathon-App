import React, {useState, useEffect} from 'react';
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
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {signOut, fetchAllUsers,fetUserInfoSecond} from '../../../Store/actions/auth';
import {useDispatch, useSelector} from 'react-redux';

const AllUser = ({navigation}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [refreshingSecond,setRefreshingSecond] = useState(false);
  const wait = (time) => {
    setTimeout(() => {
      setRefreshing(false);
    }, time);
  };
  const waitSecond = (time) => {
    setTimeout(() => {
      setRefreshingSecond(false);
    }, time);
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchAllUsers(user.uid));
      }
    });
    wait(1200);
  }, []);
  const onRefreshSecond = React.useCallback(()=>{
    setRefreshingSecond(true);
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetUserInfoSecond(user.uid));
      }
    });
    waitSecond(1200);
  },[]);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetchAllUsers(user.uid));
      }
    });
  }, []);
  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(fetUserInfoSecond(user.uid));
      }
    });
  }, []);
  const getCurrentUsers = useSelector(({auth}) => {
    return auth.auth;
  });
  const getUsers = useSelector(({auth}) => {
    return auth.users;
  });
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
              <View style={styles.flex_5_center}>
                <Text style={styles.titleStyle}>Recruitement App</Text>
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
            {
              getCurrentUsers && getCurrentUsers.role !== 'student' ? (
                <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }>
                {getUsers && getUsers.length > 0
                  ? getUsers.map((item, index) => {
                      return (
                        <View style={styles.area_for_donor_card} key={index}>
                          <View style={styles.inner_view_under_second_view}>
                            <View style={styles.flex_2}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('UserDetail',{data:item});
                                }}>
                                <Image
                                  source={{uri: item.photo}}
                                  style={{
                                    width: '80%',
                                    height: 80,
                                    borderRadius: 100,
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles.flex_3}>
                              <View style={styles.flex_row}>
                                <View style={styles.flex_7}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      navigation.navigate('UserDetail',{data:item});
                                    }}>
                                    <Text style={styles.nameStyle}>
                                      {item.name}
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={styles.flex_row}>
                                <View style={styles.flex_7}>
                                  <Text style={styles.numberStyle}>
                                    <MaterialCommunityIcon
                                      name={'cellphone-iphone'}
                                      size={20}
                                      color={'red'}
                                    />{' '}
                                    Not Verified
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.flex_2_center}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('UserDetail',{data:item});
                                }}>
                                <Text style={styles.bloodStyle}>
                                  {item.address}{' '}
                                  <MaterialCommunityIcon
                                    name={'home-map-marker'}
                                    size={20}
                                    color={'#254670'}
                                  />
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    })
                  : null}
            </ScrollView>
              ) : (
                <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshingSecond} onRefresh={onRefreshSecond} />
              }>
                {getUsers && getUsers.length > 0
                  ? getUsers.map((item, index) => {
                      return (
                        <View style={styles.area_for_donor_card} key={index}>
                          <View style={styles.inner_view_under_second_view}>
                            <View style={styles.flex_2}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('UserDetail',{data:item});
                                }}>
                                <Image
                                  source={{uri: item.photo}}
                                  style={{
                                    width: '80%',
                                    height: 80,
                                    borderRadius: 100,
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={styles.flex_3}>
                              <View style={styles.flex_row}>
                                <View style={styles.flex_7}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      navigation.navigate('UserDetail',{data:item});
                                    }}>
                                    <Text style={styles.nameStyle}>
                                      {item.name}
                                    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                              <View style={styles.flex_row}>
                                <View style={styles.flex_7}>
                                  <Text style={styles.numberStyle}>
                                    <MaterialCommunityIcon
                                      name={'cellphone-iphone'}
                                      size={20}
                                      color={'red'}
                                    />{' '}
                                    Not Verified
                                  </Text>
                                </View>
                              </View>
                            </View>
                            <View style={styles.flex_2_center}>
                              <TouchableOpacity
                                onPress={() => {
                                  navigation.navigate('UserDetail',{data:item});
                                }}>
                                <Text style={styles.bloodStyle}>
                                  {item.address}{' '}
                                  <MaterialCommunityIcon
                                    name={'home-map-marker'}
                                    size={20}
                                    color={'#254670'}
                                  />
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    })
                  : null}
            </ScrollView>
              )
            }
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AllUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#254670',
  },
  numberStyle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#254670',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
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
  flex_2_center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
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
});
