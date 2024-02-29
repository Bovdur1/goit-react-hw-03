import { useState, useEffect } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem('contacts');

    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    }

    return [];
  });
  const [filter, setFilter] = useState('');

  const filterContacts = contacts.filter(
    contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.includes(filter.trim())
  );

  const onDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={setContacts} />
      <SearchBox value={filter} handleChange={setFilter} />
      <ContactList contacts={filterContacts} onDelete={onDelete} />
    </>
  );
}

export default App;
