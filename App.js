/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUpScreen';
import Main from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();



const App = () => {
    useEffect(() => {
        try {
            setTimeout(() => {
                SplashScreen.hide();/** 추가 **/
            }, 2000);/** 스플래시 시간 조절 (2초) **/
        } catch (e) {
            console.warn('에러발생');
            console.warn(e);
        }
    });

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="Main" component={Main}/>
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        backgroudColor: '#fff',
        alignItems: 'center',
        justufyContent: 'center'
    }
});

export default App;
