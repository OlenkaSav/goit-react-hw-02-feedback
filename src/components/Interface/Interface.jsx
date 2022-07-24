import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';
import Notification from './Notification';
import Section from './Section';

class Interface extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    const index = event.target.name;
    this.setState(prevState => {
      return { [index]: prevState[index] + 1 };
    });
  };

  countTotalFeedback() {
    const arrayTotalCount = Object.values(this.state);
    const total = arrayTotalCount.reduce((acc, typeNumber) => {
      return acc + typeNumber;
    }, 0);
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const persentage = Math.floor((good * 100) / this.countTotalFeedback());
    return persentage;
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title={'Leave your feedback please'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          {total === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Interface;
