import React, {useEffect, useState} from "react";
import {
    View,
    Image,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Home from "./HomeScreen";
import Search from "./SearchScreen";
import BookMark from "./BookMarkScreen";
import More from "./MoreScreen";
import Guard from "./GuardScreen";
// 이미지 파일 경로
import HomeImage from '../../../assets/images/home.png';
import GuardImage from '../../../assets/images/guard.png';
import MoreImage from '../../../assets/images/more.png';
import BookmarkImage from '../../../assets/images/bookmark.png';
import SearchImage from '../../../assets/images/search.png';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {

    useEffect(() => {
        getJwt();
    }, [])

    const getJwt = async () => {
        console.log("getJwt Main")
        const value = await AsyncStorage.getItem("jwt")
        console.log("getJwt Main에서 JWT", AsyncStorage.getAllKeys())
        try {
            console.log("value",value)
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
            console.log("e : " ,e)

        }
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: hp("8%"),
                }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={HomeImage} style={styles.img}/>),
                    tabBarShowLabel: false,
                }}/>
            <Tab.Screen
                name="BookMark"
                component={BookMark}
                options={{
                    tabBarIcon: () => (<Image source={BookmarkImage} style={styles.img}/>),
                    tabBarShowLabel: false,
                }}/>
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: () => (<Image source={SearchImage} style={styles.searchImg}/>),
                    tabBarShowLabel: false,
                }}
                />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: () => (<Image source={MoreImage} style={styles.img}/>),
                    tabBarShowLabel: false,
                }}/>
            <Tab.Screen
                name="Guard"
                component={Guard}
                options={{
                    tabBarIcon: () => (<Image source={GuardImage} style={styles.img}/>),
                    tabBarShowLabel: false,
                }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    },
    img: {
        width: wp("5%"),
        resizeMode: "contain",
    },
    searchImg: {
        width: wp("11%"),
        resizeMode: "contain",
    }
})

export default Main;

//https://reactnavigation.org/docs/bottom-tab-navigator/ 참조