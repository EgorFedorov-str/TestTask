import axios from 'axios';
import { photoSlice } from '../slices/photoSlice';

export const fetchPhoto = () => {
  const photoUrl = 'https://jsonplaceholder.typicode.com/photos';
  return async (dispatch) => {
    try {
      dispatch(photoSlice.actions.fetching());
      const resp = await axios.get(photoUrl);
      dispatch(photoSlice.actions.fetchSuccess(resp.data));
    } catch (e) {}
  };
};
