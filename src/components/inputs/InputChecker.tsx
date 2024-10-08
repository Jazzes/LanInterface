import React, {useState} from 'react';
import styles from "./Input.module.scss"

const InputChecker = () => {
    const [agree, setAgree] = useState(false)
    return (
        <div className={styles.checkerContainer + (agree ? " " + styles.checkerTrue : "")}
             onClick={() => setAgree(prevState => !prevState)}>
            <div className={styles.checkerCircle}>
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.00541 0.927634L9.0054 0.927646L3.72334 6.37251L1.75462 4.3431C1.75461 4.3431 1.75461 4.34309 1.7546 4.34308C1.52482 4.10618 1.14902 4.10622 0.91924 4.34308C0.693581 4.5757 0.693597 4.94977 0.919229 5.18238L0.91924 5.18239L3.30568 7.64238C3.53539 7.87917 3.91126 7.87924 4.14104 7.64238L3.9616 7.46831L9.66132 1.59288C9.79289 1.45724 9.79289 1.23735 9.66132 1.10172L9.84077 0.927657C9.84077 0.927654 9.84076 0.92765 9.84076 0.927646C9.61098 0.690768 9.23519 0.690805 9.00541 0.927634Z"
                        fill="white" stroke="white" strokeWidth="0.5"/>
                </svg>
            </div>
        </div>
    );
};

export default InputChecker;