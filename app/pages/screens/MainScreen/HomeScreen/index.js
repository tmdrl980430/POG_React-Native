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
    ImageBackground,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import RNLocation from 'react-native-location';
import HomeListItem from "../../../../components/HomeListItem";

import AlarmImage from '../../../../assets/images/alarm.png';
import KickboardImage from '../../../../assets/images/kickboard.png';
import CarImage from '../../../../assets/images/car.png';
import PeopleImage from '../../../../assets/images/people.png';
import CartImage from '../../../../assets/images/cart.png';
import BlankImage from '../../../../assets/images/blank.png'
import CloudImage from '../../../../assets/images/cloud.png'

const Home = ({navigation}) => {
    const [listItem, setListItem] = useState([]);
    const [containerWidth, setContainerWidth] = useState(0);
    const [danger, setDanger] = useState("위험");
    const [dangerDescription, setDangerDescription] = useState(
        `소나기로 노면이 {'\n'}미끄러우니 조심하세요`
    );

    const numColumns = 4;

    const [educationList, setEducationList] = useState([]);

    const image = {
        uri: "https://reactjs.org/logo-og.png"
    };

    RNLocation.configure({
        distanceFilter: 5.0,
        desiredAccuracy: {
            ios: "best",
            android: "balancedPowerAccuracy"
        },
    });

    RNLocation.requestPermission({
        ios: "whenInUse",
        android: {
          detail: "coarse"
        }
        }).then(granted => {
            if (granted) {
                this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                    console.log(locations);

              /* Example location returned
              {
                speed: -1,
                longitude: -0.1337,
                latitude: 51.50998,
                accuracy: 5,
                heading: -1,
                altitude: 0,
                altitudeAccuracy: -1
                floor: 0
                timestamp: 1446007304457.029,
                fromMockProvider: false
              }
              */
            })
          }
        })

        RNLocation.getLatestLocation({ timeout: 60000 })
        .then(latestLocation => {
            console.log("latest: ", latestLocation)
          // Use the location here
        })
    useEffect(() => {
        setListItem([
            [
                AlarmImage, "사고 접수"
            ],
            [
                KickboardImage, "이륜차"
            ],
            [
                CarImage, "메타 트레이닝"
            ],
            [
                PeopleImage, "원스톱\u000A사고 처리"
            ],
            [
                CartImage, "마켓"
            ],
            [
                BlankImage, ""
            ],
            [
                BlankImage, ""
            ],
            [
                BlankImage, ""
            ]
        ]);
        setEducationList([1, 2, 3, 4])
    }, []);

    const changeScreen = (index) => {
        if (index == 5) {
            navigation.navigate('Accident', {type: 0})
        } else if (index == 6) {
            navigation.navigate('Accident', {type: 1})
        } else if (index == 7) {
            navigation.navigate('Accident', {type: 2})
        } else {
            alert(`${index} clicked`);
        }
    }

    return (
        <View style={styles.container}>
            <View resizeMode="cover" style={styles.weatherContainer}>
                <Image source={CloudImage}></Image>
                <View style={styles.textArea}>
                    <View >
                        <Text style={styles.dangerRateText}>오늘의 위험지수</Text>
                        <Text style={styles.dangerDescriptionText}>소나기로 노면이 {'\n'}미끄러우니 조심하세요</Text>
                    </View>
                </View>
                <View style={styles.dangerTextContainer}>
                        <Text style={styles.dangerText}>{danger}</Text>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={{
                        padding: wp("1%")
                    }}>
                    <FlatList
                        data={listItem}
                        onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
                        renderItem={({item, index}) => (
                            <TouchableWithoutFeedback onPress={() => changeScreen(index)}>
                                <View
                                    style={{
                                        width: wp("23%")
                                    }}>
                                    <HomeListItem image={item[0]} text={item[1]}/>
                                </View>
                            </TouchableWithoutFeedback>
                        )}
                        keyExtractor={(item, index) => index}
                        numColumns={numColumns}/>
                </View>

                <Text
                    style={styles.educationText}
                    onPress={() => navigation.navigate('Accident', {type: 0})}>맞춤형 사고 예방 교육</Text>
                <FlatList
                    data={educationList}
                    renderItem={({item}) => <View style={styles.GridViewBlockStyle}></View>}
                    numColumns={2}
                    style={{
                        flex: 1
                    }}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    weatherContainer: {
        height: hp("25%"),
        flexDirection: "row",
        paddingTop: hp("5%"),
        marginStart: wp("5%"),
        alignItems: "center",
    },
    mainContainer: {
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
        borderTopStartRadius: wp("2%"),
        borderTopEndRadius: wp("2%"),
        paddingTop: hp("2%"),
        paddingStart: wp("2%"),
        paddingEnd: wp("2%")
    },
    textArea : {
        marginStart: wp("4%"),
    },
    dangerRateText: {
        color: "white",
        fontSize: wp("5%"),
        fontWeight: "700",
        textAlign: "right",
        marginEnd: wp("2%")
    },
    dangerDescriptionText: {
        width: wp("30%"),
        color: "white",
        fontSize: wp("3%"),
        fontWeight: "500",
        textAlign: "right",
        marginEnd: wp("4%")
    },
    dangerTextContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: hp("7%"),
        height: hp("7%"),
        backgroundColor: "white",
        borderRadius: hp("9%")
    },
    dangerText: {
        color: "#F98383",
        fontSize: wp("5%"),
        fontWeight: "700",
        textAlign: "center"
    },
    educationText: {
        color: "black",
        fontSize: wp("4%"),
        fontWeight: "500",
        paddingTop: hp("2%"),
        paddingStart: wp("3%"),
        paddingBottom: wp("1%")
    },
    GridViewBlockStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: hp("15%"),
        margin: wp("2%"),
        backgroundColor: '#EBEAEA',
        borderRadius: wp("2%")
    }
})

export default Home;