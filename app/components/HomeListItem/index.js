import React, {useState} from "react";
import { Image, Text, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeListItem = ({image, text}) => {
    return (
    <View
        style={styles.homeListItemContainer}>
        <Image source={image} style={styles.homeListItemImage}/>
        <Text style={styles.homeListItemText}>{text}</Text>
    </View>
    );
};


const styles = StyleSheet.create({
    homeListItemContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    homeListItemImage: {
        maxWidth: wp("22%"),
        maxHeight: hp("20%"),
        backgroundColor: "yellow",
        alignItems: 'center',
        justifyContent: 'center',
    },
    homeListItemText: {
        color: "#7A7A7A",
        fontSize: 15,
        fontWeight: "500",
        maxWidth: wp("24%"),
        height: 18,
        textAlign: "center",
    },
})

export default HomeListItem;