import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.filter;

//const getContacts = (state) => state.contactsApi.queries.getContacts.data;

// export const getfilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return allContacts.filter((contact) =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
