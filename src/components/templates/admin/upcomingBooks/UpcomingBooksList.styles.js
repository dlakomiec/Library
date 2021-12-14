import styled from 'styled-components';

export const BooksWrapper = styled.div`
  h2 {
    text-align: center;
  }
  div {
    margin: 30px 40px;
    ul {
      border: 1px solid grey;
      display: flex;
      flex-grow: 2;
      flex-wrap: wrap;
    }
  }

  margin-left: 220px;
  width: 900px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
