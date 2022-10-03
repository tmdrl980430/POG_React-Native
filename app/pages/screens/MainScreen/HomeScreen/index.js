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
import HomeListItem from "../../../../components/HomeListItem";

import AlarmImage from '../../../../assets/images/alarm.png';
import KickboardImage from '../../../../assets/images/kickboard.png';
import CarImage from '../../../../assets/images/car.png';
import PeopleImage from '../../../../assets/images/people.png';
import CartImage from '../../../../assets/images/cart.png';
import BlankImage from '../../../../assets/images/blank.png'


const Home = ({ navigation }) => {
    const [listItem, setListItem] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const [danger, setDanger] = useState("위험");
    const [dangerDescription, setDangerDescription] = useState("소나기로 노면이 미끄러우니 조심하세요");

    const numColumns = 4;

    const [educationList, setEducationList] = useState([]);

    const image = { uri: "https://reactjs.org/logo-og.png" };
    
    useEffect(() => {
        setListItem([[AlarmImage, "사고 접수"], [KickboardImage, "이륜차"], [CarImage, "메타 트레이닝"]
                    , [PeopleImage, "원스톱\u000A사고 처리"], [CartImage, "마켓"], [BlankImage, ""], [BlankImage, ""], [BlankImage, ""]]);
        setEducationList([1, 2, 3, 4])
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.weatherContainer}>
                <View >
                    <Text style={styles.dangerRateText}>오늘의 위험지수</Text>
                    <Text style={styles.dangerDescriptionText}>{dangerDescription}</Text>
                </View>
                <View style={styles.dangerTextContainer}>
                    <Text style={styles.dangerText}>{danger}</Text>
                </View>
            </ImageBackground>
            <View style={styles.mainContainer}>
                <View style={{padding: wp("1%")}}>
                    <FlatList
                        data={listItem}
                        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
                        renderItem={({item}) => (
                            <HomeListItem
                                image={item[0]}
                                text={item[1]}
                            />
                        )}
                        keyExtractor={(item, index) => index}
                        numColumns={numColumns}
                    />
                </View>
                
                <Text style={styles.educationText}>맞춤형 사고 예방 교육</Text>
                <FlatList
                    data={ educationList }
                    renderItem={({item}) =>
                        <View style={styles.GridViewBlockStyle}></View>}
                    numColumns={2}
                    style={{flex: 1}} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor : 'black'
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

export default Home;