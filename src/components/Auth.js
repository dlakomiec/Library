import React, { useEffect, useState } from 'react';
import firebase from 'util/firebase.js';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubcriber = firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });

    return () => {
      unsubcriber();
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      // TODO : wyslanie id jako zapytanie do bazy danych. if respond.role === 'user' userAuth=true respond.role === 'admin' adminAuth=true
      if (currentUser.uid === '4c9qUS6AszNwJJdoio3yRq3Rg2w1') {
        setAdminAuth(true);
      } else {
        setUserAuth(true);
      }
    }
  }, [currentUser]);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userAuth,
        adminAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
