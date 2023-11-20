import registerStyles from './registerPage.module.css';
import { useState } from 'react';

export const RegisterPage = () => {
    const formValues = {
        username: '',
        email: '',
        imageUrl: '',
        age: '',
        password: '',
        rePassword: '',
    }

    const [values, setValues] = useState(formValues);

    const onRegisterSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const onChange = (e) => {
        setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
    }

    return (
        <section className={registerStyles}>
            <h1>Register form</h1>

            <form onSubmit={onRegisterSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={values.username}
                    onChange={onChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={onChange}
                />

                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    autoComplete="image"
                    value={values.imageUrl}
                    onChange={onChange}
                />

                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="age"
                    value={values.age}
                    onChange={onChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    value={values.password}
                    onChange={onChange}
                />

                <label htmlFor="rePassword">Repeat password</label>
                <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    autoComplete="new-password"
                    value={values.rePassword}
                    onChange={onChange}
                />

                <input type="submit" value='Submit' className='submitButton' />
            </form>
        </section>
    );
}
