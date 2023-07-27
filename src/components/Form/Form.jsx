import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormEl, LabelName, InputName, AddButton } from './Form.style';

class Form extends Component {
  nameInputId = nanoid();

  state = { name: '' };

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
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Phonebook</h1>

        <FormEl onSubmit={this.handleSubmit}>
          <LabelName htmlFor={this.nameInputId}>
            Name
            <InputName
              id={this.nameInputId}
              type="text"
              placeholder="Enter name"
              name="name"
              value={name}
              onChange={this.handleChange}
              //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, 
          dash and spaces. For example Adrian, Jacob Mercer, 
          Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelName>
          <AddButton type="submit">Add contact</AddButton>
        </FormEl>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
