import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {
    const { onLoginSubmit } = useContext(AuthContext);

    const { formValues, onChange, onSubmit } = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section>
            <h1>login</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="email">e-mail</label>
                <input type="text"
                    name="email"
                    id="email"
                    placeholder="John@gmail.com"
                    value={formValues.username}
                    onChange={onChange}
                    autoComplete="current-username" />

                <label htmlFor="password">Password</label>
                <input type="password"
                    name="password"
                    id="password"
                    value={formValues.password}
                    onChange={onChange}
                    autoComplete="current-password"
                />

                <input type="submit" value='Submit' className='submitButton' />
            </form>
        </section>
    )
}