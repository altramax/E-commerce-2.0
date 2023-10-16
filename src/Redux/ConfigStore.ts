import { configureStore} from "@reduxjs/toolkit";
import { UserAuthSlice } from "./AuthSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import {logger} from "redux-logger"

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, UserAuthSlice.reducer)    


export const store = configureStore ({
    reducer:{
     user: persistedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch