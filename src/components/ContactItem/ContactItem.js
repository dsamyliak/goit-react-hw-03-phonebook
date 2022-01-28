import React from "react";
import "./ContactItem.css";
import PropTypes from "prop-types";

const ContactItem = ({ name, number }) => (
  <p className="contactText">
    {name}: {number}
  </p>
);

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactItem;
