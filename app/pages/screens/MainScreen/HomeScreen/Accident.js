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

import ReportButton from "../../../../components/ReportButton";


const Accident = ({ route }) => {
    const [listItem, setListItem] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const [danger, setDanger] = useState("위험");
    const [dangerDescription, setDangerDescription] = useState("소나기로 노면이 미끄러우니 조심하세요");
    const [counter, setCounter] = useState();

    const numColumns = 4;

    const [educationList, setEducationList] = useState([]);

    const image = { uri: "https://reactjs.org/logo-og.png" };
    const { type } = route.params;

    var countDown = type == 0 ? 30 : (type == 1 ? 15 : 10);
    const accidentOccur = type == 0 ? "경상해" : (type == 1 ? "중상해" : "치명적");
    const askReport = `괜찮으신가요?\n신고 알림을 보낼까요?`;
    const report119 = "119와 지정보호자에게 신고합니다";
    const report = "네, 신고해주세요";
    const noreport = "아니요, 괜찮아요";

    useEffect(() => {
        setCounter(type == 0 ? 30 : (type == 1 ? 15 : 10));
    }, []);
    
    useEffect(() => {
        let myInterval = setInterval(() => {
            if (counter > 0) {
                setCounter(counter - 1);
            }
        }, 1000);
        if (counter <= 0) {
            alert("자동 신고");
        }
        return () => {
            clearInterval(myInterval);
        };
    }, [counter]);

    const styles = StyleSheet.create({
        container : {
            flex: 1,
            backgroundColor : type == 0 ? "#F4ECDC" : (type == 1 ? "#F4DCDC" : "#F88D8D"),
        },
        countDownText: {
            left: "41%",
            height: wp("18%"),
            width: wp("18%"),
            borderColor: "white",
            borderWidth: wp("2%"),
            borderRadius: wp("9%"),
            color: type == 2 ? "white" : "black",
            fontSize: wp("7%"),
            fontWeight: "600",
            textAlign: "center",
            textAlignVertical: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: hp("20%"),
        },
        accidentOccurText :{
            color: type == 2 ? "white" : "black",
            fontSize: wp("5%"),
            fontWeight: "400",
            textAlign: "center",
            marginTop: hp("2%"),
        },
        askReportText: {
            color: type == 2 ? "white" : "black",
            fontSize: wp("5%"),
            fontWeight: "600",
            textAlign: "center",
            marginTop: hp("1%"),
        },
        report119Text: {
            color: type == 2 ? "white" : "black",
            fontSize: wp("3%"),
            fontWeight: "300",
            textAlign: "center",
            marginTop: hp("2%"),
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.countDownText}>{counter}</Text>
            <Text style={styles.accidentOccurText}>{`${accidentOccur} 사고 발생`}</Text>
            <Text style={styles.askReportText}>{askReport}</Text>
            <Text style={styles.report119Text}>{report119}</Text>
            <ReportButton text={report}/>
            <ReportButton text={noreport}/>
        </View>
    )
}

export default Accident;