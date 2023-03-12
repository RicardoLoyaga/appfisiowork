import React from 'react';
import { View } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';
import Login from '../components/Login';
import Especialistas from '../components/Especialistas';
import PerfilEspecialista from '../components/PerfilEspecialista';
import AppbarEspecialista from '../components/AppbarEspecialista';
import MisReservasEspecialista from '../components/MisReservasEspecialista';
import Clientes from '../components/Clientes';

export const PanelRouterEspecialista = () => {

    return (
        <>
            <AppbarEspecialista />
            <View>
                <Routes>
                    <Route exact path="/perfilespecialista" element={<PerfilEspecialista />} />
                    <Route exact path="/misreservasespecialista" element={<MisReservasEspecialista />} />
                    <Route exact path="/pacientes" element={<Clientes />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/" element={<Navigate replace to="/perfilespecialista" />} />
                </Routes>
            </View>
        </>
    )
}