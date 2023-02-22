import React from "react";
import {Text,View,TextInput, Button} from 'react-native';

const Login = () =>{
    return(
        <View>
            <Text>Usuario</Text>
            <TextInput/>
            <Text>Contraseña</Text>
            <TextInput/>
            <Button
            title="Iniciar Sesión"
            color="#0D993B"
            onPress={() => Alert.alert('Simple Button pressed')}
            />
        </View>
    )
}

export default Login