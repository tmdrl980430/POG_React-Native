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
import AuthForm from "./LoginAuthform";
import AuthLogo from "./AuthLogo";

const Login = () => {

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
                <View style={styles.logoArea}>
                    <AuthLogo/>
                </View>
                <View style={styles.formArea}>
                    <AuthForm style={styles.formArea}/>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonTitle}>로그인</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signuptextArea}>
                    <Text style={styles.signupQuestiontext}>또는 소셜 계정으로 로그인</Text>
                </View>
                
                <View style={styles.signuptextArea}>
                    <Text style={styles.signupQuestiontext}>아직 회원이 아니신가요?</Text>
                    <Text style={styles.signuptext} onPress={() => navigation.navigate('SignUp')}>회원가입하기</Text>
                </View>
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
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: wp('10%'),
        paddingRight: wp('10%')
    },
    logoArea: {
        width: '100%',
        marginTop: hp('15%'),
        alignItems: 'center'
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

export default Login;