import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const MealModal = ({addMeals}) => {
  const DUMMY_MEALS = [
    {
      id: 1,
      title: 'Sushi',
      description: 'finest fish and veggies',
      price: 22.99,
    },
    {
      id: 4,
      title: 'Green Bowl',
      description: 'finest fish and veggies',
      price: 19.99,
    },
  ];
  return (
    <div style={{ position: 'absolute', top: 750, left: 400 }}>
      <div
        style={{
          width: '671px',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '40px 32px ',
          boxShadow: '1px 1px 5px 1px rgba(0,0,0,0.1)',
        }}
      >
        {DUMMY_MEALS.map((item) => (
          <StyledDivForm key={item.id}>
            <StyledDivUl>
              <ul>
                <li className="title">{item.title}</li>
                <div className="priceInput">
                  <li className="price">${item.price}</li>
                  <input type="number" placeholder="1" id={item.id} />
                </div>
              </ul>
            </StyledDivUl>
            <StyledDivAmount>
              <Button
                className="btnLeft"
                padding="containedplusM"
                text="-"
                size="containedplusM"
                color="containedplusM"
                fontWeight="contained"
                background="containedplusM"
                border="containedplusM"
                borderRadius="containedplusM"
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
              <Button
                padding="containedplusM"
                text="+"
                size="containedplusM"
                color="containedplusM"
                fontWeight="contained"
                background="containedplusM"
                border="containedplusM"
                borderRadius="containedplusM"
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
        <StyleDivFooter>
          <h2>Total Amount</h2>
          <div>
            <p>$200.99</p>
            <div>
              <Button
                //   padding="containedAmond"
                //   text="+ Add"
                //   size="containedAmond"
                //   color="contained"
                //   fontWeight="contained"
                //   background="contained"
                //   border="contained"
                //   borderRadius="contained"
                padding="outlinedAmond"
                text="Order"
                size="outlinedAmond"
                color="outlined"
                fontWeight="outlined"
                background="outlined"
                border="outlined"
                borderRadius="outlined"
                backgroundHover="outlined"
                colorHover="outlined"
              />
              <Button
                //   padding="containedAmond"
                //   text="Close"
                //   size="containedAmond"
                color="contained"
                //   fontWeight="contained"
                background="contained"
                //   border="contained"
                //   borderRadius="contained"
                padding="outlinedAmond"
                text="Close"
                size="outlinedAmond"
                //   color="outlined"
                fontWeight="outlined"
                //   background="outlined"
                border="outlined"
                borderRadius="outlined"
                backgroundHover="outlined"
                colorHover="outlined"
                onClick={() => addMeals()}
              />
            </div>
          </div>
        </StyleDivFooter>
      </div>
    </div>
  );
};

export default MealModal;

const StyledDivForm = styled.div`
  margin-bottom: 24px;
  width: 607px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap;
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 24px;
`;

const StyledDivUl = styled.div`
  ul li {
    list-style: none;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .price {
    font-size: 20px;
    font-weight: bold;
    color: #ad5502;
  }
  .priceInput {
    display: flex;
  }
  input {
    border-radius: 6px;
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    padding-top: 4px;
    padding-left: 9px;
    font-size: 16px;
    margin-left: 47px;
    outline: none;
    cursor: pointer;
  }
`;

const StyledDivAmount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    margin-top: 27px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const StyleDivFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 29px;
  p {
    font-size: 20px;
    font-weight: bold;
    color: #ad5502;
    margin-left: 172px;
    margin-bottom: 24px;
  }
  button {
    margin-left: 16px;
  }
`;
