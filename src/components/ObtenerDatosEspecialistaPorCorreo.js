import React from "react";
import axios from "axios";

const ObtenerDatosEspecialistaPorCorreo = async (correocliente) => {

    const response = await axios.post("http://192.168.0.104:44423/api/especialista/obtenerespecialistaporcorreo", JSON.stringify({ correocliente }), {
        headers: { "content-type": "application/json" }
    })

    if (response.status == 200) {
        return response.data
    } else {
        console.log("Status code " + response.status);
    }
    
}


export default ObtenerDatosEspecialistaPorCorreo;