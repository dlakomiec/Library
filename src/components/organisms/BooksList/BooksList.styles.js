import styled from 'styled-components';

export const BooksWrapper = styled.div`
  h2 {
    text-align: center;
  }
  div {
    margin: 30px 40px;
    ul {
      display: flex;
      flex-grow: 2;
      flex-wrap: wrap;
      /* padding: 20px 30px; */
    }
  }
  /* display: flex; */
  /* height: 100vh; */
  margin-left: 220px;
  width: 900px;
  /* background-color: #eff2f1; */
  /* overflow-y: scroll; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
