import React from "react";
import {View, Image, StyleSheet,Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FirstDescription = () => {

    return (
        <View>
            <Text style={styles.FirstText}>처음이신가요?</Text>
            <Text style={styles.SecondText}>원활한 서비스 이용을 위해 회원가입을 진행해주세요</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    FirstText: {
        fontFamily: "Inter-Black",
        fontSize: 25,
        justifyContent: 'flex-start',
        color: '#696969',
        marginTop: hp('3%')
    },
    SecondText: {
        fontFamily: "Inter-Black",
        fontSize: 14,
        justifyContent: 'flex-start',
        color: '#696969',
        marginTop: hp('1%')
    }
})

export default FirstDescription;
