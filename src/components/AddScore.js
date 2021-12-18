import React, { useRef } from 'react';

import classes from './AddScore.module.css';

function AddScore(props) {
  const amountRef = useRef('');
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  function submitHandler(event) {
    event.preventDefault();

    const score = {
      amount: amountRef.current.value,
      date: date,
    };

    props.onAddScore(score);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Amount</label>
        <input type='number' min='0' id='title' ref={amountRef} />
      </div>
      <button>Add Score</button>
    </form>
  );
}

export default AddScore;
