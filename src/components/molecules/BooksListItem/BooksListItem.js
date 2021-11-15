import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import React from 'react';
import { BookWrapper } from './BookListItem.styles';

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
