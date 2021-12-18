import React from 'react';

import classes from './Score.module.css';

const LastScore = (props) => {
  return (
    <li className={classes.score}>
      <h2>Your last score</h2>
      <h2>{props.amount}</h2>
      <h3>{props.date}</h3>
    </li>
  );
};

export default LastScore;
