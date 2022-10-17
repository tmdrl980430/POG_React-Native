import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Accept = () => {

    const [isAllSelected, setAllSelection] = useState(false);

    const [isFirstSelected, setFirstSelection] = useState(false);
    const [isSecondeSelected, setSecondSelection] = useState(false);
    const [isThirdSelected, setThirdSelection] = useState(false);

    useEffect(() => {
        console.log(isAllSelected)
        allSelect();
    }, [isAllSelected])

    useEffect(() => {
        if (isFirstSelected && isSecondeSelected && isThirdSelected) {
            setAllSelection(true);
        } else if (!isFirstSelected || !isSecondeSelected || !isThirdSelected) {
            setAllSelection(false);
        }
    }, [isFirstSelected, isSecondeSelected, isThirdSelected])

    const allSelect = () => {
        if (isAllSelected === true) {
            setFirstSelection(isAllSelected);
            setSecondSelection(isAllSelected);
            setThirdSelection(isAllSelected);
        } else {}
    }

    return (
        <View>
            <Text style={styles.FirstText}>약관 동의</Text>
            <View style={styles.AllAcceptCheckBoxContainer}>
                <BouncyCheckbox
                    size={25}
                    fillColor="#62C88E"
                    unfillColor="#FFFFFF"
                    iconStyle={{
                        borderColor: "#62C88E",
                        borderRadius: 0
                    }}
                    textStyle={{}}
                    onPress={() => {
                        setAllSelection(!isAllSelected)
                    }}/>
                <Text style={styles.AllAcceptText}>전체 약관 동의</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#62C88E"
                        unfillColor="#FFFFFF"
                        iconStyle={{
                            borderColor: "#62C88E",
                            borderRadius: 0
                        }}
                        textStyle={{}}
                        onPress={() => {
                            setFirstSelection(!isFirstSelected)
                        }}/>
                    <Text style={styles.SecondText}>[필수] 이용약관 동의</Text>

                </View>
                <Text style={styles.moreText}>{'>'}</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#62C88E"
                        unfillColor="#FFFFFF"
                        iconStyle={{
                            borderColor: "#62C88E",
                            borderRadius: 0
                        }}
                        textStyle={{}}
                        onPress={() => {
                            setSecondSelection(!isSecondeSelected)
                        }}/>
                    <Text style={styles.SecondText}>[필수] 개인정보 수집 동의</Text>

                </View>
                <Text style={styles.moreText}>{'>'}</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    <BouncyCheckbox
                        size={25}
                        fillColor="#62C88E"
                        unfillColor="#FFFFFF"
                        iconStyle={{
                            borderColor: "#62C88E",
                            borderRadius: 0
                        }}
                        textStyle={{}}
                        onPress={() => {
                            setThirdSelection(!isThirdSelected)
                        }}/>
                    <Text style={styles.SecondText}>[선택] 이벤트, 혜택 및 마케팅 알림 받기</Text>

                </View>
                <Text style={styles.moreText}>{'>'}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    FirstText: {
        fontFamily: "Inter-Black",
        fontSize: 16,
        justifyContent: 'flex-start',
        color: '#696969',
        marginTop: hp('5%'),
        marginBottom: hp('2%')
    },
    CheckBoxContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    AllAcceptCheckBoxContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: hp('1%')
    },
    AllAcceptText: {
        fontFamily: "Inter-Bold",
        fontSize: hp('1.8%'),
        color: '#696969',
        justifyContent: 'center',
        marginStart: wp('1%')
    },
    SecondText: {
        fontFamily: "Inter-Black",
        fontSize: hp('1.8%'),
        color: '#696969',
        justifyContent: 'center',
        marginStart: wp('1%')
    },
    ThirdText: {
        fontFamily: "Inter-Black",
        fontSize: hp('1.8%'),
        color: '#696969',
        justifyContent: 'center'
    },
    checkbox: {
        borderColor: '#DBDBDB',
        borderRadius: 2,
        border: 1.5
    },
    checkboxArea: {
        flexDirection: "row",
        marginTop: hp('3%')
    },
    titleArea: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10
    },
    moreText: {
        fontFamily: "Inter-Black",
        fontSize: 14,
        color: '#D8D8D8'
    }
})

export default Accept;
