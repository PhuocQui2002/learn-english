import { combineReducers, configureStore } from "@reduxjs/toolkit";


import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import favoriteSlices from "./Slices/favoriteSlices";
import historySlices from "./Slices/historySlides";


const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["favories", "history"], // ✅ Thêm slice này vào
};

const rootReducer = combineReducers({
  favories: favoriteSlices,
  history: historySlices,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;
