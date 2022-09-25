import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Main from '../screens/MainScreen';
import {isLoginRecoilState} from '../../recoil';
import {useRecoilState} from 'recoil';


const Stack = createNativeStackNavigator()

const Navigation = () => {
    const [isLogIn, setIsLogin] = useRecoilState(isLoginRecoilState);

    //로그인 상태에 따른 화면 변경
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    <Stack.Group
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Stack.Screen name="Main" component={Main}/>
                    </Stack.Group>
                    /*isLogIn
                        ? ((
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Main" component={Main}/>
                            </Stack.Group>
                        ))
                        : (
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Login" component={Login}/>
                                <Stack.Screen name="SignUp" component={SignUp}/>
                            </Stack.Group>
                        )*/
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;