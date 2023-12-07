import registerStyles from './registerPage.module.css';
import { useForm } from '../../../hooks/useForm';
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';
import { useFormValidate } from '../../../hooks/useFormValidate';

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

    const formType = 'login-register';

    const { validatorsHandler, errors, isFormValid } = useFormValidate(formValues, formType);

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
                    onBlur={validatorsHandler('username')}
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
                    onBlur={validatorsHandler('email')}
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
                    onBlur={validatorsHandler('imageUrl')}
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
                    onBlur={validatorsHandler('age')}
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
                    onBlur={validatorsHandler('password')}
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
                    onBlur={validatorsHandler('rePassword')}
                />

                <input
                    type="submit"
                    value="Submit"
                    disabled={!isFormValid}
                    className={isFormValid ? "submitButton activeButton" : " submitButton disabledButton"}
                />
            </form>
        </section>
    );
}
