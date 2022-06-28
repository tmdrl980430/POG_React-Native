import React, {useState} from "react";
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
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
            <Text style={styles.titleText}>주민등록번호</Text>
            <Input
                value={uniqueNumberInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                placeholder=''
                onChangeText={text => setUniqueNumberInput(text)}/>
            <Text style={styles.titleText}>이메일</Text>
            <Input
                value={emailInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder=''
                onChangeText={text => setEmailInput(text)}/>
            <Text style={styles.titleText}>비밀번호</Text>
            <Input
                value={passwordInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={text => setPasswordInput(text)}
                placeholder=''/>
            <Text style={styles.titleText}>비밀번호 확인</Text>
            <Input
                value={passwordCheckInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                secureTextEntry={true}
                keyboardType={'default'}
                onChangeText={text => setPasswordCheckInput(text)}
                placeholder=''/>
            <Text style={styles.titleText}>전화번호</Text>
            <Input
                value={phoneNumberInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                onChangeText={text => setPhoneNumberInput(text)}
                placeholder=''/>
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
    }
})

export default SignUpForm;