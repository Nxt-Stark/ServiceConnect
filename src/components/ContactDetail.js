import React from 'react';

const ContactDetail = ({ icon, label, value }) => (
  <div className="flex items-center gap-2">
    <i className={`icon-${icon} text-orange-500`}></i>
    <p className="text-sm text-gray-600">{label}: <span className="text-gray-800 font-medium">{value}</span></p>
  </div>
);

export default ContactDetail;
