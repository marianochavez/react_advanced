import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelectInput, MyCheckboxInput } from '../components'

import '../styles/styles.css';

export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        lastName: Yup.string()
                            .max(10, 'Must be 10 characters or less')
                            .required('Required'),
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        terms: Yup.boolean()
                            .oneOf([true], 'You must accept the terms and conditions'),
                        jobType: Yup.string()
                            .notOneOf(['it-jr'], 'Job not available')
                            .required('Required'),
                    })
                }
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label='FirstName'
                            name='firstName'
                            placeholder='First Name'
                        />
                        <MyTextInput
                            label='LastName'
                            name='lastName'
                            placeholder='Last Name'
                        />
                        <MyTextInput
                            label='Email'
                            name='email'
                            placeholder='user@email.com'
                            type='email'
                        />

                        <MySelectInput
                            label='Job Type'
                            name='jobType'
                            options={[
                                { value: 'it-jr', label: 'Junior IT' },
                                { value: 'it-sr', label: 'Senior IT' },
                                { value: 'it-arch', label: 'IT Architect' },
                            ]}
                        />

                        <MyCheckboxInput
                            label='Accept Terms'
                            name='terms'
                        />

                        <button type='submit'>Submit</button>
                    </Form>
                )
                }
            </Formik>
        </div>
    )
}
