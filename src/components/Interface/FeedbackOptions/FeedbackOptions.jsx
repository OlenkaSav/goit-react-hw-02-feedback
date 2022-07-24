import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => {
      return (
        <li key={option}>
          <Button type="button" name={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        </li>
      );
    })}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

const handleColorType = option => {
  switch (option) {
    case 'good':
      return '#067b06';
    case 'neutral':
      return '#e19420';
    case 'bad':
      return '#f71717';
    default:
      return '#fff';
  }
};

const Button = styled.button`
  color: ${({ name }) => handleColorType(name)};
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 10px;
  padding: 5px 10px;
  border: 3px solid blue;
  border-radius: 10px;
`;

const List = styled.ul`
  display: flax;
  justify-content: center;
`;

export default FeedbackOptions;
