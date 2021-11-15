import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
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

const BooksListItem = ({ deleteBook, bookData: { title, author, genre } }) => (
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
      <DeleteButton onClick={() => deleteBook(title)} />
    </ol>
  </BookWrapper>
);

export default BooksListItem;
