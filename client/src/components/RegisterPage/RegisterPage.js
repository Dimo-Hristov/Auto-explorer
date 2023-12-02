import registerStyles from './registerPage.module.css';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext, useState } from 'react';
import * as validators from '../../validators/formValidator';

export const RegisterPage = () => {
    const { onRegisterSubmit } = useContext(AuthContext)

    const { formValues, onChange, onSubmit } = useForm({
        username: '',
        email: '',
        imageUrl: '',
        age: '',
        password: '',
        rePassword: '',
    }, onRegisterSubmit);

    const [errors, setErrors] = useState({});

    const validatorsHandlers = (fieldName) => {
        return () => {
            switch (fieldName) {
                case 'username':
                    validators.username(formValues, errors, setErrors, fieldName);
                    break;

                case 'email':
                    validators.email(formValues, errors, setErrors, fieldName);
                    break;

                case 'imageUrl':
                    validators.imageUrl(formValues, errors, setErrors, fieldName);
                    break;

                case 'age':
                    validators.age(formValues, errors, setErrors, fieldName);
                    break;

                case 'password':
                    validators.password(formValues, errors, setErrors, fieldName);
                    break;

                case 'rePassword':
                    validators.rePassword(formValues, errors, setErrors, fieldName);
                    break;

                default:
                    break;
            }
        };
    };


    return (
        <section className={registerStyles}>
            <h1>Register</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                {errors.username && (
                    <p>{errors.username}</p>
                )}
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={formValues.username}
                    onChange={onChange}
                    onBlur={validatorsHandlers('username')}
                />


                <label htmlFor="email">Email</label>
                {errors.email && (
                    <p>{errors.email}</p>
                )}
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={onChange}
                    onBlur={validatorsHandlers('email')}
                />

                <label htmlFor="imageUrl">Image URL</label>
                {errors.imageUrl && (
                    <p>{errors.imageUrl}</p>
                )}
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    autoComplete="image"
                    value={formValues.imageUrl}
                    onChange={onChange}
                    onBlur={validatorsHandlers('imageUrl')}
                />

                <label htmlFor="age">Age</label>
                {errors.age && (
                    <p>{errors.age}</p>
                )}
                <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="age"
                    value={formValues.age}
                    onChange={onChange}
                    onBlur={validatorsHandlers('age')}
                />

                <label htmlFor="password">Password</label>
                {errors.password && (
                    <p>{errors.password}</p>
                )}
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    value={formValues.password}
                    onChange={onChange}
                    onBlur={validatorsHandlers('password')}
                />

                <label htmlFor="rePassword">Repeat password</label>
                {errors.rePassword && (
                    <p>{errors.rePassword}</p>
                )}
                <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    autoComplete="new-password"
                    value={formValues.rePassword}
                    onChange={onChange}
                    onBlur={validatorsHandlers('rePassword')}
                />

                <input
                    type="submit"
                    value="Submit"
                    className={`submitButton ${Object.values(errors).some(error => error !== '') ? 'disabled' : 'active'}`}
                    disabled={Object.values(errors).some(error => error !== '')}
                />
            </form>
        </section>
    );
}
