import React, {useState} from "react";
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../../utils/forms/input";

const SignUpForm = () => {
    const [inputState, setInputState] = useState({
        type: 'Login',
        action: 'Login',
        actionMode: '새로 등록할게요~',
        hasErrors: false,
        value: "",
        type: "textinput",
        rules: {},
        valid: false
    });

    const [nameInput, setNameInput] = useState("")
    const [uniqueNumberInput, setUniqueNumberInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [passwordInput, setPasswordInput] = useState("")
    const [passwordCheckInput, setPasswordCheckInput] = useState("")
    const [phoneNumberInput, setPhoneNumberInput] = useState("")

    return (
        <View>
            <Text style={styles.titleText}>이름</Text>
            <Input
                value={nameInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                placeholder='이름을 입력해주세요'
                onChangeText={text => setNameInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>주민등록번호</Text>
            <Input
                value={uniqueNumberInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                placeholder=''
                onChangeText={text => setUniqueNumberInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>이메일</Text>
            <Input
                value={emailInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder=''
                onChangeText={text => setEmailInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>비밀번호</Text>
            <Input
                value={passwordInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={text => setPasswordInput(text)}
                placeholder=''/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>비밀번호 확인</Text>
            <Input
                value={passwordCheckInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                secureTextEntry={true}
                keyboardType={'default'}
                onChangeText={text => setPasswordCheckInput(text)}
                placeholder=''/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>전화번호</Text>
            <View style={styles.phoneArea}>
                <Input
                    value={phoneNumberInput}
                    type={"cefiInput"}
                    autoCapitalize={'none'}
                    keyboardType={'number-pad'}
                    onChangeText={text => setPhoneNumberInput(text)}
                    placeholder=''/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTitle}>인증하기</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lineView}/>

        </View>
    )

}

const styles = StyleSheet.create({
    textForm: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#DBDBDB',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    titleText: {
        fontFamily: "Inter-Black",
        fontSize: 16,
        color: '#696969',
        marginTop: 20
    },
    lineView: {
        height: hp('0.08%'),
        backgroundColor: '#DBDBDB',
        marginTop: hp('0.4%')
    },
    button: {
        borderColor: '#DBDBDB',
        borderWidth: hp('0.08%'),
        height: hp('4%'),
        width: hp('8%'),
        flex: 1,
        justifyContent: "center"
    },
    buttonTitle: {
        color: '#DBDBDB',
        fontSize: hp('1.6%'),
        justifyContent: "center",
        alignItems: 'center',
        textAlign: 'center'
    },
    phoneArea: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "center",
        marginTop: hp('1%'),

    },
})

export default SignUpForm;