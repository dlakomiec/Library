import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import firebase from 'util/firebase';
import User from './User';
import AdminNavigation from 'components/templates/admin/AdminNavigation/AdminNavigation';

const Wrapper = styled.div`
  padding-top: 50px;
  padding: 50px 0 0 220px;
  h3 {
    text-align: center;
  }
`;

const UsersList = () => {
  const [userList, setuserList] = useState([]);

  useEffect(() => {
    const bookRef = firebase.database().ref('Użytkownicy');
    bookRef.on('value', (snapshot) => {
      const books = snapshot.val();
      const arr = [];
      Object.keys(books).forEach((id) => {
        arr.push({ ...books[id], id });
      });
      setuserList(arr);
    });

    return () => {
      setuserList([]);
    };
  }, []);

  return (
    <>
      <AdminNavigation />
      <Wrapper>
        <h3>Użytkownicy</h3>
        <div>
          <div>
            <ul>
              {userList
                ? userList.map((user, index) => (
                    <User user={user} key={index} />
                  ))
                : ''}
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default UsersList;
