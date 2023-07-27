import React, { Component } from 'react';
import Form from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  formSubmitHandler = data => {
    console.log('data--->', data);
  };

  onAddContact = newContact => {
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, newContact] };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <Form onSubmit={this.onAddContact} />
        <ContactsList contacts={contacts} />
      </div>
    );
  }
}

export default App;
