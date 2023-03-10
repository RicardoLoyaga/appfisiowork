import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const ListaEspecialistas = ({item}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{item.item.nombreespecialista} {item.item.apellidoespecialista}</Text>
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

export default ListaEspecialistas