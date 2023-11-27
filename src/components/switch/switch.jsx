import React, {useContext} from 'react';
import {ThemeContext} from '../../App';
import styles from './switch.module.css';

const Switch = (props) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={styles.switchLeft}>
            <label className={styles.switch}>
                <input onClick={props.onChange} type='checkbox' className={styles.toggle}/>
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default Switch;


