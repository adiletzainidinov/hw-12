import React from 'react';
import img from './../../../assets/pexels-alexy-almond-3756523 1.png';
import styled from 'styled-components';

const SessionImg = () => {
  return (
    <StyledDiv>
      <img src={img} alt="img" />
    </StyledDiv>
  );
};

export default SessionImg;

const StyledDiv = styled.div`
  height: 432px;
  img {
    height: 432px;
  }
`;
