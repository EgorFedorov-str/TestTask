import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import commentReducer from './slices/commentSlice';
import albumReducer from './slices/albumSlice';
import photoReducer from './slices/photoSlice';
import todoReducer from './slices/todoSlice';

const rootReducer = combineReducers({
  post: postReducer,
  comment: commentReducer,
  album: albumReducer,
  photo: photoReducer,
  todo: todoReducer,
});

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
