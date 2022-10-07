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


const Accident = ({ background }) => {
    const [listItem, setListItem] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const [danger, setDanger] = useState("위험");
    const [dangerDescription, setDangerDescription] = useState("소나기로 노면이 미끄러우니 조심하세요");

    const numColumns = 4;

    const [educationList, setEducationList] = useState([]);

    const image = { uri: "https://reactjs.org/logo-og.png" };

    const report = "네, 신고해주세요"

    return (
        <View style={styles.container}>
            <ReportButton text={report}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : '#F4ECDC',
    },
    weatherContainer: {
        height: hp("25%"),
        flexDirection: "row",
        paddingTop: hp("10%"),
        paddingStart: wp("40%"),
    },
    mainContainer :{
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
        borderTopStartRadius: wp("2%"),
        borderTopEndRadius: wp("2%"),
        paddingTop: hp("2%"),
        paddingStart: wp("2%"),
        paddingEnd: wp("2%"),
    },
    dangerRateText: {
        color: "white",
        fontSize: wp("5%"),
        fontWeight: "700",
        textAlign: "right",
        marginEnd: wp("2%"),
    },
    dangerDescriptionText: {
        width: wp("30%"),
        color: "white",
        fontSize: wp("3%"),
        fontWeight: "500",
        textAlign: "right",
        marginEnd: wp("4%"),
    },
    dangerTextContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: hp("9%"),
        height: hp("9%"),
        backgroundColor: "white",
        borderRadius: hp("9%"),
    },
    dangerText: {
        color: "#F98383",
        fontSize: wp("7%"),
        fontWeight: "700",
        textAlign: "center",
    },
    educationText: {
        color: "black",
        fontSize: wp("4%"),
        fontWeight: "500",
        paddingTop: hp("2%"),
        paddingStart: wp("3%"),
        paddingBottom: wp("1%"),
    },
    GridViewBlockStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp("15%"),
        margin: wp("2%"),
        backgroundColor: '#EBEAEA',
        borderRadius: wp("2%"),
    },
})

export default Accident;