import { configureStore } from "@reduxjs/toolkit";
import { contactsApi } from "services/phonebook-api-slice";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./phonebook/phonebook-actions";

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export const store = configureStore({
  reducer: {
    filter,
    // Add the generated reducer as a specific top-level slice
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
