import React from 'react';
import styled from 'styled-components';
import UpcomingBook from 'components/organisms/UpcomingBooks/UpcomingBook';
import UpcomingList from 'components/organisms/UpcomingBooks/UpcomingList';
import './App.css';

const SectionWrapper = styled.div`
  height: 300px;
  width: calc(100%-230px);
  background-color: lightblue;
  margin-left: 220px;

  div {
    text-align: center;
  }
`;

const UpcomingView = () => {
  return (
    <>
      <SectionWrapper>
        <div>
          {/*<h2>NOWOSCI </h2>*/}
          <UpcomingList />

          <div className="slider">
            <h2>NOWOSCI </h2>

            <div className="slide" id="slide-1">
              1
            </div>
            <div className="slide" id="slide-2">
              2
            </div>
            <div className="slide" id="slide-3">
              3
            </div>
            <div className="slide" id="slide-4">
              4
            </div>
            <div className="slide" id="slide-5">
              5
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default UpcomingView;
