import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.todos = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default todoSlice.reducer;
