import React, {useState} from "react";
import {
    View,
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

const Tab = createBottomTabNavigator();

const Main = ({navigation}) => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="BookMark" component={BookMark}/>
            <Tab.Screen name="Search" component={Search}/>
            <Tab.Screen name="More" component={More}/>
            <Tab.Screen name="Guard" component={Guard}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    }
})

export default Main;