import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListaMisReservasEspecialista = ({item}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Fecha cita: {item.item.fechareserva}</Text>
            <Text style={styles.text}>Hora cita: {item.item.horareserva}</Text>
            <Text style={styles.text}>Observaciones: {item.item.observacionreserva}</Text>
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
        color: "#283890"        
    }
})

export default ListaMisReservasEspecialista