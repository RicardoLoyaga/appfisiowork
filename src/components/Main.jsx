import React from 'react';
import {Text,View} from 'react-native'
import Appbar from './Appbar';
import Especialistas from './Especialistas';
import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-native'
import Perfil from './Perfil';
import Login from './Login';

const Main = () =>{
    return(
        <View style={{flex: 1}}>
            <Appbar/>
            <Routes>
                <Route exact path='/perfil' element={<Perfil />} />
                <Route exact path='/reserva' element={<Especialistas />} />
                <Route exact path='/servicio' element={<Text>Aqui estoy</Text>} />
                <Route exact path='/singout' element={<Login />} />
                <Route path="/" element={<Navigate replace to="/singout" />} />
            </Routes>
        </View>
    )
}

export default Main