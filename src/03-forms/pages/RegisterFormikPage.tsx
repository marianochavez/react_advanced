import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css'

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .min(2, 'Must be at least 2 characters')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .min(8, 'Must be 8 characters or more')
                            .required('Required'),
                        password2: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Passwords must match')
                            .required('Required'),
                    })
                }
            >
                {formik => (
                    <Form>
                        <MyTextInput label='Name' name='name' />
                        <MyTextInput label='Email' name='email' type='email' />
                        <MyTextInput label='Password' name='password' type='password' />
                        <MyTextInput label='Confirm Password' name='password2' type='password' />

                        <button type="submit">Register</button>
                        <button type='button' onClick={() => formik.resetForm()}>Reset Form</button>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
