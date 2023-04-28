import React, { useContext, useEffect, useState } from "react"

// Material Theme , Icon, etc
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "native-base"
import FlashMessage from "react-native-flash-message"
import Spinner from "react-native-loading-spinner-overlay"

// Navigator
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

// Config
import { API, setAuthorization } from "./src/config/api"
import { UserContext } from "./src/context/userContext"
import AsyncStorage from "@react-native-async-storage/async-storage"

// Page Scren
import IndexHome from "./src/screens/index"
import LoginForm from "./src/screens/login"
import RegisterForm from "./src/screens/register"
import HomeScreen from "./src/screens/home"
import AddListScreen from "./src/screens/addlist"
import AddCategoryScreen from "./src/screens/addcategory"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Container () {
    const theme = useTheme()
    const [state, dispatch] = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(true);

    async function checkAuth() {
        try {
            let token = await AsyncStorage.getItem("token");

            if (token) setAuthorization(token);

            await API.post("/auth/verify-token", {
                validateStatus: () => true,
            })
            .then((response) => {
                if (response.status >= 400) {
                    return dispatch({
                        type: "AUTH_ERROR",
                    });
                }

                const payload = response.data;
                dispatch({
                    type: "AUTH_SUCCESS",
                    payload,
                });
            })
            .catch((error) => {
                dispatch({
                    type: "AUTH_ERROR",
                });
            });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }

    async function isAsyncTokenExist() {
        await AsyncStorage.getItem("token");
        checkAuth();
    }

    useEffect(()=> {
        isAsyncTokenExist();
    }, []);

    return(
        <>
            {isLoading ? (
                <Spinner visible={isLoading} />
            ) : state.isLogin ? (
                <>
                    <Stack.Navigator
                        initialRouteName="Main"
                        screenOptions={{
                            headerMode: "screen",
                            headerShown: false,
                            headerTintColor: "white",
                            headerStyle: { backgroundColor: theme.colors.muted["100"]}
                        }}
                    >
                        <Stack.Screen
                            name="Main"
                            component={TabNavigator}
                            options={{
                                gestureDirection: "horizontal"
                            }}
                        />
                    </Stack.Navigator>
                </>
            ) : (
                <>
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
                </>
                )}
            <FlashMessage position="top" />
        </>
    );
}

// Halaman Tab Navigator Screen
function TabNavigator() {
    const theme= useTheme();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "HomeScreen") {
                iconName = focused ? "list-alt" : "list-alt"
                } else if (route.name === "AddList") {
                iconName = focused ? "playlist-add" : "playlist-add"
                } else if (route.name === "AddCategory") {
                iconName = focused ? "category" : "category"
                }
                return <MaterialIcons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: theme.colors.danger["500"],
            tabBarInactiveTintColor: theme.colors.muted["700"]
            })}
            >
            <Tab.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={{
                title: ""
            }}
            />
            <Tab.Screen 
            name="AddList" 
            component={AddListScreen}
            options={{
                title: ""
            }}
            />
            <Tab.Screen 
            name="AddCategory" 
            component={AddCategoryScreen}
            options={{
                title: ""
            }}
            />
            </Tab.Navigator>
    )
}