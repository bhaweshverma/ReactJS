import React from 'react';
import styles from './ButtonWithModuleCSS.module.css';

const ButtonWithModuleCSS = () => {
    return (
        <div><button type="button" className={[styles.btn, styles["btn-primary"]].join(' ')}>My Button</button></div>
    )
}

export default ButtonWithModuleCSS