import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Stack from "./Stack";
import { navigationRef } from '../services/RootNavigation';

export default function AppRoutes() {
   return(
   <NavigationContainer>
        <Stack/>
    </NavigationContainer>
   )}
