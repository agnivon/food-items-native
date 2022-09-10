import { View, StyleSheet, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

import FoodCard from './FoodCard';

import { getFoodItems } from '../database';

const FoodList = () => {

    const filters = useSelector(state => state.filters);

    console.log(filters);

    const DATA = getFoodItems().filter(foodItem => {
        for(let filter in filters) {
            // console.log(filter, foodItem.tags);
            if(filters[filter] !== foodItem.tags.includes(filter)) {
                return false;
            }
        }
        return true;
    })
    
    const renderItem = ({ item }) => {
        return (<FoodCard foodItem={item} />);
    }

    return (
        <View style={s.flex1}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default FoodList;