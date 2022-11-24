import React, { useEffect, useState } from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthForm from "./LoginAuthform";
import AuthLogo from "./AuthLogo";
import LoginBtn from "./LoginBtn";
import { isLoginRecoilState, jwtRecoilState, severURLRecoilState, userIdxRecoilState } from "../../../recoil";
import { useRecoilState } from "recoil";
import { mmkvStorage } from '../../../utils/mmkv';
import axios from "axios";


const Login = ({ navigation }) => {

    const [IP, setIP] = useRecoilState(severURLRecoilState);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLogIn, setIsLogin] = useRecoilState(isLoginRecoilState);

    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")

    const [jwt, setJwt] = useRecoilState(jwtRecoilState);

    const [userIdx, setUserIdx] = useRecoilState(userIdxRecoilState);


    const storeJwt = async (value) => {
        console.log("storeJwt")
        if (value == null || value == "") return;
        try {
            mmkvStorage.set("jwt", value);
            console.log("type ", typeof(value));
            setJwt(value);
        } catch (e) {
            // saving error
            console.log("e ::", e)

        }
        console.log("mmkvStorage jwt ", mmkvStorage.getString('jwt'));
    }

    const postLogin = async () => {

        console.log("postLogin_start")
        if (passwordInput != "" && emailInput != "") {
            try {
                console.log("postLogin_try")
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                const response = await axios
                    .post(`${IP}/auth/login`, {
                        email: emailInput,
                        password: passwordInput,
                    })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data.result.jwt)
                        if (response.data.code === 1000) {
                            //setJwt(response.data.result.jwt)
                            storeJwt(response.data.result.jwt)
                            setUserIdx(response.data.result.userId)
                            console.log("postLogin_성공")
                            setIsLogin(true)
                        }

                        return response;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                // 데이터는 response.data.code 안에 들어있다.
            } catch (e) {
                console.log("signUp_catch", e)
            }
            // loading 끄기
            setLoading(false);
        }

    };

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator />
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.logoArea}>
                    <AuthLogo />
                </View>
                <View style={styles.formArea}>
                    <AuthForm style={styles.formArea}
                        emailInput={emailInput}
                        passwordInput={passwordInput}
                        setEmailInput={setEmailInput}
                        setPasswordInput={setPasswordInput}
                    />
                </View>
                <TouchableOpacity
                    onPress={postLogin}
                    style={styles.buttonArea}>
                    <LoginBtn />
                </TouchableOpacity>
                <View style={styles.signuptextArea}>
                    <Text style={styles.signupQuestiontext}>또는 소셜 계정으로 로그인</Text>
                </View>

                <View style={styles.signuptextArea}>
                    <Text style={styles.signupQuestiontext}>아직 회원이 아니신가요?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.signuptext}>회원가입하기</Text>
                    </TouchableOpacity>
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