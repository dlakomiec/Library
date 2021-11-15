import React from 'react';
import styled from 'styled-components';

const BookWrapper = styled.div`
  margin-bottom: 25px;
  ol {
    div {
      span {
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

const BooksListItem = ({ bookData: { title, author, genre } }) => (
  <BookWrapper>
    <ol>
      <div>
        <span>tytuł: </span>
        {title}
      </div>
      <div>
        <span>autor: </span>
        {author}
      </div>
      <div>
        <span>{genre}</span>
      </div>
    </ol>
  </BookWrapper>
);

export default BooksListItem;
