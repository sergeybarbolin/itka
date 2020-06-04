import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { FormControl } from "../common/FormControl/FormControl";
import { loginUser } from '../../redux/auth-reducer';
import { required, email } from './../../utils/validate';


let LoginForm = props => {
    return (
        <div className="login-form">
            <form onSubmit={ props.handleSubmit }>
                <div className="field">
                    <Field component={FormControl} validate={[required, email]} type="email" name="email" placeholder="E-mail"/>
                </div>
                <div className="field">
                    <Field component={FormControl} validate={required} type="password" name="password" placeholder="Пароль"/>
                </div>
                <div className="fiekd">
                    <label htmlFor="rememberMe">Запомнить мення</label>
                    <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                    />
                </div>
                <button type="submit">Войти</button>
                <p>{ props.error }</p>
            </form>
        </div>
    )
}

LoginForm = reduxForm({ form: 'login' })(LoginForm)

let ContainerLoginForm = props => {
    const submit = values => {
        props.loginUser(values);
    }

    return <LoginForm {...props} onSubmit={ submit } />
}

ContainerLoginForm = compose(
    connect(state => state.auth, { loginUser })
)(ContainerLoginForm)


const Login = () => <ContainerLoginForm />
export default Login;