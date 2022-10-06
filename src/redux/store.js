import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { getFullData } from '../service/getFullData';
import getDataReducer from './getData';

const rootReducer = combineReducers({
  [getFullData.reducerPath]: getFullData.reducer,
  getData: getDataReducer,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getFullData.middleware),
    preloadedState,
  });
};
