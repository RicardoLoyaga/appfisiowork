import React, { useContext } from 'react';
import { View } from 'react-native';
import {NativeRouter,Routes,Route} from 'react-router-native';
import { AuthContext } from '../auth/AuthContext';
import Login from '../components/Login';
import { PanelRouter } from './PanelRouter';
import { PanelRouterCliente } from './PanelRouterCliente';
import { PrivateRouter } from './PrivateRouter';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    
    return (
        <NativeRouter>
            <View>
                {
                    user.email === 'themuralla15@gmail.com' ?
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            <Route path="/*" element={<PrivateRouter estaAutenticado={user.logged} element={<PanelRouter />} />} />
                        </Routes>
                        :
                        <Routes>
                            <Route exact path="/login" element={<Login />} />
                            <Route path="/*" element={<PrivateRouter estaAutenticado={user.logged} element={<PanelRouterCliente />} />} />
                        </Routes>
                }
                
            </View>
        </NativeRouter>
    )
}