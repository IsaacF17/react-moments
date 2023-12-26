import React, { HTMLInputTypeAttribute } from 'react';
import './TextInput.scss';

interface ITextInputProps {
  label: string
  id: string
  [K: string]: HTMLInputTypeAttribute
}

const TextInput: React.FC<ITextInputProps> = ({ label, id, ...rest }) => {

  return (
    <div className='text-input'>
      <label htmlFor={id}>
        {label}
      </label>
      <input type='text' id={id} {...rest} />
    </div>
  )
};

export default TextInput;
