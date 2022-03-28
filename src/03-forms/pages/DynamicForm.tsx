import { Formik, Form } from 'formik';
import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';
import formJson from '../data/customForm.json';
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {

    initialValues[input.name] = input.value || '';

    if (!input.validations) continue;

    let schema = Yup.string();

    for (const rule of input.validations) {

        if (rule.type === 'required') {
            schema = schema.required(
                (rule as any).message || 'Required'
            );
        }

        if (rule.type === 'minLength') {
            schema = schema.min(
                (rule as any).value || 2,
                (rule as any).message || `${input.name} is too short`
            );
        }

        if (rule.type === 'email'){
            schema = schema.email(
                (rule as any).message || `${input.name} is not a valid email`
            );
        }

        // other rules
    }

    requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
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
