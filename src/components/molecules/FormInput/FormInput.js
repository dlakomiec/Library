import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  id,
  placeholder,
  type,
  values,
  onChange,
  onBlur,
  errors,
  touched,
  labelValue,
}) => {
  return (
    <>
      <label htmlFor={id}>
        {labelValue}
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          type={type}
          value={values[id]}
          onChange={onChange}
          onBlur={onBlur}
          className={
            errors[id] && touched[id] ? 'text-input error' : 'text-input'
          }
        />
      </label>
      {errors[id] && touched[id] && (
        <div className="input-feedback">{errors[id]}</div>
      )}
    </>
  );
};

export default FormInput;

FormInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  values: PropTypes.objectOf(PropTypes.string),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  errors: PropTypes.objectOf(PropTypes.string),
  touched: PropTypes.objectOf(PropTypes.bool),
  labelValue: PropTypes.string,
};
