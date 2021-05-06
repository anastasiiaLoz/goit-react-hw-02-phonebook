import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyledContactsForm } from './StyledContactsForm.js'


class ContactsForm extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }

  onHandleSubmit = e => {
    e.preventDefault();
    if (this.props.onCheckDuplicateName(this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      return 
    };
    this.props.addContact(this.state);

    this.setState({
      contacts: [],
      name: "",
      filter: '',
      number: ""
    });
  };


  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  };

  render() {
    return (
      <StyledContactsForm onSubmit={this.onHandleSubmit}>
        <label>
          Name
          <input 
            placeholder="what's his/her name?"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.onHandleChange}
            value={this.state.name}
          />
        </label>
        <label>
          Number
          <input 
            placeholder="gimme their number, hun;)"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.onHandleChange}
            value={this.state.number}
          />
        </label>
        <button type="submit">Add Contact</button>
      </StyledContactsForm>
    );
  }
}

ContactsForm.propTypes = {
  onHandleSubmit: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
}.isRequired;

export default ContactsForm;
