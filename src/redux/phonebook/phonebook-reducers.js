import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./phonebook-actions";
import { addContact, deleteContact, getContacts } from "./phonebook-operations";

const items = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
  [getContacts.fulfilled]: (_, action) => action.payload,
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [getContacts.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.pending]: () => null,
  [getContacts.pending]: () => null,
});

export default combineReducers({
  items,
  loading,
  error,
  filter,
});
