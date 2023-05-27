import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
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
    return Math.round((100 / number) * this.state.good);
  };

  handleIncrement = e => {
    const btnName = e.currentTarget.name;
    this.setState(prevState => ({
      [btnName]: prevState[btnName] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    return (
      <>
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions
            options={this.options}
            handleIncrement={this.handleIncrement}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            options={this.options}
            state={this.state}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </>
    );
  }
}
