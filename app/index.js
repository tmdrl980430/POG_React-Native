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
import Navigation from './pages/navigation';

//react-native warning 화면을 무시하기 위한 코드

// LogBox.ignoreLogs([
//     "ViewPropTypes will be removed",
//     "ColorPropType will be removed",
//     "Failed prop type",
//     "Can't perform",
//     "Require cycle",
//     "Did not receive response to shouldStartLoad in time, defaulting to YES"
// ])


const App = () => {
    useEffect(() => {
        try {
            setTimeout(() => {
                SplashScreen.hide();/** 추가 **/
            }, 5000);/** 스플래시 시간 조절 (2초) **/
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
