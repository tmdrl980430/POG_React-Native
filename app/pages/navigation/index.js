import React, {useEffect} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/LoginScreen';
import SignUp from '../screens/SignUpScreen';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Main from '../screens/MainScreen';
import Accident from '../screens/MainScreen/HomeScreen/Accident';
import AdditionalReport from '../screens/MainScreen/HomeScreen/AdditionalReport';
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
                    isLogIn
                        ? ((
                            <Stack.Group
                                screenOptions={{
                                    headerShown: false
                                }}>
                                <Stack.Screen name="Main" component={Main}/>
                                <Stack.Screen name="Accident" component={Accident}/>
                                <Stack.Screen name="AdditionalReport" component={AdditionalReport} />
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
                        )
                }

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;