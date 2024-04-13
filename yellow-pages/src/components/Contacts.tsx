import "../styles/Contacts.css";
import { useAppSelector } from "../hooks";
import { RootState } from "../redux/store";
import ContactCard from "./ContactCard";
import Contact from "../interfaces/Contact";

const Contacts: React.FC = () => {
  const foundContacts = useAppSelector(
    (state: RootState) => state.foundContacts.foundContacts
  );

  return (
    <div className="contacts-conatiner">
      {foundContacts.length === 0 ? (
        <h2>No results, please review your search or try a different one</h2>
      ) : (
        foundContacts?.map((contact: Contact) => {
          return (
            <div key={contact._id} className="contact">
              <ContactCard contact={contact} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Contacts;
