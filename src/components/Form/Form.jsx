import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import {
  FormEl,
  LabelName,
  InputName,
  AddContactButton,
  Title,
} from './Form.style';

class Form extends Component {
  state = { name: '', number: '' };

  // Відповідає за оновлення стану
  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value, id: 'id' + nanoid() });
  };

  // Викликається під час відправлення форми
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    console.log('this state', this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <Title>Phonebook</Title>

        <FormEl onSubmit={this.handleSubmit}>
          <LabelName htmlFor={name}>
            Name
            <InputName
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
              title="Name may contain only letters, apostrophe,
          dash and spaces. For example Adrian, Jacob Mercer,
          Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelName>

          <LabelName htmlFor={number}>
            Number
            <InputName
              placeholder="Enter number"
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelName>
          <AddContactButton type="submit">Add contact</AddContactButton>
        </FormEl>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
