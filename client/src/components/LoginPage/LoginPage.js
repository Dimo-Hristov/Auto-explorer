import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useFormValidate } from "../../hooks/useFormValidate";

export const LoginPage = () => {
    const { onLoginSubmit } = useContext(AuthContext);

    const { formValues, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    const formType = 'login-register'
    const { validatorsHandler, errors } = useFormValidate(formValues, formType);



    return (
        <section>
            <h1>login</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="email">e-mail</label>
                {errors.email && (
                    <p>{errors.email}</p>
                )}
                <input type="text"
                    name="email"
                    id="email"
                    placeholder="John@gmail.com"
                    value={formValues.email}
                    onChange={onChange}
                    autoComplete="current-username"
                    onBlur={validatorsHandler('email')}
                />

                <label htmlFor="password">Password</label>
                {errors.password && (
                    <p>{errors.password}</p>
                )}
                <input type="password"
                    name="password"
                    id="password"
                    value={formValues.password}
                    onChange={onChange}
                    autoComplete="current-password"
                    onBlur={validatorsHandler('password')}
                />

                <input
                    type="submit"
                    value="Submit"
                    className={`submitButton ${Object.values(errors).some(error => error !== '') ? 'disabled' : 'active'}`}
                />
            </form>
        </section>
    )
}