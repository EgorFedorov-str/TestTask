import axios from 'axios';
import { postSlice } from '../slices/postSlice';

export const fetchPost = () => {
  const postUrl = 'https://jsonplaceholder.typicode.com/posts';
  return async (dispatch) => {
    try {
      dispatch(postSlice.actions.fetching());
      const resp = await axios.get(postUrl);
      dispatch(postSlice.actions.fetchSuccess(resp.data));
    } catch (e) {}
  };
};
