import React, { useEffect, useReducer } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppRouter } from './src/routers/AppRouter';
import { authReducer } from './src/auth/authReducer';
import { AuthContext } from './src/auth/AuthContext';
import 'localstorage-polyfill'; 
import Navegacion from './src/components/Navegacion';

const init = () => {
  return JSON.parse(global.localStorage.getItem('user')) || { logged: false };
}

export default function App() {

  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    global.localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <>
      <StatusBar style='light'/>
      <AuthContext.Provider value={{user, dispatch}} >
        <AppRouter />
      </AuthContext.Provider>
    </>
  )
  
}


