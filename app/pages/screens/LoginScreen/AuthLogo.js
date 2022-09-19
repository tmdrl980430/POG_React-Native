import React from "react";
import {View, Image, StyleSheet} from 'react-native';

import LogoImage from '../../../assets/images/pogbot.png';

const AuthLogo = () => {

    return (
        <View>
            <Image style={styles.pogbotImg} source={LogoImage} resizeMode={'contain'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pogbotImg: {
        width: 140,
        height: 230,
        justifyContent: 'flex-start',
        resizeMode: 'contain'
    }
})

export default AuthLogo;