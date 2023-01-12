import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useEffect, useState } from "react";
import {v4 as uuid} from "uuid";

function App() {
  const LOCAL_STORAGE_KEY = "contact_list";
  const [contactList, setContactList] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  const addContactHandler = (contact) => {
    setContactList([...contactList, {id: uuid(), ...contact}]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contactList.filter((contact) => {
      return contact.id !== id;
    })

    setContactList(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
  }, [contactList]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contactList={contactList} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
