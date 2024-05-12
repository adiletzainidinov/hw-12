import React, { useState } from 'react';
import Header from './Header';
import SessionImg from './SessionImg';
import MealItem from './MealItem';
import { styled } from 'styled-components';
import MealItemForm from './MealItemForm';
import MealModal from '../../Meal-modal/MealModal';

const Meals = () => {
  const [isAddTrue, setIsAddTrue] = useState(false);
  const [selectMeal, setSelectMeal] = useState([]);
  const [card, setCard] = useState(false);

  const DUMMY_MEALS = [
    {
      id: 1,
      title: 'Sushi',
      description: 'finest fish and veggies',
      price: 22.99,
      initialPrice: 22.99,
    },
    {
      id: 2,
      title: 'Pizza',
      description: 'finest fish and veggies',
      price: 16.0,
      initialPrice: 16.0,
    },
    {
      id: 3,
      title: 'Barbecue',
      description: 'finest fish and veggies',
      price: 12.99,
      initialPrice: 12.99,
    },
    {
      id: 4,
      title: 'Green Bowl',
      description: 'finest fish and veggies',
      price: 19.99,
      initialPrice: 19.99,
    },
  ];

  function addMeals(id) {
    const selectedMeal = DUMMY_MEALS.find((item) => item.id === id); // Находим выбранное блюдо по id
    if (selectedMeal) {
      setSelectMeal([...selectMeal, selectedMeal]); // Добавляем выбранное блюдо к списку selectMeal
      setIsAddTrue((prev) => !prev);
    }
  }

  function handleClose() {
    setIsAddTrue((prev) => !prev);
  }

  function handleOrder() {
    setCard((prev) => !prev);
    setIsAddTrue((prev) => !prev);
    selectMeal;
  }
  return (
    <>
      <StyledDiv>
        <Header handleOrder={handleOrder} selectMeal={selectMeal} card={card} />
        <SessionImg />
        <MealItem />
        <MealItemForm
          addMeals={addMeals}
          isAddTrue={isAddTrue}
          DUMMY_MEALS={DUMMY_MEALS}
        />
        {isAddTrue && (
          <MealModal
            handleClose={handleClose}
            selectMeal={selectMeal}
            addMeals={addMeals}
            DUMMY_MEALS={DUMMY_MEALS}
            handleOrder={handleOrder}
            setSelectMeal={setSelectMeal}
          />
        )}
      </StyledDiv>
    </>
  );
};

export default Meals;

const StyledDiv = styled.div`
  position: relative;
`;
