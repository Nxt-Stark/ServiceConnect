// Button.js
import React from 'react';

const Button = ({ variant, children, onClick, className }) => {
  const baseStyle = "rounded-full px-8 py-3 transition text-sm font-semibold";
  
  const variants = {
    primary: "bg-[#4D12B9] text-white hover:bg-[#4D60B9]",
    outline: "text-[#4D12B9] border-2 border-[#4D12B9] hover:bg-indigo-700 hover:text-white text-sm",
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button className={`${baseStyle} ${selectedVariant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
