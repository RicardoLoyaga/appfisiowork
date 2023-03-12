import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Perfil from './Perfil'
import Reserva from './Reserva'
import Servicio from './Servicio'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function Navegacion() {

    const screenOptions = (route, color) => {
        let iconName
        switch (route.name) {
            case "perfil":
                iconName="account-outline"
                break;
            case "reserva":
                iconName="calendar-account-outline"
                break;
            case "servicio":
                iconName="clipboard-minus-outline"
                break;
        }

        return(
            <Icon 
            type="material-community"
            name={iconName}
            size={22}
            color={color} />
        )
    }

  return (
    <NavigationContainer>
        <Tab.Navigator
        initialRouteName='servicios'
        screenOptions={({ route }) => ({
            tabBarActiveTintColor:"#283890",
            tabBarInactiveTintColor:"#2596be",
            tabBarIcon:({color}) => screenOptions(route,color),
        })}
        >
            <Tab.Screen
            name='perfil'
            component={Perfil}
            options={{title:"Mi Perfil"}}
            />
            <Tab.Screen
            name='reserva'
            component={Reserva}
            options={{title:"Mis Reservas"}}
            />
            <Tab.Screen
            name='servicio'
            component={Servicio}
            options={{title:"Servicios"}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}
