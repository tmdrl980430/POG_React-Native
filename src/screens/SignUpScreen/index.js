import React, {useState} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Accept from "./Accept";
import FirstDescription from "./description";
import SignUpHeader from "./Header";
import SignUpForm from "./SignUpAuthform";
import SignUpBtn from "./SignUpBtn";

const SignUp = ({navigation}) => {

    const [loading, setLoading] = useState(false)

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.replace('Login')}
                    style={styles.logoArea}>
                    <SignUpHeader/>
                </TouchableOpacity>
                <View style={styles.descriptionArea}>
                    <FirstDescription/>
                </View>
                <View>
                    <SignUpForm/>
                </View>
                <View>
                    <Accept/>
                </View>
                <TouchableOpacity
                    style={styles.buttonArea}
                    onPress={() => navigation.replace('Login')}>
                    <SignUpBtn/>
                </TouchableOpacity>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%')
    },
    descriptionArea: {
        width: wp('100%')
    },
    logoArea: {
        width: wp('100%'),
        marginTop: hp('5%')
    },
    formArea: {
        width: '100%',
        paddingBottom: wp('10%')
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
        marginTop: hp('5%'),
        marginBottom: hp('3%')
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

export default SignUp;