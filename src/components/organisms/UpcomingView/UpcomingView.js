import React from 'react';
import styled from 'styled-components';
import UpcomingBook from 'components/organisms/UpcomingBooks/UpcomingBook';
import UpcomingList from 'components/organisms/UpcomingBooks/UpcomingList';

const SectionWrapper = styled.div`
  //width: calc(100%-230px);
  //background-color: lightblue;
  margin-left: 220px;
  margin-top: -20px;

  div {
    text-align: center;
  }
`;

const UpcomingView = () => {
  return (
    <>
      <SectionWrapper>
        <div>
          <UpcomingList />
        </div>
      </SectionWrapper>
    </>
  );
};

export default UpcomingView;
