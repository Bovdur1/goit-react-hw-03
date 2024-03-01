import { useState, useEffect } from 'react';
import './App.css';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [];
  });
  const [filter, setFilter] = useState('');

  // Пошук контактів за ім'ям
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  //Видалення контакту зі списку
  const onDelete = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  // Збереження списку контактів до локального сховища
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={setContacts} />
      <SearchBox
        value={filter}
        handleChange={setFilter}
        title="Find contacts by name"
      />
      <ContactList contacts={filterContacts} onDelete={onDelete} />
    </>
  );
}

export default App;
