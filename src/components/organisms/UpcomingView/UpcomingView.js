import React from 'react';
import styled from 'styled-components';
import UpcomingBook from 'components/organisms/UpcomingBooks/UpcomingBook';
import UpcomingList from 'components/organisms/UpcomingBooks/UpcomingList';
import NewsSection from 'components/organisms/NewsSection/NewsSection';

const SectionWrapper = styled.div`
  //width: calc(100%-230px);
  //background-color: lightblue;
  margin-left: 220px;
  margin-top: -20px;
  //padding-right: 20px;
  //padding-top: 50px;

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
          <NewsSection />
        </div>
      </SectionWrapper>
    </>
  );
};

export default UpcomingView;
