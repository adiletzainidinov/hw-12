import React from 'react';
import { styled } from 'styled-components';

const Button = ({
  text,
  padding,
  size,
  fontWeight,
  color,
  background,
  border,
  backgroundHover,
  colorHover,
  borderRadius,
  onClick,
}) => {
  return (
    <StyledButton
      style={{
        fontSize: getText(size),
        fontWeight: getFontW(fontWeight),
        color: getColor(color),
        padding: getPadding(padding),
        backgroundColor: getBackground(background),
        border: getBorder(border),
        borderRadius: getBorderRadius(borderRadius),
        transition: 'background-color 0.3s',
      }}
      backgroundHover={backgroundHover}
      colorHover={colorHover}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;

function getText(size) {
  return size === 'contained'
    ? '20px'
    : size === 'containedAmond'
    ? '14px'
    : size === 'outlinedAmond'
    ? '16px'
    : size === 'containedplusM'
    ? '20px'
    : '';
}

function getFontW(fontWeight) {
  return fontWeight === 'contained'
    ? 'bold'
    : fontWeight === 'outlined'
    ? ''
    : '';
}

function getColor(color) {
  return color === 'contained'
    ? 'white'
    : color === 'outlined'
    ? '#8A2B06'
    : color === 'containedplusM'
    ? '#8A2B06'
    : '';
}

function getPadding(padding) {
  return padding === 'contained'
    ? '4px 20px'
    : padding === 'containedAmond'
    ? '10px 24px 10px 16px'
    : padding === 'outlinedAmond'
    ? '10px 32px'
    : padding === 'containedplusM'
    ? '8px 18px'
    : '';
}

function getBackground(background) {
  return background === 'contained'
    ? '#8a2b06'
    : background === 'outlined'
    ? 'none'
    : background === 'containedplusM'
    ? 'none'
    : '';
}

function getBorder(border) {
  return border === 'contained'
    ? 'none'
    : border === 'outlined'
    ? '2px solid #8A2B06'
    : border === 'containedplusM'
    ? '1px solid #8A2B06'
    : '';
}

function getBorderRadius(borderRadius) {
  return borderRadius === 'contained'
    ? '30px'
    : borderRadius === 'outlined'
    ? '30px'
    : borderRadius === 'containedplusM'
    ? '7px'
    : '';
}

function getBackgrounColor(backgroundHover) {
  return backgroundHover === 'outlined' ? '#8A2B06' : '#ceadad';
}

function getColorHover(colorHover) {
  return colorHover === 'outlined' ? 'white' : 'blue';
}

const StyledButton = styled.button`
  &:hover {
    background-color: ${({ backgroundHover }) =>
      getBackgrounColor(backgroundHover)};
    color: ${({ colorHover }) => getColorHover(colorHover)};
  }
`;
