import React from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="contactItem">
        <ContactItem id={id} name={name} number={number} />
        <button
          className="contactDeleteBtn"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
