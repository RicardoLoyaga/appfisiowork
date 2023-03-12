import React, { useEffect, useState } from "react";
import { View,Text, FlatList, SafeAreaView } from "react-native";
import ListaEspecialistas from "./ListaEspecialistas";

const Especialistas = () => {
    const [tespecialistas, setEspecialistas] = useState([])

    const mostrarEspecialistas = async () => {
        const response = await fetch("http://192.168.0.104:44423/api/especialista/obtenerespecialistas");

        if (response.ok) {
            const data = await response.json();
            setEspecialistas(data);
        } else {
            console.log("Status code " + response.status);
        }
    }

    useEffect(() => {
        mostrarEspecialistas();
    }, [])

    

    return(
        <SafeAreaView style={{marginHorizontal:10,}}>
            <FlatList
                data={tespecialistas}
                keyExtractor = {(item) => item.idespecialista}
                renderItem={(item) => <ListaEspecialistas item={item}/>}
                ItemSeparatorComponent = { () => <Text style={{marginBottom:3,}}/>}/>
        </SafeAreaView>
    )
}

export default Especialistas