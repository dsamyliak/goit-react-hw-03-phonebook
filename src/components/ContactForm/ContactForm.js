import React from "react";
import "./ContactForm.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class ContactForm extends React.Component {
  nameId = nanoid();
  telId = nanoid();

  state = {
    id: "",
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      id: "",
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ContactForm">
        <label htmlFor={this.nameId}>
          Name
          <input
            // className="Phonebook__Input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder="Name: Will Smith"
            maxLength={100}
          />
        </label>
        <label htmlFor={this.telId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.telId}
            onChange={this.handleInputChange}
            placeholder="Number: +380001112233"
            maxLength={15}
          ></input>
        </label>
        <button type="submit" className="AddContact__Btn">
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default ContactForm;
