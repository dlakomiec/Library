import React, { useState, useEffect } from 'react';
import firebase from 'util/firebase';
import UpcomingBook from './UpcomingBook';
import styled from 'styled-components';
import './App.css';

const BooksWrapper = styled.div`
  //width: 900px;
  //overflow-x: scroll;
  div {
    margin: 30px 40px;
    ul {
      display: flex;
      flex-grow: 2;
      flex-wrap: wrap;
    }
  }
`;

const Wrapper = styled.div`
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
`;

const UpcomingList = () => {
  const [bookList, setbookList] = useState([]);

  useEffect(() => {
    const bookRef = firebase.database().ref('Nadchodzące książki');
    bookRef.on('value', (snapshot) => {
      const books = snapshot.val();
      const arr = [];
      Object.keys(books).forEach((id) => {
        arr.push({ ...books[id], id });
      });
      setbookList(arr);
    });

    return () => {
      setbookList([]);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <BooksWrapper>
          <h2>Nadchodzące</h2>
          {/*<div>*/}
          <div className="slider">
            {/*<ul>*/}
            {bookList
              ? bookList.map((book, index) => (
                  <UpcomingBook className="slide" book={book} key={index} />
                ))
              : ''}
            {/*</ul>*/}
          </div>
        </BooksWrapper>
      </Wrapper>
    </>
  );
};

export default UpcomingList;

//
// import React, { useState, useEffect } from 'react';
// import firebase from 'util/firebase';
// import { BooksWrapper, Wrapper } from './UpcomingBooksList.styles';
// import UpcomingBook from './UpcomingBook';
//
// const UpcomingList = () => {
//   const [bookList, setbookList] = useState([]);
//
//   useEffect(() => {
//     const bookRef = firebase.database().ref('Nadchodzące książki');
//     bookRef.on('value', (snapshot) => {
//       const books = snapshot.val();
//       const arr = [];
//       Object.keys(books).forEach((id) => {
//         arr.push({ ...books[id], id });
//       });
//       setbookList(arr);
//     });
//
//     return () => {
//       setbookList([]);
//     };
//   }, []);
//
//   return (
//       <>
//         <Wrapper>
//           <BooksWrapper>
//             <h2>Nadchodzące</h2>
//             <div>
//               <ul>
//                 {bookList
//                     ? bookList.map((book, index) => (
//                         <UpcomingBook book={book} key={index} />
//                     ))
//                     : ''}
//               </ul>
//             </div>
//           </BooksWrapper>
//         </Wrapper>
//       </>
//   );
// };
//
// export default UpcomingList;
