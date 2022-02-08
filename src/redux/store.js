import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import {
<<<<<<< HEAD
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
=======
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
<<<<<<< HEAD
    key: "root",
    version: 1,
    storage,
};
const rootReducer=combineReducers({user:userReducer, cart: cartReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store=
    configureStore({
        reducer:persistedReducer, 
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
    }),
});



export let persistor = persistStore(store);
=======
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
>>>>>>> 21f36d3c3d5b71f7d282e0cd6298ab99e7325601
