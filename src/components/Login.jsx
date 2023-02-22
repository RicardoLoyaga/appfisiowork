import React from "react";
import {Text,View,TextInput, Button} from 'react-native';
import { Formik } from "formik";
import EstilosInput from './EstilosInput';

const initialValues = {
    email:'',
    contrasena: ''
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "El campo es obligatorio"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9·-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Email invalido"
    }

    console.log(errors)
    return errors
}

const Login = () =>{
    return(
        <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({handleChange, handleSubmit, values}) => {
                return (
                    <View style={{paddingHorizontal:30}}>
                        <Text>Usuario:</Text>
                        <EstilosInput value={values.email} onChangeText={handleChange('email')}/>
                        <Text>Contraseña:</Text>
                        <EstilosInput value={values.contrasena} onChangeText={handleChange('contrasena')}/>
                        <Button
                        title="Iniciar Sesión"
                        color="#0D993B"
                        onPress={handleSubmit}
                        />
                    </View>
                )
                   }
            }
        </Formik>
        
    )
}

export default Login