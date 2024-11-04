import React from 'react';
import ContactDetail from './ContactDetail';

const ContactDetails = () => (
  <div className="flex flex-col gap-2 mt-4 md:mt-0">
    <ContactDetail icon="user" label="Contact Name" value="Justin Hope" />
    <ContactDetail icon="location" label="Address" value="Jakarta, Indonesia" />
    <ContactDetail icon="phone" label="Phone" value="+12 345 6789 0" />
    <ContactDetail icon="mail" label="Email" value="Hope@mail.com" />
  </div>
);

export default ContactDetails;
