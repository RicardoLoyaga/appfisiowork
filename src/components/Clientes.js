import React, { useEffect, useState } from 'react'
import ListaPacientes from './ListaPacientes';
import { Text, StyleSheet,SafeAreaView,View, Image,FlatList } from "react-native";

const Clientes = () => {
    //const { idcliente } = useParams();
    const [tclientes, setClientes] = useState([]);

    //console.log(idcliente)

    const mostrarClientes = async () => {
        const response = await fetch("http://192.168.0.104:44423/api/cliente/obtenerclientes");
        if (response.ok) {
            const data = await response.json();
            setClientes(data);
            console.log(data)

        } else {
            console.log("Status code " + response.status);
        }
    }

    useEffect(() => {
        mostrarClientes();
    }, [])

    /*const eliminarCliente = async (id) => {

        const response = await fetch("http://192.168.0.104:44423/api/cliente/eliminarcliente/" + id, {
            method: "DELETE"
        })

        if (response.ok) {
            //Swal.fire('', 'Paciente eliminado correctamente', 'success');
            await mostrarClientes();
        }

    }*/

  return (
    <SafeAreaView style={{marginHorizontal:10,}}>
        <FlatList
            data={tclientes}
            keyExtractor = {(item) => item.idreserva}
            renderItem={(item) => <ListaPacientes item={item}/>}
            ItemSeparatorComponent = { () => <Text style={{marginBottom:1,}}/>}
        />
    </SafeAreaView>
  )
}

export default Clientes
