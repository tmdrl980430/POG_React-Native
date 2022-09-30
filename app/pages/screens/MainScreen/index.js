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
import HomeImage from '../../../assets/images/home.png';
import GuardImage from '../../../assets/images/guard.png';
import MoreImage from '../../../assets/images/more.png';
import BookmarkImage from '../../../assets/images/bookmark.png';
import SearchImage from '../../../assets/images/search.png';

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 105
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
        width: 24,
        height: 28,
    },
    searchImg: {
        width: 65,
        height: 65,
    }
})

export default Main;

//https://reactnavigation.org/docs/bottom-tab-navigator/ 참조