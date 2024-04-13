import Contact from "../../interfaces/Contact";
import { ACTIONS } from "../../utils/constants";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContactsState {
  contacts: Contact[];
}

const initialContactsState: ContactsState = {
  contacts: [],
};

const contactsReducer = (
  state = initialContactsState,
  action: PayloadAction<Contact[]>
): ContactsState => {
  switch (action.type) {
    case ACTIONS.UPDATE_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    default:
      return state;
  }
};

export default contactsReducer;
