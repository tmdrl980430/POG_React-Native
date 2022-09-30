import React, {useState} from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator,
    ScrollView,
    TouchableOpacity,
    Text,
    Button,
    FlatList
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

    return (
        <View style={styles.container}>
            <Text>HOME</Text>
            <View style={{paddingHorizontal: 33}}>
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
            <HomeListItem image={AlarmImage} text={"text"}></HomeListItem>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        width: "100%",
        height: "100%",
        backgroundColor : 'white'
    }
})

export default Home;