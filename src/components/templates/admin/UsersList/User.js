import React from 'react';
import firebase from 'util/firebase';
import styled from 'styled-components';

const User = ({ user, ...props }) => {
  const UserWrapper = styled.div`
    margin-bottom: 40px;
    span {
      font-weight: bold;
    }
  `;

  return (
    <UserWrapper>
      <p>
        Imie: <span>{user.name} </span>
      </p>
      <p>
        Email: <span>{user.emailAdress}</span>
      </p>
    </UserWrapper>
  );
};

export default User;
