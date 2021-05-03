import React from "react";
import PropTypes from "prop-types";
import { StyledContactsList } from "./StyledContactsList";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <StyledContactsList>
      <ul>
        {contacts.map(contact => (
          <li className="styled-contact-li"
              key={contact.id}>
                <p>{contact.name}:</p>
                <p>{contact.number}</p>
                <button type="button" onClick={deleteContact} id={ contact.id}>Delete</button>
          </li>
        ))}
      </ul>
    </StyledContactsList>
  );
};

ContactsList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }).isRequired),
}


export default ContactsList;
