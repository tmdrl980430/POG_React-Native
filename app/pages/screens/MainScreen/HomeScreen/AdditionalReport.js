import React, {useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    Button,
    FlatList,
    ImageBackground
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SendSMS from 'react-native-sms';
import { useRecoilValue } from "recoil";
import { insuranceCompanyNumber, protectorNumber } from "../../../../recoil";
import ReportButton from "../../../../components/ReportButton";
import AdditionalReportButton from '../../../../components/ReportButton/AdditionalReportButton';

const AdditionalReport = ({ navigation }) => {
    const noautoreport = "시간내에 자동신고가\n이루어지지 않았습니다";
    const askreport = "추가신고가 필요하세요?";
    const report119 = ["119", "응급상황이 발생했어요"];
    const report112 = ["112", "가해자, 피해자 판정이 필요해요"];
    const insurance = ["내 보험사", "과실 산정 및\n보험금 청구가 필요해요"];
    const guardian = ["지정보호자", "지인에게 알려주세요"];
    const noreport = "아니요, 괜찮아요";
    
    // recoil에서 번호 가져오기
    const protectorNum = useRecoilValue(protectorNumber);
    const insuranceNum = useRecoilValue(insuranceCompanyNumber);

    // 서버랑 연결하면 이 코드는 필요 없음.
    const sendMessage = (phone) => {
        SendSMS.send({
            body: 'The default body of the SMS!',
            recipients: [phone],
            successTypes: ['sent', 'queued'],
            allowAndroidSendWithoutReadPermission: true
        }, (completed, cancelled, error) => {
     
            console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + ' error: ' + error);
     
        });
    }

    const cancelReport = () => {
        navigation.pop();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.noAutoReportText}>{noautoreport}</Text>
            <Text style={styles.askReportText}>{askreport}</Text>
            <AdditionalReportButton target={report119[0]} text={report119[1]} onPress={() => sendMessage('119')}/>
            <AdditionalReportButton target={report112[0]} text={report112[1]} onPress={() => sendMessage('112')}/>
            <AdditionalReportButton target={insurance[0]} text={insurance[1]} onPress={() => sendMessage(insuranceNum)}/>
            <AdditionalReportButton target={guardian[0]} text={guardian[1]} onPress={() => sendMessage(protectorNum)}/>
            <View style={{height: hp("18%"), paddingTop: hp("3%")}}>
                <ReportButton text={noreport} onPress={() => cancelReport()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : "#5C5C5C",
    },
    noAutoReportText: {
        color: "white",
        fontSize: wp("5%"),
        fontWeight: "400",
        textAlign: "center",
        marginTop: hp("15%"),
    },
    askReportText: {
        color: "white",
        fontSize: wp("5%"),
        fontWeight: "600",
        textAlign: "center",
        marginTop: hp("2%"),
        marginBottom: hp("1%"),
    },
});

export default AdditionalReport;