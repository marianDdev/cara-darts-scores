import React, { useRef } from 'react';

import classes from './AddScore.module.css';

function AddScore(props) {
  const amountRef = useRef('');
  const dateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const score = {
      amount: amountRef.current.value,
      date: dateRef.current.value,
    };

    props.onAddScore(score);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Amount</label>
        <input type='text' id='title' ref={amountRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Date</label>
        <input type='text' id='date' ref={dateRef} />
      </div>
      <button>Add Score</button>
    </form>
  );
}

export default AddScore;
