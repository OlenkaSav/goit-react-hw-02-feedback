import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        <Text>Good: {good}</Text>
      </li>
      <li>
        <Text>Neutral: {neutral}</Text>
      </li>
      <li>
        <Text>Bad: {bad}</Text>
      </li>
      <li>
        <Text>Total: {total}</Text>
      </li>
      <li>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </li>
    </ul>
  );
};

const Text = styled.p`
  font-size: 30px;
`;

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistic;
