import styled from 'styled-components';

export const WrapperBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 300px;
  margin: 15px 0 0 0;

  p {
    span {
      font-weight: bold;
    }
  }
`;

export const DownloadButton = styled.button`
  border: 1px solid grey;
  list-style: none;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: black;
  }
`;
