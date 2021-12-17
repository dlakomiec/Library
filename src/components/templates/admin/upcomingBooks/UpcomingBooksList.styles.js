import styled from 'styled-components';

export const BooksWrapper = styled.div`
  margin-left: 220px;
  width: 900px;
  overflow-y: hidden;
  h2 {
    text-align: center;
  }
  div {
    margin: 30px 40px;
    ul {
      display: flex;
      flex-grow: 2;
      flex-wrap: wrap;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
