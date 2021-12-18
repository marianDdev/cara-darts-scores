import React from 'react';

import classes from './Score.module.css';

const AverageScore = (props) => {
  return (
    <li className={classes.score}>
      <h2>Your average score</h2>
      <h2>{props.title}</h2>
    </li>
  );
};

export default AverageScore;
