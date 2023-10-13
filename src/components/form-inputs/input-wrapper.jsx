import React from 'react';
import './form-inputs.less';

export const InputWrapper = ({ children, isValid = true }) => {
  return (
    <div className={`input-wrapper ${!isValid && 'non-valid'}`}>{children}</div>
  )
};