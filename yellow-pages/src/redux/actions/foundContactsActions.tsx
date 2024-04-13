import Contact from "../../interfaces/Contact";
import { ACTIONS } from "../../utils/constants";

export interface UpdatefoundContactsAction {
  type: string;
  payload: Contact[];
}

export const updatefoundContacts = (
  foundContacts: Contact[]
): UpdatefoundContactsAction => ({
  type: ACTIONS.UPDATE_FOUND_CONTACTS,
  payload: foundContacts,
});
