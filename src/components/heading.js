import React from 'react';

function Heading({ title }) {
  return (
    <h1 className='text-bold text-3xl md:text-3xl lg:text-4xl text-indigo-900 lg:ml-0 ml-14 mb-5'>
      {title}
    </h1>
  );
}

export default Heading;

