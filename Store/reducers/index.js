import {combineReducers} from 'redux';
import Auth from './auth';
import Restaurant from './restaurant';
import Customer from './customer';

export default combineReducers({
  auth: Auth,
  restaurant: Restaurant,
  customer: Customer,
});
