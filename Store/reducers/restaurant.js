import {
  RESTAURANT_FOOD_ADD,
  NOT_AUTHORISE_USER_DISHES,
  RESTAURANT_ORDERS,
  RESTAURANT_CART_ORDERS
} from '../constants/actiontypes';

const INIT_STATE = {
  dishes: [],
  tempDishes: [],
  orders: [],
  cartorder:[],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESTAURANT_FOOD_ADD:
      let allRecepients = state.dishes.slice(0);
      let newUser = true;
      allRecepients.map((recipient) => {
        if (recipient.dishName === action.payload.dishName) {
          newUser = false;
        }
      });

      if (allRecepients.length === 0 || newUser) {
        allRecepients.push(action.payload);
      }
      return {
        ...state,
        dishes: allRecepients,
      };

    case NOT_AUTHORISE_USER_DISHES:
      let allDishes = state.tempDishes.slice(0);
      let newDish = true;
      allDishes.map((recipient) => {
        if (recipient.dishName === action.payload.dishName) {
          newDish = false;
        }
      });

      if (allDishes.length === 0 || newDish) {
        allDishes.push(action.payload);
      }
      return {
        ...state,
        tempDishes: allDishes,
      };

      case RESTAURANT_ORDERS:
      let allOrders = state.orders.slice(0);
      let newOrder = true;
      allOrders.map((recipient) => {
        if (recipient.address === action.payload.address) {
          newOrder = false;
        }
      });

      if (allOrders.length === 0 || newOrder) {
        allOrders.push(action.payload);
      }
      return {
        ...state,
        orders: allOrders,
      };

    case RESTAURANT_CART_ORDERS:{
      let cartOrder = state.cartorder.slice(0);
      let newOrderget = true;
      cartOrder.map((recipient) => {
        if (recipient.address === action.payload.address) {
          newOrderget = false;
        }
      });

      if (cartOrder.length === 0 || newOrderget) {
        cartOrder.push(action.payload);
      }
      // console.log('reducee========',action.payload);
      // cartOrder.push(action.payload);
      return {
        ...state,
        cartorder: cartOrder,
      };
    }

    default:
      return state;
  }
};
