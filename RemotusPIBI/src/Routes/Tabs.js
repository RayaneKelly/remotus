import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ButtonVisitados, ButtonFavoritos, ButtonPerfil, ButtonPesquisar, ButtonHome } from "./Buttons"
import { FavoritosNavigation, HomeNavigation, PerfilNavigation, PesquisarNavigation, VisitadosNavigation } from "./Stack";

const Tab = createBottomTabNavigator()
export default function RoutesTabs() {

    return (

            <Tab.Navigator
                screenOptions={{unmountOnBlur:true,
                    tabBarStyle:{ 
                        backgroundColor:'#0D1321',
                        height:80,
                        width:'100%',
                        paddingHorizontal:10,
                        borderTopColor: 'transparent'
                },
            }}
                initialRouteName="home"
            >
                <Tab.Screen
                    name='home'
                    component={HomeNavigation}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color }) => (
                            <ButtonHome color={color} focused={focused} />
                        ),
                        headerShown:false
                    }}
                />
    
                <Tab.Screen
                    name='Pesquisar'
                    component={PesquisarNavigation}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color }) => (
                            <ButtonPesquisar color={color} focused={focused} />
                        ),
                        headerShown:false
                    }}
                />
    
                <Tab.Screen
                    name="Visitados"
                    component={VisitadosNavigation}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color }) => (
                            <ButtonVisitados color={color} focused={focused} />
                        ),
                        headerShown:false
                    }}
                />
    
                <Tab.Screen
                    name='Favoritos'
                    component={FavoritosNavigation}
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color }) => (
                            <ButtonFavoritos color={color} focused={focused} />
                        ),
                        headerShown:false
                    }}
                />
    
                <Tab.Screen
                    name='Perfil'
                    component={PerfilNavigation }
                    options={{
                        tabBarLabel: '',
                        tabBarIcon: ({ focused, color }) => (
                            <ButtonPerfil color={color} focused={focused} />
                        ),
                        headerShown:false
                    }}
                />
    
    
            </Tab.Navigator>
            
        )
    }
    
