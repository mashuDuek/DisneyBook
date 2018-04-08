import * as APIUtil from '../util/user_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUsers = (users) => {

  return {
    type: RECEIVE_USERS,
    users: users
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user: user
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    return APIUtil.fetchUsers().
      then((users) => dispatch(receiveUsers(users)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
};

export const fetchUser = (user) => {
  return (dispatch) => {
    return APIUtil.fetchUser(user).
      then((user) => dispatch(receiveUser(user)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };
};
