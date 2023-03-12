import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet,SafeAreaView,View, Image } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import ObtenerDatosEspecialistaPorCorreo from "./ObtenerDatosEspecialistaPorCorreo";


const PerfilEspecialista = () => {

    const { user } = useContext(AuthContext);

    const email = user.email;
    const [datos, setDatos] = useState('');

    const datosObtenidos = async () => {
        const obtieneDatos = await ObtenerDatosEspecialistaPorCorreo(email);
        setDatos(obtieneDatos);
    }

    //console.log(datos.fotocliente)

    useEffect(() => {
        datosObtenidos();
    }, [])

    return(
        <SafeAreaView style={{marginHorizontal:10,}}>
            <Image 
                source={{uri: `data:image/jpeg;base64,${datos.fotoespecialista}`}}
                style={{ widht: 250 , height: 250,  
                    resizeMode: 'contain'}}/>
            <View style={styles.container}>
                
                <Text style={styles.textEncabezados}>Nombres Completos: </Text>
                <Text style={styles.text}> {datos.nombreespecialista} {datos.apellidocliente}</Text>
                <Text style={styles.textEncabezados}>Dirección domiciliaria: </Text>
                <Text style={styles.text}>{datos.direccionespecialista}</Text>
                <Text style={styles.textEncabezados}>Correo electrónico: </Text>
                <Text style={styles.text}>{datos.correoespecialista}</Text>
                <Text style={styles.textEncabezados}>Fecha de nacimiento: </Text>
                <Text style={styles.text}>{datos.fechanacimientoespecialista}</Text>
                <Text style={styles.textEncabezados}>Identificación: </Text>
                <Text style={styles.text}>{datos.identificacionespecialista}</Text>
                <Text style={styles.textEncabezados}>Teléfono de contacto: </Text>
                <Text style={styles.text}>{datos.telefonoespecialista}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f2f1',
        paddingTop: 10,
        paddingBottom:5,
        paddingLeft: 10,
        marginBottom: 3,
        marginTop: 3
    },
    text:{
        color: "#283890"        
    },
    textEncabezados:{
        color: "#283890",
        fontWeight: 'bold',        
    }
})

export default PerfilEspecialista