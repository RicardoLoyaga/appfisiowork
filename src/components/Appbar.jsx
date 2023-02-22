import React from "react";
import { Button, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { types } from "../types/types";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0D993B',
        paddingTop: 50,
        paddingBottom:5,
        paddingLeft: 5,
        flexDirection: "row",
    },
    text:{
        color: "white",
        fontWeight: "bold",
        paddingHorizontal: 5,
        paddingBottom: 5,       
    }
})

const AppBarTap = ({active, children, to}) => {
    return(
        <Link to={to} component={TouchableWithoutFeedback}>
            <Text style={styles.text}>{children}</Text>
        </Link>
    )
}


const Appbar = () =>{
    return(
        <View style={styles.container}>
            <AppBarTap active to="/perfil">Mi Perfil</AppBarTap>
            <AppBarTap active to="/servicio">Servicios</AppBarTap>
            <AppBarTap active to="/reserva">Mis Reservas</AppBarTap>
            <AppBarTap active to="/login">Cerrar Sesión</AppBarTap>
            
        </View>
    )
}

export default Appbar