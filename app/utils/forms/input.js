import React from "react";
import {TextInput, StyleSheet} from 'react-native';
import { withRepeat } from "react-native-reanimated";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//재사용 가능 InputText

const input = (props) => {

    let template = null;
    switch (props.type) {
        case "textinput":
            template = <TextInput style={styles.textForm} {...props}/>
            break;
        case "textinputRevised":
            template = <TextInput style={styles.textFormRevised} {...props}/>
            break;
        case "signUpTextInput":
            template = <TextInput style={styles.textSignUpInput} {...props}/>
            break;
        case "cefiInput":
            template = <TextInput style={styles.textcefiInput} {...props}/>
            break;
        default:
            return template
    }
    return template

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
    textFormRevised: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'red',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    textSignUpInput: {
        width: '100%',
        height: hp('4%'),
        paddingLeft: 5,
        paddingRight: 5
    },
    textcefiInput: {
        width: wp('60%'),
        height: hp('4%'),
        paddingLeft: 5,
        paddingRight: 5,
    }
})

export default input;