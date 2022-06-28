import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import BackImage from '../../assets/images/backbtn.png';

const SignUpHeader = () => {

    return (
        <View>
            <Image style={styles.BackImg} source={BackImage} resizeMode={'contain'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    BackImg: {
        width: wp('5%'),
        height: hp('5%'),
        justifyContent: 'flex-start',
        resizeMode: 'contain'
    }
})

export default SignUpHeader;