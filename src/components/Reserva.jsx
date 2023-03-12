import React, { useEffect, useState } from "react";
import { View,Text, FlatList, SafeAreaView } from "react-native";
import ListarReservas from "./ListarReserva";

const Reserva = () => {
    const [treservas, setReservas] = useState([])

    const mostrarReservas = async () => {
        const response = await fetch("http://192.168.0.104:44423/api/reserva/obtenerreservas");

        if (response.ok) {
            const data = await response.json();
            setReservas(data);
        } else {
            console.log("Status code " + response.status);
        }
    }

    useEffect(() => {
        mostrarReservas();
    }, [])

    

    return(
        <SafeAreaView style={{marginHorizontal:10,}}>
            <FlatList
                data={treservas}
                keyExtractor = {(item) => item.idreserva}
                renderItem={(item) => <ListarReservas item={item}/>}
                ItemSeparatorComponent = { () => <Text style={{marginBottom:1,}}/>}/>
        </SafeAreaView>
    )
}

export default Reserva