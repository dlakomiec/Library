import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  div {
    display: flex;
    flex-direction: column;
    label {
      width: 100px;
    }
  }
`;

const StyledInput = styled.input`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  &:focus {
    outline: none;
    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);
  }
`;

const rotate = keyframes`
0%{
  transform: scale(0.9);
}
50%{
  transform: scale(1.1)
}
100%{
  transform: scale(0.9);
}
`;

const Error = styled.div`
  color: red;
  animation: ${rotate} 2s linear infinite;
`;

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
    <Wrapper>
      <div>
        <label htmlFor={id}>
          {labelValue}
          <StyledInput
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
        {errors[id] && touched[id] && <Error>{errors[id]}</Error>}
      </div>
    </Wrapper>
  );
};

export default FormInput;
