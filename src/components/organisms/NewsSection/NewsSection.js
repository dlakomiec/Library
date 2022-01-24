import React from 'react';
import styled from 'styled-components';
import { cms } from 'assets/cms';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const DivWrapper = styled.div`
  height: 600px;
  width: 45%;
  margin: 15px;
  img {
    background-size: cover;
    background-color: black;
    height: 270px;
    width: 100%;
  }
`;

const NewsSection = () => {
  return (
    <>
      <h2>Co nowego u nas? </h2>
      <Wrapper>
        <DivWrapper>
          <img src={cms.images.oldBook} />
          <h3>What is Lorem Ipsum?</h3>
          <p>{cms.texts.one}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book1} />
          <h3>Why do we use it?</h3>
          <p>{cms.texts.two}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book2} />
          <h3>Where does it come from?</h3>
          <p>{cms.texts.eight}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book3} />
          <h3>Where can I get some?</h3>
          <p>{cms.texts.three}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book4} />
          <h3>The standard Lorem Ipsum passage, used since the 1500s</h3>
          <p>{cms.texts.four}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book5} />
          <h3>
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>{cms.texts.five}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book6} />
          <h3>1914 translation by H. Rackham </h3>
          <p>{cms.texts.six}</p>
        </DivWrapper>
        <DivWrapper>
          <img src={cms.images.book7} />
          <h3>
            Section 1.10.33 of "de Finibus Bonorum et Malorum", written by
            Cicero in 45 BC
          </h3>
          <p>{cms.texts.seven}</p>
        </DivWrapper>
      </Wrapper>
    </>
  );
};

export default NewsSection;
