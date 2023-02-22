import React from 'react';
import { View } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';
import Appbar from '../components/Appbar';
import Perfil from '../components/Perfil';
import Reserva from '../components/Reserva';
import Login from '../components/Login';
import Especialistas from '../components/Especialistas';

export const PanelRouterCliente = () => {

    return (
        <>
            <Appbar />
            <View>
                <Routes>
                    <Route exact path="/perfil" element={<Perfil />} />
                    <Route exact path="/reserva" element={<Reserva />} />
                    <Route exact path="/servicio" element={<Especialistas />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate replace to="/reserva" />} />
                </Routes>
            </View>
        </>
    )
}