import axios from 'axios';
import { commentSlice } from '../slices/commentSlice';

export const fetchComment = () => {
  const commentUrl = 'https://jsonplaceholder.typicode.com/comments';
  return async (dispatch) => {
    try {
      dispatch(commentSlice.actions.fetching());
      const resp = await axios.get(commentUrl);
      dispatch(commentSlice.actions.fetchSuccess(resp.data));
    } catch (e) {}
  };
};
