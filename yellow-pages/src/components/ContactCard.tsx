import Contact from "../interfaces/Contact";
import "../styles/ContactCard.css";
import { calculateAge } from "../utils/utilsFunctions";

interface ContactProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactProps> = ({ contact }) => {
  const age = calculateAge(contact.birthday);

  return (
    <div className="search-contacts-conatiner">
      <div className="container">
        <img
          alt="user-avatar"
          className="user-avatar"
          src={`./images/${contact.picture}`}
        />
        <div className="sub-container">
          <div className="label">
            {contact.name}, {age}, {contact.phone_number}
          </div>

          <p className="description">{contact.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
