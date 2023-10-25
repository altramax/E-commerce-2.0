import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import rootReducer from "./RootReducer";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { UserAuthSlice } from "./AuthSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["userDetails"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  // devTools: process.env.NODE_ENV !== "production",
  // middleware: applyMiddleware(thunk)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
