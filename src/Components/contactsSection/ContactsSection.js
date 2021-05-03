import React from 'react';

const ContactsSection = ({ title, children, styles}) => {
    return (
        <div className={styles}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default ContactsSection;