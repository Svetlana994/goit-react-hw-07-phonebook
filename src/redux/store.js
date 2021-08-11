import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import storage from "redux-persist/lib/storage";
import contactsReducer from "./phonebook/phonebook-reducers";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

const store = configureStore({
  reducer: {
    //contacts: persistReducer(persistConfig, contactsReducer),
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

// const persistor = persistStore(store);

// export default { store, persistor };

export default store;
