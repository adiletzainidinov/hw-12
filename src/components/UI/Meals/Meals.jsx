import React, { useState } from 'react';
import Header from './Header';
import SessionImg from './SessionImg';
import MealItem from './MealItem';
import { styled } from 'styled-components';
import MealItemForm from './MealItemForm';
import MealModal from '../../Meal-modal/MealModal';

const Meals = () => {
  const [isAddTrue, setIsAddTrue] = useState(false);

  function addMeals() {
    setIsAddTrue((prev) => !prev);
  }
  console.log(isAddTrue);
  return (
    <>
      <StyledDiv>
        <Header />
        <SessionImg />
        <MealItem />
        <MealItemForm addMeals={addMeals} isAddTrue={isAddTrue} />
        {isAddTrue && <MealModal addMeals={addMeals}  />}
      </StyledDiv>
    </>
  );
};

export default Meals;

const StyledDiv = styled.div`
  position: relative;
`;
