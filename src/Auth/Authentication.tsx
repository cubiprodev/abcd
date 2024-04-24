import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from '@react-native-async-storage/async-storage';

// screen
import LoggedIn from '../LoggedIn';
import Login from './Login';


const Stack = createNativeStackNavigator();

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}


export default function Authentication() {
    const [initRoute, setInitRoute] = useState<string>('LoginStack');
    const [accessToken, setAccessToken] = useState<string>("");

    const sessionInfo = async () => {
        AsyncStorage.getItem("accessToken").then((value: any) => {
            console.log('accessToken', value)
            setAccessToken(value);
            if (value == null) {
                setInitRoute("LoginStack");
            } else {
                setInitRoute("LoggedIn");
            }
        });
    };

    useEffect(() => {
        sessionInfo();
    }, [initRoute]);

    return (
        <>
            <Stack.Navigator initialRouteName={initRoute}>
                {initRoute == 'LoginStack' ? (
                    <Stack.Screen
                        name="LoginStack"
                        component={LoginStack}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="LoggedIn"
                        component={LoggedIn}
                        options={{ headerShown: false }}
                    />
                )}
            </Stack.Navigator>
        </>
    )
}

const styles = StyleSheet.create({})