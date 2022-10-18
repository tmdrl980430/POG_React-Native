import React, {useState} from "react";
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ReportButton = ({target, text}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.target}>{target}</Text>
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
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: wp("5%"),
        marginTop: wp("3%"),
        marginBottom: wp("3%"),
        marginStart: wp("5%"),
        marginEnd: wp("5%"),
    },
    target: {
        width: "35%",
        color: "#000000",
        fontSize: wp("5%"),
        fontWeight: "700",
        textAlign: "center",
        padding: wp("1%"),
    },
    text: {
        width: "65%",
        color: "#000000",
        fontSize: wp("4%"),
        textAlign: "center",
        padding: wp("1%"),
    }
});

export default ReportButton;