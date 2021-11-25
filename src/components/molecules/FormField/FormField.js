import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 20px;

  &:focus {
    outline: none;
    box-shadow: -1px 2px 8px rgba(115, 124, 142, 0.3);
  }
`;
const Label = styled.label`
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;

  label {
    margin: 10px 0;
  }
`;

const FormField = ({
  onChange,
  value,
  label,
  title,
  id,
  type = 'string',
  ...props
}) => {
  return (
    <>
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          title={title}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
        />
      </Wrapper>
    </>
  );
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
