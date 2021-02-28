import {RESTAURANT_FOOD_ADD,NOT_AUTHORISE_USER_DISHES,RESTAURANT_ORDERS,RESTAURANT_CART_ORDERS} from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function restaurantFoodAddProcess(food, navigation) {
  return async (dispatch) => {
    await firestore().collection('dishes').add(food);
    ToastAndroid.show('Food Dish Added Successfully', 2000);
    navigation.navigate('Home');
  };
}

export function fecthAllDishes(uid) {
  return async (dispatch) => {
    let dishItem = await firestore()
      .collection('dishes')
      .where('uid', '==', uid)
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: RESTAURANT_FOOD_ADD, payload: dish});
    });
  };
}

// export function removeDish(doc){
//   return async (dispatch)=>{
//     await firestore().collection('dishes').doc(doc).delete();
    
//   }
// }

export function notAuthouriseDishes(){
  return async (dispatch)=>{
    let dishItem = await firestore()
      .collection('dishes')
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: NOT_AUTHORISE_USER_DISHES, payload: dish});
    });
  }
}

export function fecthAllOrders(uid) {
  return async (dispatch) => {
    let dishItem = await firestore()
      .collection('singleorder')
      .where('uid', '==', uid)
      .get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.id = doc.id;
      dispatch({type: RESTAURANT_ORDERS, payload: dish});
    });
   
  };
}

export function fecthAllCarts(uid) {
  return async (dispatch) => {
    let dishItem = await firestore()
      .collection('order_Dishes')
      .where('uid','==',uid)
      .get();
      dishItem.forEach(async function (doc) {
      let orderData = await firestore()
        .collection('orders')
        .doc(doc.data().order_id)
        .get();
      let dish = doc.data();
      dish.id = doc.id;
      dish.order = orderData.data();
      dispatch({type: RESTAURANT_CART_ORDERS, payload: dish});
    });
   
  };
}


export function delete_A_Product(id,navigation){
  return async (dispatch)=>{
    await firestore().collection('dishes').doc(id).delete();
    ToastAndroid.show('Food Dish Deleted Successfully', 2000);
    navigation.navigate('RestaurantHome');
  }
}