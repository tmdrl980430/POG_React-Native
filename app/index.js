/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {View, Text, StyleSheet, LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navigation from './pages/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRecoilState } from 'recoil';
import { jwtRecoilState } from './recoil';
//react-native warning 화면을 무시하기 위한 코드

LogBox.ignoreLogs([
    "Can't perform",
])


const App = () => {

    const [jwt, setJwt] = useRecoilState(jwtRecoilState)
    
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
        <Navigation/>
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
