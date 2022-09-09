import axios from 'axios';
import { albumSlice } from '../slices/albumSlice';

export const fetchAlbum = () => {
  const albumUrl = 'https://jsonplaceholder.typicode.com/albums';
  return async (dispatch) => {
    try {
      dispatch(albumSlice.actions.fetching());
      const resp = await axios.get(albumUrl);
      dispatch(albumSlice.actions.fetchSuccess(resp.data));
    } catch (e) {}
  };
};
