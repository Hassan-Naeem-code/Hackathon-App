import {
  // RESTAURANT_FOOD_ADD,
  // NOT_AUTHORISE_USER_DISHES,
  WIHSLIST_ADDITION,
  WISHLISHT_DELETION,
  ADD_TO_CART,
  MINUS_FROM_CART,
  DELETE_FROM_CART,
  DELETE_THE_CART,
} from '../constants/actiontypes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';

export function customerOrder(order, navigation) {
  return (dispatch) => {
    firestore()
      .collection('singleorder')
      .add(order)
      .then(() => {
        ToastAndroid.show('Order Place Successfully', 2000);
        navigation.navigate('CheckStatus', {time: order.deliveryTime});
      })
      .catch(() => {
        ToastAndroid.show('Order Place UnSuccessfully', 2000);
      });
  };
}

export function addToWishLish(product) {
  return async (dispatch) => {
    await firestore().collection('wishlists').add(product);
    let dishItem = await firestore().collection('wishlists').get();
    dishItem.forEach(function (doc) {
      let dish = doc.data();
      dish.itemDoc = doc.id;
      dispatch({
        type: WIHSLIST_ADDITION,
        payload: dish,
      });
    });

    ToastAndroid.show('Wishlist Added Successfully', 2000);
  };
}

export function wishlishtRemoval(index, docRef) {
  return async (dispatch) => {
    await firestore().collection('wishlists').doc(docRef).delete();
    // let dishItem = await firestore().collection('wishlists').get();
    // dishItem.forEach(function (doc) {
    //   let dish = doc.data();
    //   dish.itemDoc = doc.id;
    // });
    dispatch({
      type: WISHLISHT_DELETION,
      payload: index,
    });
    ToastAndroid.show('Wishlist Removed Successfully', 2000);
  };
}

export function getAllWishlist(uid) {
  return async (dispatch) => {
    let wishlist = await firestore()
      .collection('wishlists')
      .where('uid', '==', uid)
      .get();
    wishlist.forEach(function (doc) {
      console.log('dats...........', doc);
      let dish = doc.data();
      dish.itemDoc = doc.id;
      dispatch({
        type: WIHSLIST_ADDITION,
        payload: dish,
      });
    });
  };
}

export function addToCart(product) {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };
}

export function minusFromCart(product) {
  return async (dispatch) => {
    dispatch({
      type: MINUS_FROM_CART,
      payload: product,
    });
  };
}

export function deleteFromCart(product) {
  return async (dispatch) => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: product,
    });
  };
}

export function placeOrder(product, navigation) {
  return async (dispatch) => {
    let obj = {
      address: product.address,
      name: product.name,
      grandTotal: product.grandTotal,
      email: product.email,
      number: product.number,
      payment: product.payment,
    };
    let orderId = await firestore().collection('orders').add(obj);
    product.cart.map(async (pro) => {
      pro.order_id = orderId.id;
      await firestore().collection('order_Dishes').add(pro);
    });
    // console.log(orderId.id);
    dispatch({
      type: DELETE_THE_CART,
    });
    ToastAndroid.show('Order Placed Successfully', 2000);
    navigation.navigate('Submit');
  };
}
