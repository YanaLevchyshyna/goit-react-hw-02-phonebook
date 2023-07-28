import React, { Component } from 'react';
import Form from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = newContact => {
    this.state.contacts.filter(contactName =>
      contactName.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim() ||
      contactName.number.trim() === newContact.number.trim()
        ? alert(`${contactName.name} is already in contacts`)
        : this.setState(prevState => {
            return { contacts: [...prevState.contacts, newContact] };
          })
    );
  };

  // Відповідає за оновлення стану list by search
  onSearchFieldChange = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  getContactBySearch = () => {
    const { filter, contacts } = this.state;
    const normalizedToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedToLowerCase)
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contactItem => contactItem.id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const contactBySearch = this.getContactBySearch();

    return (
      <div>
        <Form onSubmit={this.onAddContact} />
        <Filter value={filter} onChange={this.onSearchFieldChange} />
        <ContactsList
          contacts={contactBySearch}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
