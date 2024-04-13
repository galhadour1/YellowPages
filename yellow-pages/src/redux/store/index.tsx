import { createStore, combineReducers } from "redux";
import contactsReducer from "../reducers/contacts";
import foundContactsReducer from "../reducers/foundContacts";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  foundContacts: foundContactsReducer,
});

const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
