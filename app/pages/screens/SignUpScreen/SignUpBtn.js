import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SignUpBtn = () => {

    return (
        <View style={styles.button}>
            <Text style={styles.buttonTitle}>확인</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonTitle: {
        color: 'white'
    },
    button: {
        backgroundColor: "#62C88E",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp('5%')
    }
})

export default SignUpBtn;