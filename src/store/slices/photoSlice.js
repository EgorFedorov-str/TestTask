import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  photos: [],
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.photos = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default photoSlice.reducer;
