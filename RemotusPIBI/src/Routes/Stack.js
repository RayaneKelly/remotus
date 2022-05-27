import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Favoritos from "../screens/Favoritos/Favoritos";
import Visitados from "../screens/Visitados/Visitados";
import ListaLugares from "../screens/Pesquisar/ListaLugares/ListaLugares";
import Local from "../screens/Pesquisar/Local/Local";
import RoutesTabs from "./Tabs";
import Pesquisar from "../screens/Pesquisar/pagePesquisar/Pesquisar";
import { Home } from '../screens/Home/Index';
// import { HomeWorking } from '../screens/HomeWorking/index';
import { Perfil } from '../screens/Perfil/Perfil';

const MyStack = createStackNavigator();

export default props => (

    <MyStack.Navigator
        screenOptions={{ animationEnabled: false }}
    >
        {/* <MyStack.Screen name='inicial' component={Inicial} options={{ headerShown: false }} /> */}
        <MyStack.Screen name='home' component={RoutesTabs} options={{ headerShown: false }} />
        <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} />

    </MyStack.Navigator>
)


export function HomeNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='home' component={Home} options={{ headerShown: false }} />

        </MyStack.Navigator>
    )
}


export function PesquisarNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={
                { animationEnabled: false }
            }
        >
            <MyStack.Screen
                name='Pesquisar'
                component={Pesquisar}
                options={{ headerShown: false }}
            />
            <MyStack.Screen name='ListaLugares' component={ListaLugares}
                options={{ headerShown: false }}

            />
            {/* <MyStack.Screen name='home_working' component={HomeWorking} options={{ headerShown: false }} /> */}

            {/* <MyStack.Screen name='Local' component={Local} options={{ headerShown: false }} /> */}

        </MyStack.Navigator>
    )
}


export function VisitadosNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Visitados' component={Visitados} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}


export function FavoritosNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='Favoritos' component={Favoritos} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}

export function PerfilNavigation() {
    return (
        <MyStack.Navigator
            screenOptions={{ animationEnabled: false }}
        >
            <MyStack.Screen name='perfil' component={Perfil} options={{ headerShown: false }} />
        </MyStack.Navigator>
    )
}