import React from 'react';

export function Heading({ title }) {
  return (
    <h1 className='text-bold text-2xl md:text-3xl lg:text-4xl text-indigo-900 lg:ml-0 ml-8'>
      {title}
    </h1>
  );
}

export function Heading2({ title }) {
  return (
    <h1 className='text-bold text-xl md:text-xl lg:text-2xl text-indigo-900 lg:ml-0'>
      {title}
    </h1>
  );
}
