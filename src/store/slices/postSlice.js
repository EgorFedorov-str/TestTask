import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.posts = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default postSlice.reducer;
