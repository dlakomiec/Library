// import React, { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
// import {
//   LoginWrapper,
//   RightDiv,
//   LeftDiv,
//   LoginButton,
// } from './LoginSite.styles';

// const LoginSite = () => {
//   const [formValue, setFormValue] = useState({
//     login: '',
//     password: '',
//   });

//   const handleInputCHange = (e) => {
//     console.log(formValue);

//     setFormValue({
//       ...formValue,
//       [e.target.name]: e.target.value,
//     });
//   };
//   return (
//     <>
//       <LoginWrapper>
//         <LeftDiv />
//         <RightDiv>
//           <h1>ksiegarnia</h1>
//           <form>
//             <label>
//               <input
//                 type="text"
//                 name="login"
//                 value={formValue.name}
//                 onChange={handleInputCHange}
//               />
//             </label>
//             <label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formValue.name}
//                 onChange={handleInputCHange}
//               />
//             </label>
//             {/* <input type="submit" value="Wyślij" /> */}
//             {/* <LoginButton>Zaloguj</LoginButton> */}

//             <LoginButton>
//               <Link to="/dashboard">Dalej cho</Link> {/* wywlic pozniej */}
//             </LoginButton>
//           </form>
//         </RightDiv>
//       </LoginWrapper>
//     </>
//   );
// };

// export default LoginSite;

import React, { useState, useCallback, useContext } from 'react';
import {
  LoginWrapper,
  LeftDiv,
  RightDiv,
  LoginButton,
  SignInButton,
} from './LoginSite.styles';
import { Link } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router';
import firebase from 'util/firebase';
import { AuthContext } from 'components/Auth';

const LoginSite = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>
      <LoginWrapper>
        <LeftDiv />
        <RightDiv>
          <h1>ksiegarnia</h1>
          <form onSubmit={handleLogin}>
            <label>
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              <input name="password" type="password" placeholder="Password" />
            </label>
            {/* <LoginButton>
              <Link to="/dashboard">Dalej cho</Link>
            </LoginButton> */}
            <LoginButton type="submit">Zaloguj sie</LoginButton>
            <Link to="/signup">
              <SignInButton>Zarejestruj sie</SignInButton>
            </Link>
          </form>
        </RightDiv>
      </LoginWrapper>
    </>
  );
};

export default LoginSite;
