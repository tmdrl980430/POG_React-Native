import React, {useState} from "react";
import { Image, Text, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HomeListItem = ({image, text}) => {
    return (
    <View style={styles.homeListItemContainer}>
        <Image source={image} style={styles.homeListItemImage}/>
        <Text style={styles.homeListItemText}>{text}</Text>
    </View>
    );
};


const styles = StyleSheet.create({
    homeListItemContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        maxHeight: hp("14%"),
    },
    homeListItemImage: {
        height: hp("10%"),
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "contain",
    },
    homeListItemText: {
        color: "#7A7A7A",
        fontSize: wp("2%"),
        fontWeight: "500",
        maxWidth: wp("23%"),
        textAlign: "center",
    },
})

export default HomeListItem;