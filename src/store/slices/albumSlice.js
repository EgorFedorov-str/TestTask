import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: '',
  albums: [],
};

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      state.loading = false;
      state.albums = action.payload;
    },
    fetchError(state, action) {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default albumSlice.reducer;
