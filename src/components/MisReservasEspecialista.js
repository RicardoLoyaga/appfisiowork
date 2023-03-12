import React, { useContext, useEffect, useState } from "react";
import { Text, StyleSheet,SafeAreaView,View, Image,FlatList } from "react-native";
import { AuthContext } from "../auth/AuthContext";
import ListaMisReservas from "./ListaMisReservas";
import ObtenerDatosEspecialistaPorCorreo from "./ObtenerDatosEspecialistaPorCorreo";


const MisReservasEspecialista = () => {

    const { user } = useContext(AuthContext);

    const email = user.email;
    const idcliente = user.idcliente;

    const [datos, setDatos] = useState('');

    const datosObtenidos = async () => {
        const obtieneDatos = await ObtenerDatosEspecialistaPorCorreo(email);
        setDatos(obtieneDatos.treservas);
    }

    console.log(datos)

    useEffect(() => {
        datosObtenidos();
    }, [])

    return(
        <SafeAreaView style={{marginHorizontal:10,}}>
            <FlatList
                data={datos}
                keyExtractor = {(item) => item.idreserva}
                renderItem={(item) => <ListaMisReservas item={item}/>}
                ItemSeparatorComponent = { () => <Text style={{marginBottom:1,}}/>}/>
        </SafeAreaView>
    )
}

export default MisReservasEspecialista