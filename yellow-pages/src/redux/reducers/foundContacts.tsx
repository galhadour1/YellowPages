import Contact from "../../interfaces/Contact";
import { ACTIONS } from "../../utils/constants";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FoundContactsState {
  foundContacts: Contact[];
}

const initialFoundContactsState: FoundContactsState = {
  foundContacts: [],
};

const foundContactsReducer = (
  state = initialFoundContactsState,
  action: PayloadAction<Contact[]>
): FoundContactsState => {
  switch (action.type) {
    case ACTIONS.UPDATE_FOUND_CONTACTS:
      return {
        ...state,
        foundContacts: action.payload,
      };
    default:
      return state;
  }
};

export default foundContactsReducer;
