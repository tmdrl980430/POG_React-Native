import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ReportButton = ({text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        maxHeight: hp("9%"),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: wp("5%"),
        margin: wp("5%"),
    },
    text: {
        color: "#000000",
        fontSize: wp("5%"),
        textAlign: "center",
    }
});

export default ReportButton;