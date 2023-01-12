import ContactCard from "./ContactCard";

function ContactList(props) {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contactList.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  return (
    <div className="ui main">
      <div className="ui celled list">
        <h3 className="ui medium header">Contact List</h3>
        {renderContactList}
      </div>
    </div>
  );
}

export default ContactList;
