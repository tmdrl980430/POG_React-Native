import React, {useState} from "react";
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../../utils/forms/input";

const SignUpForm = (props) => {

    return (
        <View>
            <Text style={styles.titleText}>이름</Text>
            <Input
                value={props.nameInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                placeholder='이름을 입력해주세요'
                onChangeText={text => props.setNameInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>주민등록번호</Text>
            <Input
                value={props.uniqueNumberInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'number-pad'}
                placeholder='주민등록번호를 입력해주세요'
                onChangeText={text => props.setUniqueNumberInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>이메일</Text>
            <Input
                value={props.emailInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder='이메일을 입력해주세요'
                onChangeText={text => props.setEmailInput(text)}/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>비밀번호</Text>
            <Input
                value={props.passwordInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                keyboardType={'default'}
                secureTextEntry={true}
                onChangeText={text => props.setPasswordInput(text)}
                placeholder='비밀번호를 입력해주세요'/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>비밀번호 확인</Text>
            <Input
                value={props.passwordCheckInput}
                type={"signUpTextInput"}
                autoCapitalize={'none'}
                secureTextEntry={true}
                keyboardType={'default'}
                onChangeText={text => props.setPasswordCheckInput(text)}
                placeholder='위와 똑같은 비밀번호를 입력해주세요'/>
            <View style={styles.lineView}/>

            <Text style={styles.titleText}>전화번호</Text>
            <View style={styles.phoneArea}>
                <Input
                    value={props.phoneNumberInput}
                    type={"cefiInput"}
                    autoCapitalize={'none'}
                    keyboardType={'default'}
                    onChangeText={text => props.setPhoneNumberInput(text)}
                    placeholder='전화번호를 입력해주세요'/>
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