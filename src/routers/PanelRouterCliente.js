import React from 'react';
import { View } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';
import Perfil from '../components/Perfil';
import Login from '../components/Login';
import Navegacion from '../components/Navegacion'
import MisReservas from '../components/MisReservas';
import AppbarCliente from '../components/AppbarCliente';

export const PanelRouterCliente = () => {

    return (
        <>
        <AppbarCliente/>
        <View>
            <Routes>
                <Route exact path="/perfil" element={<Perfil />} />
                <Route exact path="/misreservas" element={<MisReservas />} />
                <Route exact path="/login" element={<Login />} />
                <Route path="/" element={<Navigate replace to="/misreservas" />} />
            </Routes>
        </View>
        
        </>
       
    )
}