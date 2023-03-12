import { useContext, useEffect, useRef, useState } from "react"
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import { useNavigate } from 'react-router-native';
import { Text, View, TextInput, Button, StyleSheet, Image, ScrollView } from "react-native";
import axios from "axios";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';



const IniciarSesion = ({ history }) => {

    history = useNavigate();
    

    const { dispatch } = useContext(AuthContext);

    const [correocliente, setUsuario] = useState('');
    const [contrasenacliente, setContrasena] = useState('');
    const [errorMensaje, setErrorMensaje] = useState('');
    const [success, setSuccess] = useState(false);

    const URLBase = "http://192.168.0.104:44423/api/login/login";
    const URLBaseesp = "http://192.168.0.104:44423/api/login/logine";

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
            if (e.response.status == 404) {
                const responseesp = await axios.post(URLBaseesp, JSON.stringify({ correocliente, contrasenacliente }), {
                    headers: { "content-type": "application/json" }
                })

                console.log("especialista")
                console.log(responseesp)

                dispatch({
                    type: types.login,
                    payload: {
                        name: responseesp.data.nombreespecialista,
                        email: responseesp.data.correoespecialista,
                        idcliente: responseesp.data.idespecialista
                    }
                })

                history("/", { replace: true });
            } else {
                console.log("otro error"+e)
            }
        }
               
    }

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Image
                source={require("../../assets/logo_final.png")}
                resizeMode ="contain"
                style={styles.image}
                />
            <View style={styles.form}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                <Text></Text>
                <Text style={styles.textlabel}>Usuario:</Text>
                <TextInput style={styles.input} 
                    onChangeText={e => setUsuario(e)}
                    value={correocliente}/>
                <Text style={styles.textlabel}>Contraseña:</Text>
                <TextInput style={styles.input} 
                    onChangeText={e => setContrasena(e)}
                    value={contrasenacliente}
                    secureTextEntry/>
                <Text></Text>
                <Button 
                    title="Iniciar Sesión"
                    color="#283890"
                    onPress={handleSubmit} 
                    />
            </View>

        </KeyboardAwareScrollView>
        
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:"100%",
        marginBottom:20,
        marginTop:10
    },
    container:{
        marginHorizontal:10,
        backgroundColor: "#eef5fb",
        marginTop: 50,
        height:"100%"
    },
    error:{
        color: 'red',
    },
    form:{
        paddingHorizontal: 10,
        marginTop:30,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        justifyContent: 'center',
        textAlign: 'center',
        color:'#283890'
    },
    input:{
        borderBottomWidth: 1, 
        borderBottomColor: "#283890",
        marginBottom: 3,
        marginTop:5
    },
    textlabel:{
        color:'#283890',
        marginTop:15,
    }
})

export default IniciarSesion;