/*****************************************
 * * Nadeem Abomokh 206622755
 * * Mohammad Hussen 208133454
 * * 45/4
 *****************************************/

import { useState } from 'react';

import './App.css';

import ContactList from './components/List/ContactList';
import ActionsBar from './components/Bar/ActionsBar';
import Modal from './components/Modal/Modal';
import ContactForm from './components/Forms/FormValues';
import ContactInfo from './components/Info/ContactInfo';
import { v4 as uuidv4 } from 'uuid'; // It Will Create A Uniq Id Number 
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [contacts, setContacts] = useState([]); // This Is A List That Contains Alll The Contacts
  const [searchValue, setSearchValue] = useState(''); // This is the word that we want to search in the contact list
  const [formModalIsOpen, setFormModalIsOpen] = useState(false); // is the Form model is open
  const [infoModalIsOpen, setInfoModalIsOpen] = useState(false); // is the Info model is open 

  const [editableContact, setEditableContact] = useState(null); // the object that we want to change with
  const [contactInfo, setContactInfo] = useState(null); // the objects that show us the info model
  const date = new Date();

  // this function will delete all the contacts from the list , that will set it on empty!
  function deleteAll() {
    setContacts([]);
  }
  

  // this function when called it will check if user info has been edited and submited on the button it will return the new contact info
  // if anything else than the submit button has been clicked (otherwise) the contact info will not be changed
  function onSubmit(newContact) {
    // editableContact - האובייק שעורכים אותו
    if (editableContact) {
      // עריכה
      setContacts(
        contacts.map((contact) => {
          if (contact.id === newContact.id) {
            return newContact;
          }
          return contact;
        })
      );
    } else {
      // adding the new contact on the list
      setContacts([...contacts, { ...newContact, id: uuidv4() }]);
    }
    setEditableContact(null);
    setFormModalIsOpen(false);
  }

  // if this function is called 
  function onInfo(contact) {
    setContactInfo(contact);
    setInfoModalIsOpen(true);
  }
  
  // this function will show the cantact contact and set the form modal to true
  function onEdit(contact) {
    setEditableContact(contact);
    setFormModalIsOpen(true);
  }
  // this function will delete a specific contact from the list
  function onDelete(removedContact) {
    setContacts(contacts.filter((contact) => contact.id !== removedContact.id));
  }

  // This arrow function will sort us the contact list from th smaller to the bigger A --- C
  const soredContacts = contacts.sort((a, b) =>
    a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
  );

  // this function will filter the contact list by the specific searched word
  const filteredContacts = soredContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="main_app">
    <div className="app">
    {/*This Section is For Calling The Components  */}
      <Header />
      {/* Action Bar Component */}
      <ActionsBar
        deleteAll={deleteAll}
        setSearchValue={setSearchValue}
        total={filteredContacts.length}
        onAdd={() => setFormModalIsOpen(true)}
      />
       {/* Contact List Component */}
      <ContactList
        className="list"
        onDelete={onDelete}
        contacts={filteredContacts}
        onEdit={onEdit}
        onInfo={onInfo}
      />

      {/* Modal Component For Editing */}
      <Modal
        onClose={() => setFormModalIsOpen(false)}
        isOpen={formModalIsOpen}
        header={editableContact ? 'Edit Contact' : 'Add Contact'}
        body={
          <ContactForm onSubmit={onSubmit} editableContact={editableContact} />
        }
      />
      {/* Modal Component For opening the info modal */}
      <Modal
        onClose={() => setInfoModalIsOpen(false)}
        isOpen={infoModalIsOpen}
        header={'Contact Info'}
        body={<ContactInfo contact={contactInfo} />}
      />

      {/* Footer Component */}
      <Footer year={date.getFullYear()} name="Nadeem & Hussein" />
    </div>
  </div>
  );
}

export default App;
