import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

function ContactList() {
  const {
    contactList,
    retrieveContacts,
    searchTerm,
    searchResults,
    searchHandler,
  } = useContactsCrud();

  useEffect(() => {
    retrieveContacts();
  }, []);

  const renderContactList = (
    searchTerm.length < 1 ? contactList : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };

  return (
    <div className="ui main">
      <div className="ui search">
        <div className="ui icon fluid input">
          <input
            className="prompt"
            type="text"
            placeholder="Search contacts..."
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
        <h3 className="ui medium header" style={{ marginBottom: "10px" }}>
          Contact List
          <Link to="/add">
            <button className="ui compact button blue right floated">
              Add Contact
            </button>
          </Link>
        </h3>
        <div className="ui celled list">
          {renderContactList.length > 0
            ? renderContactList
            : "No contacts available"}
        </div>
      </div>
    </div>
  );
}

export default ContactList;
