import * as Yup from 'yup';


interface JsonForm extends Array<Field> { }

interface ValidationsArray extends Array<Validation> { };

interface Field {
    type: string;
    name: string;
    label: string;
    placeholder?: string;
    value?: string;
    validations?: ValidationsArray;
}

interface Validation {
    type: string;
    message?: string;
    value?: number;
}

const requiredFields: { [key: string]: any } = {};

export const validationSchema = (formJson: JsonForm) => {
    for (const input of formJson) {

        if (!input.validations) continue;

        // Todos los campos van a ser string
        let schema = Yup.string();

        for (const rule of input.validations) {

            if (rule.type === 'required') {
                schema = schema.required(
                    rule.message || 'Required'
                );
            }

            if (rule.type === 'minLength') {
                schema = schema.min(
                    rule.value || 2,
                    rule.message || `Min length ${rule.value}`
                );
            }

            if (rule.type === 'maxLength') {
                schema = schema.max(
                    rule.value || 10,
                    rule.message || `Max length ${rule.value}`
                );
            }

            if (rule.type === 'email') {
                schema = schema.email(
                    rule.message || `${input.name} is not a valid email`
                );
            }

            // other rules
        }

        requiredFields[input.name] = schema;
    }
    
    return Yup.object({ ...requiredFields });

}