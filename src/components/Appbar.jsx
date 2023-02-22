import React from "react";
import { Text, TouchableNativeFeedback, TouchableWithoutFeedback, View } from "react-native";
import { StyleSheet } from "react-native";
import { Link } from "react-router-native";

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
            <AppBarTap active to="/singout">Cerrar Sesión</AppBarTap>
        </View>
    )
}

export default Appbar