import { View, StyleSheet, Text, Image, useWindowDimensions } from 'react-native';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

const FoodCard = ({ foodItem }) => {

    const { height, width } = useWindowDimensions();

    const tags = foodItem.tags.split(' ').map((tag, idx) => {
        return (
            <View key={idx} style={[s.listGroupItemPrimary, s.my1]}>
                <Text style={[s.listGroupItemText, s.p2]}>{tag}</Text>
            </View>
        );
    })
    return (
        <View style={[s.card, s.m3]}>
            <Image style={[s.cardImgTop, s.overflowHidden, {
                width: width - 50,
                height: 200
            }]} source={{ uri: `https://via.placeholder.com/${width - 50}x200.png` }} />
            <View style={s.cardBody}>
                <Text style={[s.cardTitle, s.h5]}>{foodItem.name}</Text>
                <Text style={[s.bgWarning, s.p2]}>{foodItem.cuisine}</Text>
                <Text style={[s.cardTextLastChild, s.p2]}>{foodItem.description}</Text>
                {foodItem.tags !== '' &&
                    <View style={[s.listGroup, s.my2]}>
                        {tags}
                    </View>
                }
            </View>
        </View>
    );
}

export default FoodCard;