import React from 'react';

const FormInput = ({ label, secondaryText, name, value, errors, handleInputChange }) => {
  const isError = errors[name];
  const inputDataType = name === 'inn' || name === 'kassaNumber' ? 'number' : 'text';
  const maxLength = inputDataType === 'number' ? 15 : undefined;

  return (
    <div className={`form-row ${isError ? 'error-row' : ''}`}>
      <div className="label-container">
        <label className="form-label">{label}</label>
        {secondaryText && <span className="form-secondary-text"> {secondaryText}</span>}
      </div>
      <div className="input-container">
        <input
          type="text"
          className={`form-input ${isError ? 'error' : ''}`}
          placeholder={name === 'telegramInfo' ? "Введите" : ""}
          value={value}
          name={name}
          maxLength={maxLength}
          data-type={inputDataType}
          onChange={handleInputChange}
          onBlur={handleInputChange}
        />
        {isError && <div className="error-message">{isError}</div>}
      </div>
    </div>
  );
};

export default FormInput;