import React, {useContext, useState} from 'react';
import styles from './style.module.css'

const Counter = (props) => {


    return (
        <div className={styles.counter}>
            <p className={styles.textCount}>Count: {props.count}</p>
            <button onClick={props.increment} className={styles.Btn}>Inc</button>
            <button onClick={props.decrement} className={styles.Btn}>Dec</button>
        </div>
    );
};

export default Counter;


