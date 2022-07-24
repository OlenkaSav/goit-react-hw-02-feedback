import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul>
    {options.map(option => {
      return (
        <li key={option}>
          <button type="button" className={option} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
