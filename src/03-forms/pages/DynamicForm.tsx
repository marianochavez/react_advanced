import { Formik, Form } from 'formik';
import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';
import formJson from '../data/customForm.json';
import { validationSchema } from '../validations/validationSchema';

const initialValues: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;
}

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema(formJson)}
            >
                {(formik) => (
                    <Form noValidate>
                        {
                            formJson.map(({ type, name, placeholder, label, options }) => {


                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return (
                                        <MyTextInput
                                            key={name}
                                            type={(type as any)}
                                            name={name}
                                            label={label}
                                            placeholder={placeholder}
                                        />
                                    )
                                } else if (type === 'select') {
                                    return (
                                        <MySelectInput
                                            key={name}
                                            label={label}
                                            name={name}
                                            options={options}
                                        />
                                    )
                                } else if (type === 'checkbox') {
                                    return (
                                        <MyCheckboxInput
                                            key={name}
                                            label={label}
                                            name={name}
                                        />
                                    )
                                }

                                throw new Error(`Unsupported input type: ${type}`);

                            })
                        }
                        <button type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
