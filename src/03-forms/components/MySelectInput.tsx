import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any;
}

interface optionProps {
    value: string;
    label: string;
}

export const MySelectInput = ({ label, ...props }: Props) => {

    const [field] = useField(props);

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field}  {...props}>
                <option value="">Pick something</option>
                {
                    props.options.map(({ value, label }: optionProps) => (
                        <option key={value} value={value}>{label}</option>
                    ))
                }
            </select>
            <ErrorMessage name={props.name} component="span" />
        </>
    )
}
