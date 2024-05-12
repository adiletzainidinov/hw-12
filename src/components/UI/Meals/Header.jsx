import React, { useState } from 'react';
import Button from '../Button';
import { styled } from 'styled-components';

const Header = ({ selectMeal,card }) => {
  const [isCard, setIsCard] = useState(false);

  function handleCard() {
    setIsCard((prev) => !prev);
  }

  return (
    <>
      <StyledDivPapa onClick={handleCard}>
        <StyledDiv className="container">
          <h1>ReactMeals</h1>
          <StyledDivButton>
            <p>
              <ion-icon name="cart-outline"></ion-icon>
            </p>
            <h2>Your Cart</h2>
            <Button
              padding="contained"
              text={selectMeal.length}
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
      <StyledDivPapaMeal>
        {' '}
        {isCard  &&
          selectMeal.map((item) => (
            <StyledDivMeal id={item.id}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h5>{item.price}</h5>
            </StyledDivMeal>
          ))}
      </StyledDivPapaMeal>
    </>
  );
};

export default Header;

const StyledDivPapaMeal = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  position: absolute;
  background-color: #00000095;
  z-index: 200;
  padding: 20px 20px 0 20px;
  border-radius: 20px;
`;

const StyledDivPapa = styled.div`
  background-color: #8a2b06;
  cursor: pointer;
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

const StyledDivMeal = styled.div`
  width: 400px;
  margin-bottom: 20px;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-style: italic;
  }
  h5 {
    color: #ac6950;
    font-size: 18px;
  }
`;
