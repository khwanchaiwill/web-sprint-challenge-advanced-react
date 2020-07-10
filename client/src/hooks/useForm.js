// write your custom hook here to control your checkout form
import {useState} from 'react'

export const useForm = initialValues => {
    const [valuse, setValues] = useState(initialValues);


    const handleChanges = e =>{
        setValues({
            ...valuse, [e.target.name]: e.target.value
        });
    }
 
    return [valuse, handleChanges]
}