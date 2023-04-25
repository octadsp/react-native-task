import React from "react"

import { NavigationContainer } from "@react-navigation/native"

import { createStackNavigator } from "@react-navigation/stack"

import { useTheme } from "native-base"

import Hello from "./src/screens/hello"
import IndexHome from "./src/screens/index"
import LoginForm from "./src/screens/login"
import RegisterForm from "./src/screens/register"

const Stack = createStackNavigator()

export default function Container () {
    const theme = useTheme()
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="IndexHome"
            screenOptions={{
                headerMode: "screen",
                headerShown: false,
                headerTintColor: "white",
                headerStyle: { backgroundColor: theme.colors.muted["100"]}
            }}
            >
                <Stack.Screen
                name="IndexHome"
                component={IndexHome}
                options={{
                    title: ""
                }}
                />
                <Stack.Screen
                name="LoginForm"
                component={LoginForm}
                options={{
                    gestureDirection: "horizontal"
                }}
                />
                <Stack.Screen
                name="RegisterForm"
                component={RegisterForm}
                options={{
                    gestureDirection: "horizontal"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}