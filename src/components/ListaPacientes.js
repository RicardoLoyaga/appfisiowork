import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListaPacientes = ({item}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Nombre: {item.item.nombrecliente}</Text>
            <Text style={styles.text}>Apellido: {item.item.apellidocliente}</Text>
            <Text style={styles.text}>Identificación: {item.item.identificacioncliente}</Text>
            <Text style={styles.text}>Dirección: {item.item.direccioncliente}</Text>
            <Text style={styles.text}>Correo: {item.item.correocliente}</Text>
        </View>
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
        //color: "#283890" 
        color: 'black'       
    }
})

export default ListaPacientes