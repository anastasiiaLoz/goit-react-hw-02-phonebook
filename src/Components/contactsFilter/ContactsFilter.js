import React from 'react';
import PropTypes from "prop-types";
import { StyledFilterContainer } from './StyledContactsFilter';

const ContactsFilter = ({ filter, setFilter}) => {
    return (
        <StyledFilterContainer>
        <label>
            <h3>Find contacts by name</h3>
            <input className="filterInput"
                type="text"
                value={filter}
                onChange={setFilter}
                placeholder="who is your booty call for tonight? "
            />
            </label>
        </StyledFilterContainer>
        
    );
}

ContactsFilter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func,
}.isRequired;


export default ContactsFilter;