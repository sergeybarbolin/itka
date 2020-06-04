import React from 'react';
import classNames from 'classnames';

import styles from './FormControl.module.css'

export const FormControl = ({ input, meta, ...props }) => {
    const { formControl, formControlErr } = styles;
    const formControlClass = classNames({
            formControl, 
            [formControlErr]: meta.invalid && meta.touched
    })
    return (
        <div className={formControlClass}>
            { props.type === 'textarea'
                ? <textarea {...input} {...props} />
                : <input {...input} {...props} />
            }
            { meta.invalid && meta.touched && <p className={styles.errMsg}>{ meta.error }</p> }
        </div>
    )
}