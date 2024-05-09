import React from 'react';
import Button from '../Button';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <StyledDivPapa>
      <StyledDiv className="container">
        <h1>ReactMeals</h1>
        <StyledDivButton>
          <p>
            <ion-icon name="cart-outline"></ion-icon>
          </p>
          <h2>Your Cart</h2>
          <Button
            padding="contained"
            text="7"
            size="contained"
            color="contained"
            fontWeight="contained"
            background="contained"
            border="contained"
            borderRadius="contained"
          />
        </StyledDivButton>
      </StyledDiv>
    </StyledDivPapa>
  );
};

export default Header;

const StyledDivPapa = styled.div`
  background-color: #8a2b06;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  h1 {
    font-size: 38px;
    font-weight: bold;
    color: #ffffff;
  }
`;

const StyledDivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 249px;
  height: 59px;
  border-radius: 30px;
  background-color: #5a1f08;
  padding: 12px 32px;
  p {
    color: #ffffff;
    font-size: 20px;
    margin-top: 5px;
  }
  h2 {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    margin-right: 24px;
    margin-left: 5px;
  }
`;
