import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

    const { formData, onChange, resetForm, isValidEmail, name, email, password, password2 } = useForm({
        name: 'mariano',
        email: 'mariano@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

    }


    return (
        <div>
            <h1>Register Page</h1>
            <form noValidate onSubmit={onSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}

                <input
                    type="email"
                    name='email'
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                { !isValidEmail(email) && <span>Este email no es valido</span>}

                <input
                    type="password"
                    name='password'
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    />
                {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password.trim().length < 6 
                    && password.trim().length > 0
                    && <span>La contraseña debe tener 6 o más caracteres</span>
                }

                <input
                    type="password"
                    name='password2'
                    placeholder="Repeat Password"
                    value={password2}
                    onChange={onChange}
                    />
                {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password !== password2 && <span>Las contraseñas no coinciden</span>}

                <button type="submit">Register</button>
                <button type='button' onClick={resetForm}>Reset Form</button>
            </form>
        </div>
    )
}
