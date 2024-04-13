import Contact from "../../interfaces/Contact";
import { ACTIONS } from "../../utils/constants";

export interface UpdateContactsAction {
  type: string;
  payload: Contact[];
}

export const updateContacts = (contacts: Contact[]): UpdateContactsAction => ({
  type: ACTIONS.UPDATE_CONTACTS,
  payload: contacts,
});
