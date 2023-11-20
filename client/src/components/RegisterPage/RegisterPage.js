import registerStyles from './registerPage.module.css';
import { useForm } from '../../hooks/useForm';

export const RegisterPage = ({
    onRegisterSubmit
}) => {

    const { formValues, onChange, onSubmit } = useForm({
        username: '',
        email: '',
        imageUrl: '',
        age: '',
        password: '',
        rePassword: '',
    }, onRegisterSubmit)


    return (
        <section className={registerStyles}>
            <h1>Register form</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={formValues.username}
                    onChange={onChange}
                />

                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={onChange}
                />

                <label htmlFor="imageUrl">Image</label>
                <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    autoComplete="image"
                    value={formValues.imageUrl}
                    onChange={onChange}
                />

                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="age"
                    value={formValues.age}
                    onChange={onChange}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="new-password"
                    value={formValues.password}
                    onChange={onChange}
                />

                <label htmlFor="rePassword">Repeat password</label>
                <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    autoComplete="new-password"
                    value={formValues.rePassword}
                    onChange={onChange}
                />

                <input type="submit" value='Submit' className='submitButton' />
            </form>
        </section>
    );
}
