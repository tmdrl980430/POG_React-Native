import React, {useEffect, useState} from "react";
import {View, Image, StyleSheet, Text} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';

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
        if(isFirstSelected && isSecondeSelected && isThirdSelected){
            setAllSelection(true);
        } else if(!isFirstSelected || !isSecondeSelected || !isThirdSelected){
            setAllSelection(false);
        } 
    }, [isFirstSelected, isSecondeSelected, isThirdSelected])

    const allSelect = () => {
        if(isAllSelected === true){
            setFirstSelection(isAllSelected);
            setSecondSelection(isAllSelected);
            setThirdSelection(isAllSelected);
        } else {

        }
    }

    return (
        <View>
            <Text style={styles.FirstText}>약관 동의</Text>
            <View style={styles.AllAcceptCheckBoxContainer}>
                {
                    Platform.OS === 'ios'
                        ? (
                            <CheckBox
                                lineWidth={1.5}
                                boxType="square"
                                disabled={false}
                                value={isAllSelected}
                                tintColors={'#DBDBDB'}
                                onCheckColor={'#62C88E'}
                                onFillColor={'white'}
                                onTintColor={'#62C88E'}
                                onValueChange={(newValue) => setAllSelection(newValue)}/>
                        )
                        : (
                            <CheckBox
                                value={isAllSelected}
                                disabled={false}
                                tintColors={'#DBDBDB'}
                                onValueChange={(newValue) => setAllSelection(newValue)}/>
                        )
                }
                <Text style={styles.AllAcceptText}>전체 약관 동의</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    {
                        Platform.OS === 'ios'
                            ? (
                                <CheckBox
                                    lineWidth={1.5}
                                    boxType="square"
                                    disabled={false}
                                    value={isFirstSelected}
                                    tintColors={'#DBDBDB'}
                                    onCheckColor={'#62C88E'}
                                    onFillColor={'white'}
                                    onTintColor={'#62C88E'}
                                    onValueChange={(newValue) => setFirstSelection(newValue)}/>
                            )
                            : (
                                <CheckBox
                                    value={isFirstSelected}
                                    disabled={false}
                                    tintColors={'#DBDBDB'}
                                    onValueChange={(newValue) => setFirstSelection(newValue)}/>
                            )
                    }
                    <Text style={styles.SecondText}>[필수] 이용약관 동의</Text>

                </View>
                <Text style={styles.moreText}>{'>'}</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    {
                        Platform.OS === 'ios'
                            ? (
                                <CheckBox
                                    lineWidth={1.5}
                                    boxType="square"
                                    disabled={false}
                                    value={isSecondeSelected}
                                    tintColors={'#DBDBDB'}
                                    onCheckColor={'#62C88E'}
                                    onFillColor={'white'}
                                    onTintColor={'#62C88E'}
                                    onValueChange={(newValue) => setSecondSelection(newValue)}/>
                            )
                            : (
                                <CheckBox
                                    value={isSecondeSelected}
                                    disabled={false}
                                    tintColors={'#DBDBDB'}
                                    onValueChange={(newValue) => setSecondSelection(newValue)}/>
                            )
                    }
                    <Text style={styles.SecondText}>[필수] 개인정보 수집 동의</Text>

                </View>
                <Text style={styles.moreText}>{'>'}</Text>
            </View>
            <View style={styles.titleArea}>
                <View style={styles.CheckBoxContainer}>
                    {
                        Platform.OS === 'ios'
                            ? (
                                <CheckBox
                                    boxType="square"
                                    disabled={false}
                                    value={isThirdSelected}
                                    tintColors={'#DBDBDB'}
                                    onCheckColor={'#62C88E'}
                                    onFillColor={'white'}
                                    onTintColor={'#62C88E'}
                                    onValueChange={(newValue) => setThirdSelection(newValue)}/>
                            )
                            : (
                                <CheckBox
                                    value={isThirdSelected}
                                    disabled={false}
                                    tintColors={'#DBDBDB'}
                                    onValueChange={(newValue) => setThirdSelection(newValue)}/>
                            )
                    }
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
        fontSize: 16,
        color: '#696969',
        justifyContent: 'center',
        marginStart: wp('2%')
    },
    SecondText: {
        fontFamily: "Inter-Black",
        fontSize: 16,
        color: '#696969',
        justifyContent: 'center',
        marginStart: wp('2%')
    },
    ThirdText: {
        fontFamily: "Inter-Black",
        fontSize: 16,
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
