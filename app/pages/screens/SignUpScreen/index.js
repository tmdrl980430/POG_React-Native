import React, {useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    SafeAreaView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Accept from "./Accept";
import FirstDescription from "./description";
import SignUpHeader from "./Header";
import SignUpForm from "./SignUpAuthform";
import SignUpBtn from "./SignUpBtn";
import axios from "axios";
import { useRecoilState } from "recoil";
import { severURLRecoilState, userIdxRecoilState } from "../../../recoil";

const SignUp = ({navigation}) => {

    const [IP, setIP] = useRecoilState(severURLRecoilState);
    const [userIdx, setUserIdx] = useRecoilState(userIdxRecoilState);
    
    const [loading, setLoading] = useState(false)
    const [error , setError] = useState(false)
    const [signUp , setSignUp] = useState(false)

    const [nameInput, setNameInput] = useState("")
    const [uniqueNumberInput, setUniqueNumberInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [passwordCheckInput, setPasswordCheckInput] = useState("")
    const [phoneNumberInput, setPhoneNumberInput] = useState("")

    useEffect(() => {
        console.log("nameInput",nameInput)
        console.log("uniqueNumberInput",uniqueNumberInput)
        console.log("emailInput",emailInput)
        console.log("passwordInput",passwordInput)
        console.log("passwordCheckInput",passwordCheckInput)
        console.log("phoneNumberInput",phoneNumberInput)

    },[nameInput, uniqueNumberInput, emailInput, passwordInput, passwordCheckInput, phoneNumberInput]);


    const postSignUp = async () => {

        console.log("signUp_start")
        if (passwordInput != "" && passwordCheckInput != "" && phoneNumberInput != "" && nameInput != "" && uniqueNumberInput != "" && emailInput != "") {
            try {
                console.log("signUp_try")
                // 요청이 시작 할 때에는 error 와 users 를 초기화하고
                setError(null);
                setSignUp(null);

                // loading 상태를 true 로 바꿉니다.
                setLoading(true);

                if (passwordInput != passwordCheckInput) {
                    //비밀번호가 같지 않을때
                } else if (passwordInput == passwordCheckInput) {
                    const response = await axios
                    .post(`${IP}/users`, {
                        email: emailInput,
                        ssn: uniqueNumberInput,
                        password: passwordInput,
                        passwordConfirm: passwordCheckInput,
                        name: nameInput,
                        phoneNum: phoneNumberInput
                    })
                    .then((response) => {
                        console.log(response);
                        console.log(response.data.result.code)
                        if(response.data.code === 1000 ){
                            setUserIdx(response.data.result.userId)
                            console.log("signUp_성공")
                            navigation.replace('Login')
                        }

                        return response;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                }
                // 데이터는 response.data.code 안에 들어있다.
                setSignUp(response.data.code);
            } catch (e) {
                console.log("signUp_catch",e)
            }
            // loading 끄기
            setLoading(false);
        }

    };


    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator/>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.topContainer}>
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
                        <SignUpForm
                        setEmailInput={setEmailInput}
                        setNameInput={setNameInput}
                        setUniqueNumberInput={setUniqueNumberInput}
                        setPasswordInput={setPasswordInput}
                        setPasswordCheckInput={setPasswordCheckInput}
                        setPhoneNumberInput={setPhoneNumberInput}
                        emailInput={emailInput}
                        nameInput={nameInput}
                        uniqueNumberInput={uniqueNumberInput}
                        passwordInput={passwordInput}
                        passwordCheckInput={passwordCheckInput}
                        phoneNumberInput={phoneNumberInput}/>
                    </View>
                    <View>
                        <Accept/>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonArea}
                        onPress={postSignUp}>
                        <SignUpBtn/>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
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
    topContainer: {
        backgroundColor: 'white',
        width: wp('100%'),
        height: hp('100%')
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
        marginTop: hp('1%')
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