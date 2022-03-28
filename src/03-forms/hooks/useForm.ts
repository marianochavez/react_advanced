import { ChangeEvent, useState } from "react";

// T va a ser el tipo de dato que se va a manejar, 
// en este caso es un objeto que contiene los datos del formulario
export const useForm = <T>(initState: T) => {

    const [formData, setFormDate] = useState(initState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        setFormDate({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const resetForm = () => {
        setFormDate(initState);
    }

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        isValidEmail,
    }
};