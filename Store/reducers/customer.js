import {
  RESTAURANT_FOOD_ADD,
  NOT_AUTHORISE_USER_DISHES,
  WIHSLIST_ADDITION,
  ADD_TO_CART,
  WISHLISHT_DELETION,
  MINUS_FROM_CART,
  DELETE_FROM_CART,
  DELETE_THE_CART,
} from '../constants/actiontypes';

const INIT_STATE = {
  // dishes: [],
  // tempDishes: [],
  wishlist: [],
  cart: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    // case RESTAURANT_FOOD_ADD: {
    //   let allRecepients = state.dishes.slice(0);
    //   let newUser = true;
    //   allRecepients.map((recipient) => {
    //     if (recipient.dishName === action.payload.dishName) {
    //       newUser = false;
    //     }
    //   });

    //   if (allRecepients.length === 0 || newUser) {
    //     allRecepients.push(action.payload);
    //   }
    //   return {
    //     ...state,
    //     dishes: allRecepients,
    //   };
    // }
    // case NOT_AUTHORISE_USER_DISHES: {
    //   let allDishes = state.tempDishes.slice(0);
    //   let newDish = true;
    //   allDishes.map((recipient) => {
    //     if (recipient.dishName === action.payload.dishName) {
    //       newDish = false;
    //     }
    //   });

    //   if (allDishes.length === 0 || newDish) {
    //     allDishes.push(action.payload);
    //   }
    //   return {
    //     ...state,
    //     tempDishes: allDishes,
    //   };
    // }
    case WIHSLIST_ADDITION: {
      let wishlistProduct = state.wishlist.slice(0);
      let newWishlist = true;
      wishlistProduct.map((recipient) => {
        if (recipient.dishName === action.payload.dishName) {
          newWishlist = false;
        }
      });

      if (wishlistProduct.length === 0 || newWishlist) {
        wishlistProduct.push(action.payload);
      }
      return {
        ...state,
        wishlist: wishlistProduct,
      };
    }
    case WISHLISHT_DELETION: {
      let cloneWishlist = state.wishlist.slice(0);
      cloneWishlist.splice(action.payload, 1);
      return {
        ...state,
        wishlist: cloneWishlist,
      };
    }
    case ADD_TO_CART: {
      let cartClone = state.cart.slice(0);
      let dishItem = action.payload;

      let isAlreadyInCart = false;
      let cartIndex;
      for (let i = 0; i < cartClone.length; i++) {
        if (cartClone[i].dishName == dishItem.dishName) {
          isAlreadyInCart = true;
          cartIndex = i;
          break;
        }
      }
      if (isAlreadyInCart) {
        dishItem = cartClone[cartIndex];
        dishItem.quantity++;
        dishItem.totalPrice = dishItem.quantity * Number(dishItem.foodPrice);
        cartClone.splice(cartIndex, 1, dishItem);
      } else {
        dishItem.quantity = 1;
        dishItem.totalPrice = dishItem.quantity * Number(dishItem.foodPrice);
        cartClone.push(dishItem);
      }
      return {
        ...state,
        cart: cartClone,
      };
    }

    case MINUS_FROM_CART: {
      let cartCloneSecond = state.cart.slice(0);
      let dishItemSecond = action.payload;

      let isAlreadyInCartSecond = false;
      let cartIndexSecond;
      for (let i = 0; i < cartCloneSecond.length; i++) {
        if (cartCloneSecond[i].dishName == dishItemSecond.dishName) {
          isAlreadyInCartSecond = true;
          cartIndexSecond = i;
          break;
        }
      }
      if (isAlreadyInCartSecond) {
        dishItemSecond = cartCloneSecond[cartIndexSecond];
        if (dishItemSecond.quantity > 0) {
          dishItemSecond.quantity--;
          dishItemSecond.totalPrice =
            dishItemSecond.quantity * Number(dishItemSecond.foodPrice);
          cartCloneSecond.splice(cartIndexSecond, 1, dishItemSecond);
        } else {
          dishItemSecond.quantity = 0;
          dishItemSecond.totalPrice = 0;
          cartCloneSecond.splice(cartIndexSecond, 1, dishItemSecond);
        }
      }
      return {
        ...state,
        cart: cartCloneSecond,
      };
    }

    case DELETE_FROM_CART: {
      let cartCloneThird = state.cart.slice(0);
      let dishItemThird = action.payload;

      let isAlreadyInCartSecond = false;
      let cartIndexThird;
      for (let i = 0; i < cartCloneThird.length; i++) {
        if (cartCloneThird[i].dishName == dishItemThird.dishName) {
          isAlreadyInCartSecond = true;
          cartIndexThird = i;
          break;
        }
      }
      if (isAlreadyInCartSecond) {
        dishItemThird = cartCloneThird[cartIndexThird];
        cartCloneThird.splice(cartIndexThird, 1);
      }
      return {
        ...state,
        cart: cartCloneThird,
      };
    }

    case DELETE_THE_CART: {
      let cloneTheCart = state.cart.slice(0);
      cloneTheCart.splice(0);
      return {
        ...state,
        cart: cloneTheCart,
      };
    }

    default:
      return state;
  }
};
