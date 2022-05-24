import React from "react";
import {View, Image, StyleSheet} from 'react-native';

import BackImage from '../../assets/images/backbtn.png';

const Header = () => {

    return (
        <View>
            <Image style={styles.pogbotImg} source={BackImage} resizeMode={'contain'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    pogbotImg: {
        width: 12,
        height: 12,
        justifyContent: 'flex-start',
        resizeMode: 'contain'
    }
})

export default Header;