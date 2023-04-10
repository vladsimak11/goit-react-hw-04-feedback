import React, { useState } from "react";
import css from './App.module.css';
import {Statistics} from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from './Section/Section';

let total = 0;
let positivePercentage = 0;

const options = ['Good', 'Neutral', 'Bad'];
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleClick = (value) => {
    value = value.toLowerCase();

    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;

      case 'bad':
        setBad(prevState => prevState + 1)
        break;    
    
      default:
        console.log('0');
        break;
    }
  }

  const countTotalFeedback = () => {
    total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    positivePercentage = total && Math.round(good * 100 / total);
    return positivePercentage;
  }

  return (
    <div className={css.block}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options}  onLeaveFeedback={handleClick} />
      </Section>

      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
        </Section>
      </div>
    )
  
}

