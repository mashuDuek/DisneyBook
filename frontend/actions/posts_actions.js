import * as APIUtil from '../util/post_util';
import { receiveErrors } from './errors_actions';

export const RECEIVE_POST = 'RECEIVE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const editPost = post => {
  return {
    type: UPDATE_POST,
    post
  };
};

export const destroyPost = post => {
  return {
    type: DELETE_POST,
    post
  };
};

export const receivePosts = ({ posts, users }) => {
  return {
    type: RECEIVE_POSTS,
    posts,
    users
  };
};

export const createPost = ({ body, receiverId }) => {
  return dispatch => {
    return APIUtil.createPost({ receiver_id: receiverId, body }).
      then(post => dispatch(receivePost(post)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const updatePost = post => {
  return dispatch => {
    return APIUtil.updatePost(post).
      then(post => dispatch(editPost(post)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const deletePost = post => {
  return dispatch => {
    return APIUtil.deletePost(post).
      then(post => dispatch(destroyPost(post)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return APIUtil.fetchAllPosts().
      then(posts => dispatch(receivePosts(posts)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const fetchPost = post => {
  return dispatch => {
    return APIUtil.fetchPost(post).
      then(post => dispatch(receivePost(post)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};
