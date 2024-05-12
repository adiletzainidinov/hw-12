import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button';

const MealItemForm = ({ addMeals, isAddTrue, DUMMY_MEALS }) => {

  return (
    <StyledDiv>
      {!isAddTrue && (
        <div
          style={{
            width: '1039px',
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px ',
            boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
          }}
        >
          {DUMMY_MEALS.map((item) => (
            <StyledDivForm key={item.id}>
              <StyledDivUl>
                <ul>
                  <li className="title">{item.title}</li>
                  <li className="text">{item.description}</li>
                  <li className="price">${item.price}</li>
                </ul>
              </StyledDivUl>
              <StyledDivAmount>
                <div className="amount">
                  <label htmlFor={item.id}>Amount</label>
                  <input type="number" placeholder="1" id={item.id} />
                </div>
                <Button
                  padding="containedAmond"
                  text="+ Add"
                  size="containedAmond"
                  color="contained"
                  fontWeight="contained"
                  background="contained"
                  border="contained"
                  borderRadius="contained"
                  onClick={() => addMeals(item.id)} // Передаем весь объект элемента

                  // padding="outlinedAmond"
                  // text="+ Add"
                  // size="outlinedAmond"
                  // color="outlined"
                  // fontWeight="outlined"
                  // background="outlined"
                  // border="outlined"
                  // borderRadius="outlined"
                  // backgroundHover="outlined"
                  // colorHover="outlined"
                />
              </StyledDivAmount>
            </StyledDivForm>
          ))}
        </div>
      )}
    </StyledDiv>
  );
};

export default MealItemForm;

const StyledDiv = styled.div`
  height: 799px;
  background-color: #3f3f3f;
  padding: 135px 200px 100px 201px;
`;

const StyledDivForm = styled.div`
  margin-bottom: 24px;
  width: 949px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 20px;
`;

const StyledDivUl = styled.div`
  ul li {
    list-style: none;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }
  .text {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 4px;
  }
  .price {
    font-size: 20px;
    font-weight: bold;
    color: #ad5502;
  }
`;

const StyledDivAmount = styled.div`
  .amount {
    display: flex;
  }
  label {
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  input {
    border-radius: 6px;
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    padding-top: 4px;
    padding-left: 9px;
    font-size: 16px;
    margin-left: 20px;
    outline: none;
    cursor: pointer;
  }
  button {
    margin-top: 12px;
    margin-left: 72px;
    cursor: pointer;
  }
`;
