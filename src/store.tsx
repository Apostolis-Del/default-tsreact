import { combineReducers, configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import { vesselsApi } from "./features/apiSlice";
import authReducer from './features/authSlice'
import { persistStore ,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'redux-persist'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [vesselsApi.reducerPath]: vesselsApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vesselsApi.middleware),
});

//------------------------------------------------------------

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storePersisted = configureStore({
 reducer: {
  reducer:persistedReducer,
    auth: authReducer,
    [vesselsApi.reducerPath]: vesselsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(vesselsApi.middleware),
});

export const persistor = persistStore(storePersisted);

//------------------------------------------------------------

export type RootState = ReturnType<typeof store.getState>;