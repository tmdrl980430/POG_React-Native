import React, { useEffect, useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import { NavigationContainer, StackActions } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from '../screens/MainScreen';
import Accident from '../screens/MainScreen/HomeScreen/Accident';
import { isLoginRecoilState, jwtRecoilState, severURLRecoilState, userIdxRecoilState } from '../../recoil';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator()

const Navigation = () => {
    const [isLogIn, setIsLogin] = useRecoilState(isLoginRecoilState);
    const [IP, setIP] = useRecoilState(severURLRecoilState);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [jwt, setJwt] = useRecoilState(jwtRecoilState);

    const [userIdx, setUserIdx] = useRecoilState(userIdxRecoilState);

    useEffect(() => {
        getJwt();
    }, [])

    const getJwt = async () => {
        console.log("getJwt")

        const value = await AsyncStorage.getItem('jwt')
        console.log("getJwt에서 JWT", value)
        try {
            console.log("value", value)
            if (value !== null) {
                // value previously stored
                setJwt(value);
            }
        } catch (e) {
            // error reading value
            console.log("e : ", e)

        }
    }

    const autoLogin = async () => {

        console.log("autoLogin_start")
        try {
            console.log("autoLogin_try")
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);

            const response = await axios
                .get(`${IP}/auth/jwt`, {
                    headers: {
                        "x-access-token": jwt
                    }
                })
                .then((response) => {
                    console.log(response);
                    if (response.data.code === 1000) {
                        setUserIdx(response.data.result.userId)
                        console.log("autoLogin_성공")
                        setIsLogin(true)
                    }

                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
            // 데이터는 response.data.code 안에 들어있다.
        } catch (e) {
            console.log("autoLogincatch", e)
        }
        setLoading(false);

    };

    useEffect(() => {
        console.log(`Loading : ${loading}`);
        console.log(`isLogIn : ${isLogIn}`);
        console.log(`jwt : ${jwt}`);

        if (jwt != "") {
            setLoading(true);
            autoLogin();
            setLoading(false);

        } else if (jwt === '') {
            setLoading(true);
            setIsLogin(false);
            setLoading(false);

        }
    }, [jwt])

    //로그인 상태에 따른 화면 변경
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    isLogIn
                        ? ((
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Main" component={Main} />
                                <Stack.Screen name="Accident" component={Accident} />
                            </Stack.Group>
                        ))
                        : (
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="SignUp" component={SignUp} />
                            </Stack.Group>
                        )
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;