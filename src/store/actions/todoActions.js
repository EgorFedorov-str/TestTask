import axios from 'axios';
import { todoSlice } from '../slices/todoSlice';

export const fetchTodo = () => {
  const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
  return async (dispatch) => {
    try {
      dispatch(todoSlice.actions.fetching());
      const resp = await axios.get(todoUrl);
      dispatch(todoSlice.actions.fetchSuccess(resp.data));
    } catch (e) {}
  };
};
