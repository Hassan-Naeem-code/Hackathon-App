import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';
// import {GoogleSignin} from '@react-native-community/google-signin';
import {
  USER_REGISTERED,
  USER_LOGGED_OUT,
  UPDATE_USER,
} from '../constants/actiontypes';
import {ToastAndroid} from 'react-native';

// ...

// Attempt a login using the Facebook login dialog asking for default permissions.

// export function loginWithFacebook() {
//   return async (dispatch) => {
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);

//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }

//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }

//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(
//       data.accessToken,
//     );

//     // Sign-in the user with the credential
//     auth()
//       .signInWithCredential(facebookCredential)
//       .then((success) => {
//         let user = {
//           name: success.user.displayName,
//           email: success.user.email,
//           pic: success.user.photoURL,
//           uid: success.user.uid,
//         };
//         firestore()
//           .collection('users')
//           .add(user)
//           .then((doc) => {
//             ToastAndroid.show('Successfully Signed Up...', 2000);
//             dispatch({
//               type: USER_REGISTERED,
//               payload: user,
//             });
//           })
//           .catch((error) => {
//             ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
//           });
//       })
//       .catch((error) => {
//         console.log('Error==>', error);
//       });
//   };
// }

// export function loginUserWithFacebook() {
//   return async (dispatch) => {
//     const result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);

//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }

//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();

//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }

//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(
//       data.accessToken,
//     );

//     // Sign-in the user with the credential
//     auth()
//       .signInWithCredential(facebookCredential)
//       .then((success) => {
//         ToastAndroid.show('Successfully Signed In...', 2000);
//       })
//       .catch((error) => {
//         ToastAndroid.show('Unsuccessfull Signed In...', 2000);
//       });
//   };
// }

// export function loginWithGoogle() {
//   return async (dispatch) => {
//     // Get the users ID token
//     const {idToken} = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     auth()
//       .signInWithCredential(googleCredential)
//       .then((success) => {
//         let user = {
//           name: success.user.displayName,
//           email: success.user.email,
//           pic: success.user.photoURL,
//           uid: success.user.uid,
//         };
//         firestore()
//           .collection('users')
//           .add(user)
//           .then((doc) => {
//             ToastAndroid.show('Successfully Signed Up...', 2000);
//             dispatch({
//               type: USER_REGISTERED,
//               payload: user,
//             });
//           })
//           .catch((error) => {
//             ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
//           });
//         console.log('Success', success);
//       })
//       .catch((error) => {
//         console.log('Error==>', error);
//       });
//   };
// }

// export function loginUserWithGoogle() {
//   return async (dispatch) => {
//     // Get the users ID token
//     const {idToken} = await GoogleSignin.signIn();

//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//     // Sign-in the user with the credential
//     auth()
//       .signInWithCredential(googleCredential)
//       .then((success) => {
//         ToastAndroid.show('Successfully Signed In...', 2000);
//       })
//       .catch((error) => {
//         ToastAndroid.show('Unsuccessfull Signed In...', 2000);
//       });
//   };
// }

export function signUpUserEmailPassword(user, navigation) {
  return (dispatch) => {
    auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        delete user.password;
        user.uid = success.user.uid;
        firestore()
          .collection('users')
          .add(user)
          .then((doc) => {
            ToastAndroid.show('Successfully Signed Up...', 2000);
            dispatch({
              type: USER_REGISTERED,
              payload: user,
            });
            navigation.navigate('Home');
          })
          .catch((error) => {
            ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
          });
      })

      .catch((error) => {});
  };
}

// export function signUpRestaurantEmailPassword(restaurant) {
//   return (dispatch) => {
//     auth()
//       .createUserWithEmailAndPassword(restaurant.email, restaurant.password)
//       .then((success) => {
//         delete restaurant.password;
//         restaurant.uid = success.user.uid;
//         firestore()
//           .collection('restaurant')
//           .add(restaurant)
//           .then((doc) => {
//             ToastAndroid.show('Successfully Signed Up...', 2000);
//             dispatch({
//               type: USER_REGISTERED,
//               payload: user,
//             });
//           })
//           .catch((error) => {
//             ToastAndroid.show('Unsuccessfull Signed Up...', 2000);
//           });
//       })

//       .catch((error) => {});
//   };
// }

export function logInUserEmailPassword(user, navigation) {
  return (dispatch) => {
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((success) => {
        ToastAndroid.show('Successfully Signed In...', 2000);
        navigation.navigate('Home');
      })
      .catch((error) => {
        ToastAndroid.show('Unsuccessfull Signed In...', 2000);
      });
  };
}

export function forgotPasswordEmailSubmission(email) {
  return (dispatch) => {
    auth()
      .sendPasswordResetEmail(email)
      .then((success) => {
        ToastAndroid.show('Successfull Attempt', 2000);
      })
      .catch((error) => {
        ToastAndroid.show('UnSuccessfull Attempt', 2000);
      });
  };
}

export function signOut(navigation) {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({
          type: USER_LOGGED_OUT,
        });
      });
    ToastAndroid.show('User Sign Out Successfully', 2000);
    navigation.navigate('Login', {role: 'Customer'});
    console.log('Navigation we get here is', navigation);
  };
}

export function signOutRestaurant(navigation) {
  return (dispatch) => {
    auth()
      .signOut()
      .then(() => {
        dispatch({
          type: USER_LOGGED_OUT,
        });
      });
    ToastAndroid.show('Restaurant Sign Out Successfully', 2000);
    navigation.navigate('Login', {role: 'Restaurant'});
  };
}

export function fetchUserInfo(uid) {
  return async (dispatch) => {
    let userFound = await firestore()
      .collection('users')
      .where('uid', '==', uid)
      .get();
    userFound.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: USER_REGISTERED, payload: dish});
    });
  };
}

export function updateCurrentUserInfo(userInfo, navigation) {
  return async (dispatch) => {
    await firestore().collection('users').doc(userInfo.docid).set({
      contactNumber: userInfo.contactNumber,
      email: userInfo.email,
      location: userInfo.location,
      restaurantname: userInfo.restaurantname,
      typeRes: userInfo.restaurantType,
      coverImage: userInfo.coverImage,
      profileImage: userInfo.profileImage,
      id: userInfo.docid,
      uid: userInfo.uid,
    });
    dispatch({
      type: USER_REGISTERED,
      payload: userInfo,
    });
    ToastAndroid.show('User Profile Update Successfully', 2000);
    navigation.navigate('RestaurantProfile');
  };
}

export function updateCurrentUserInfoCustomer(userInfo, navigation) {
  return async (dispatch) => {
    await firestore().collection('users').doc(userInfo.id).set({
      phNumber: userInfo.number,
      email: userInfo.email,
      address: userInfo.address,
      fname: userInfo.fname,
      lname: userInfo.lname,
      roles: 'Customer',
      id: userInfo.id,
      uid: userInfo.uid,
      coverImage: userInfo.coverImage,
      profileImage: userInfo.profileImage,
    });
    ToastAndroid.show('User Profile Update Successfully', 2000);
    navigation.navigate('UserProfile');
  };
}
