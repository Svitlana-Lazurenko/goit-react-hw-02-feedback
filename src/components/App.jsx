import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['good', 'neutral', 'bad'];

  countTotalFeedback = () => {
    const totalFeedbackArr = Object.values(this.state);
    return totalFeedbackArr.reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = number => {
    return (100 / number) * this.state.good;
  };

  handleIncrement = e => {
    const nameButton = e.target.name;
    this.setState(prevState => ({
      [nameButton]: prevState[nameButton] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <Section>
        <FeedbackOptions
          options={this.options}
          title={'Please, leave feedback'}
          handleIncrement={this.handleIncrement}
        />
        <Statistics
          options={this.options}
          title={'Statistics'}
          state={this.state}
          total={total}
          positivePercentage={positivePercentage}
        />
      </Section>
    );
  }
}

export default App;
