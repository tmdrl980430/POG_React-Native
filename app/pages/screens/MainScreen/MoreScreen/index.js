import React, {useState} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const More = ({ navigation }) => {
    
    return (
        <View style={styles.container}>
            <Text>More</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    }
})

export default More;