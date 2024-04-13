import { ChangeEvent, useEffect, useState } from "react";
import "../styles/SearchContacts.css";
import { useAppDispatch, useAppSelector } from "../hooks";
import Contacts from "./Contacts";
import { updateContacts } from "../redux/actions/contactsActions";
import { RootState } from "../redux/store";
import { URLS } from "../utils/constants";
import { updatefoundContacts } from "../redux/actions/foundContactsActions";

const SearchContacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  const contacts = useAppSelector(
    (state: RootState) => state.contacts.contacts
  );

  useEffect(() => {
    fetchAllContacts();
  }, []);

  const fetchAllContacts = async (): Promise<void> => {
    try {
      const response = await fetch(URLS.BASE_URL + URLS.getAllContacts);

      if (!response.ok) {
        throw new Error("Failed fetching all contacts");
      }

      const allContacts = await response.json();
      dispatch(updateContacts(allContacts));
      dispatch(updatefoundContacts(allContacts));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching all contacts:", error);
    }
  };

  const handleSearchContacts = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch(`/searchContacts?q=${searchValue}`);
      if (!response.ok) {
        throw new Error("Failed search contacts");
      }

      const foundContacts = await response.json();
      dispatch(updatefoundContacts(foundContacts));
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value;
    if (value === "") {
      dispatch(updatefoundContacts(contacts));
    }
    setSearchValue(value);
  };

  return (
    <div className="search-contacts-conatiner">
      <form className="search-container" onSubmit={handleSearchContacts}>
        <input
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search Contact"
          className="searchbar-input"
          value={searchValue}
          onChange={(e) => handleOnChange(e)}
        />
        <button className="search-btn">Search</button>
      </form>
      {isLoading ? <div className="loader" /> : <Contacts />}
    </div>
  );
};

export default SearchContacts;
