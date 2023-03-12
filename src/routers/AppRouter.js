import React, { useContext } from 'react';
import { View } from 'react-native';
import {NativeRouter,Routes,Route} from 'react-router-native';
import { AuthContext } from '../auth/AuthContext';
import Login from '../components/Login';
import { PanelRouter } from './PanelRouter';
import { PanelRouterCliente } from './PanelRouterCliente';
import { PrivateRouter } from './PrivateRouter';
import { PanelRouterEspecialista } from './PanelRouterEspecialista';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);
    
    return (
        <NativeRouter>
            <View>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                {
                        (() => {
                            if (user.email == 'THEMURALLA15@GMAIL.COM') {
                                return (<Route path="/*" element={<PrivateRouter estaAutenticado={user.logged} element={<PanelRouter />} />} />)
                            } else if (user.email == 'ERIKA_ANNABELL@HOTMAIL.COM') {
                                return (<Route path="/*" element={<PrivateRouter estaAutenticado={user.logged} element={<PanelRouterEspecialista />} />} />)
                            } else {
                                return (<Route path="/*" element={<PrivateRouter estaAutenticado={user.logged} element={<PanelRouterCliente />} />} />)
                            }
                        })()
                    }
            </Routes>
                

                    
                
            </View>
        </NativeRouter>
    )
}