import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.comments = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default commentSlice.reducer;
