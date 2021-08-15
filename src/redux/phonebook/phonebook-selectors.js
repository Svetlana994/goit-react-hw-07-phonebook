import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.filter;

export const getContacts = (state) =>
  state.contactsApi.queries["getContacts(undefined)"].data;

export const getfilteredContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
