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
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%')
    },
    homeListItemImage: {
        width: '100%',
        marginTop: hp('15%'),
        alignItems: 'center'
    },
    homeListItemText: {
        color: "#7A7A7A",
        fontSize: 15,
        fontWeight: "500",
        height: 18,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%')
    },
    button: {
        backgroundColor: "#62C88E",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp('5%')
    },
    buttonTitle: {
        color: 'white'
    },
    signuptextArea: {
        marginTop: hp("3%"),
        flexDirection: "row",
        justifyContent: "center"
    },
    signuptext: {
        color: "#62C88E",
        fontSize: wp('4%'),
        marginStart: wp('1%')
    },
    signupQuestiontext: {
        color: "#C1C1C1",
        fontSize: wp('4%')
    },
    pogbotImg: {
        width: 140,
        height: 230,
        justifyContent: 'flex-start',
        resizeMode: 'contain'
    }
})

export default HomeListItem;