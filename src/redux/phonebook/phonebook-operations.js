import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, postContact, delContact } from "services/phonebook-api";

export const getContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactobj, { rejectWithValue }) => {
    try {
      const contact = await postContact(contactobj);
      return contact;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await delContact(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
