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


const Home = ({ navigation }) => {
    const listItem = [[AlarmImage, "사고 접수"], [KickboardImage, "이륜차"], [CarImage, "메타 트레이닝"], [PeopleImage, "원스톱 사고 처리"], [CartImage, "마켓"]];
    const [containerWidth, setContainerWidth] = useState(0);
    const margins = 39 * 2;
    const numColumns = 4;

    const [educationList, setEducationList] = useState([]);
    
    useEffect(() => {
        setEducationList([1, 2, 3, 4])
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.weatherContainer}>

            </ImageBackground>
            <View style={{height: 300, backgroundColor: "grey"}}>

            </View>
            <View style={styles.MainContainer}>
                <View contentContainerStyle={styles.HomeListContainer}>
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
                <Text style={{paddingTop: 32}}>맞춤형 사고 예방 교육</Text>
                <FlatList
                    data={ educationList }
                    renderItem={({item}) =>
                        <View style={styles.GridViewBlockStyle}>
                            <Text style={styles.GridViewInsideTextItemStyle} > {item} </Text>
                        </View>}
                    numColumns={2} />
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
        flex: 1,
        height: hp("25%"),
        justifyContent: "center",
        backgroundColor: "grey",
    },
    MainContainer :{
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
        height: "100%",
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        paddingStart: 34,
        paddingEnd: 28,
    },
    HomeListContainer :{
        backgroundColor: "white",
        justifyContent: "center",
        flex: 1,
        marginStart: "",
        margin: "29px 43px 32px 37px",
        height: "100%",
    },
         
        GridViewBlockStyle: {
         
          justifyContent: 'center',
          flex:1,
          alignItems: 'center',
          height: hp("13%"),
          margin: 5,
          backgroundColor: '#EBEAEA',
          borderRadius: 12,
        }
        ,
         
        GridViewInsideTextItemStyle: {
         
           color: '#fff',
           padding: 10,
           fontSize: 18,
           justifyContent: 'center',
           
         },
})

export default Home;