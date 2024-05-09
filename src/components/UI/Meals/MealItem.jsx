import React from 'react';
import { styled } from 'styled-components';

const MealItem = () => {
  return (
    <StyledDiv>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious <br />
        lunch or dinner at home. <br /> <br />
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by <br />
         experienced chefs!
      </p>
    </StyledDiv>
  );
};

export default MealItem;

const StyledDiv = styled.div`
  width: 854px;
  height: 270px;
  padding: 36px 56px;
  background-color: #383838;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 16px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 358px;
  left: 293px;
  z-index: 2;
  h2 {
    font-size: 36px;
    font-weight: bold;
    color: #ffffff;
  }
  p {
    font-size: 16px;
    color: #ffffff;
    margin-top: 28px;
  }
`;
