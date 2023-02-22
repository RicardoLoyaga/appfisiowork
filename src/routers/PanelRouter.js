import React from 'react';
import { Routes, Route, Navigate } from 'react-router-native';
import Appbar from '../components/Appbar';

export const PanelRouter = () => {

    return (
        <>
            <Appbar />
            <View>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/login" />} />
                </Routes>
            </View>
        </>
    )
}