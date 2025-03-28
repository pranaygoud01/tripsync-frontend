import React, { forwardRef } from 'react';

const Input = forwardRef(({ type, title, name, placeholder }, ref) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold">{title}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        ref={ref} 
        className="border-2 border-neutral-400  font-semibold outline-0 p-2 rounded-lg"
        required
      />
    </div>
  );
});

export default Input;
