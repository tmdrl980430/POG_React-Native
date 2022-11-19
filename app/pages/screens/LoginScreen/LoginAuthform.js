import React, {useState} from "react";
import {View, Image, Text, TextInput, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Input from "../../../utils/forms/input";

const AuthForm = (props) => {
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


    // const updateInput = (name, value) => {

    // }

    return (
        <View>
            <Input
                value={props.emailInput}
                type={inputState.type}
                autoCapitalize={'none'}
                keyboardType={'email-address'}
                placeholder='이메일'
                onChangeText={text => props.setEmailInput(text)}/>
            <Input
                value={props.passwordInput}
                type={inputState.type}
                autoCapitalize={'none'}
                secureTextEntry={true}
                onChangeText={text => props.setPasswordInput(text)}
                placeholder='비밀번호'/>
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
    }
})

export default AuthForm;