import React, {useState} from "react";
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
import HomeImage from '../../../assets/images/home.png'
import GuardImage from '../../../assets/images/guard.png'
import MoreImage from '../../../assets/images/more.png'
import BookmarkImage from '../../../assets/images/bookmark.png'

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (<Image source={HomeImage}/>),
                    tabBarShowLabel: true,
                }}/>
            <Tab.Screen
                name="BookMark"
                component={BookMark}
                options={{
                    tabBarIcon: () => (<Image source={BookmarkImage}/>),
                    tabBarShowLabel: true,
                }}/>
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarShowLabel: true,
                }}
                />
            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: () => (<Image source={MoreImage}/>),
                    tabBarShowLabel: true,
                }}/>
            <Tab.Screen
                name="Guard"
                component={Guard}
                options={{
                    tabBarIcon: () => (<Image source={GuardImage}/>),
                    tabBarShowLabel: true,
                }}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    }
})

export default Main;