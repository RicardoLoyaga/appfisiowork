import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import { useNavigate } from 'react-router-native';
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const styles = StyleSheet.create({
    error:{
        color: 'red',
    },
    form:{
        paddingHorizontal: 10,
        marginTop:30,
        backgroundColor: "#E5E8E8"
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        justifyContent: 'center'
    },
    input:{
        borderBottomWidth: 1, 
        borderBottomColor: "#27AE60",
        marginBottom: 1,
    }
})

const IniciarSesion = ({ history }) => {

    history = useNavigate();
    

    const { dispatch } = useContext(AuthContext);

    const [correocliente, setUsuario] = useState('');
    const [contrasenacliente, setContrasena] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [success, setSuccess] = useState(false);

    const URLBase = "http://192.168.0.104:44423/api/login/login";

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await  axios.post(URLBase, JSON.stringify({ correocliente, contrasenacliente }), {
                headers: { "content-type": "application/json" }
            })

            console.log(response.data)

            dispatch({
                type: types.login,
                payload: {
                    name: response.data.nombrecliente,
                    email: response.data.correocliente
                }
            })

            history("/", { replace: true });

        } catch (e) {
            console.log(e)
        }
               
    }

    return (
        <View style={styles.form}>
            <Text style={{fontWeight: "bold"}}>Iniciar Sesión</Text>
            <Text></Text>
            <Text>Usuario:</Text>
            <TextInput style={styles.input} 
                onChangeText={e => setUsuario(e)}
                value={correocliente}/>
            <Text>Contraseña:</Text>
            <TextInput style={styles.input} 
                onChangeText={e => setContrasena(e)}
                value={contrasenacliente}
                secureTextEntry/>
            <Text></Text>
            <Button 
                title="Iniciar Sesión"
                color="#0D993B"
                onPress={handleSubmit} 
                style={{marginTop: 10}}/>
        </View>
    )
}

export default IniciarSesion;